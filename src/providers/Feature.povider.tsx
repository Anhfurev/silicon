"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface VoiceInputContextType {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  error: string | null;
  noSpeech: boolean;
}

const VoiceInputContext = createContext<VoiceInputContextType | null>(null);

type SpeechRecognitionResultLike = { transcript: string };
type SpeechRecognitionEventLike = {
  results: SpeechRecognitionResultLike[][];
};

interface SpeechRecognitionType {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionType;

export function VoiceInputProvider({ children }: { children: ReactNode }) {
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [noSpeech, setNoSpeech] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const windowWithSpeech = window as typeof window & {
      SpeechRecognition?: SpeechRecognitionConstructor;
      webkitSpeechRecognition?: SpeechRecognitionConstructor;
    };

    const SpeechRecognition =
      (windowWithSpeech.SpeechRecognition || windowWithSpeech.webkitSpeechRecognition) as
        | SpeechRecognitionConstructor
        | undefined;

    if (!SpeechRecognition) {
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setError("Speech Recognition not supported");
      }, 0);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "mn-MN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (e: SpeechRecognitionEventLike) => {
      const transcriptText = e.results[0][0].transcript;
      console.log("Speech recognition result:", transcriptText);
      setTranscript(transcriptText);
    };

    recognition.onerror = (e: { error: string }) => {
      // Handle different error types
      const errorType = e.error;
      
      // "no-speech" is not a critical error - just means no speech was detected
      // We'll handle it gracefully and show a message to the user
      if (errorType === "no-speech") {
        setIsListening(false);
        setError(null);
        setNoSpeech(true);
        // Clear the no-speech message after 3 seconds
        setTimeout(() => {
          setNoSpeech(false);
        }, 3000);
        return;
      }
      
      // "aborted" is also not an error - user or system canceled
      if (errorType === "aborted") {
        setIsListening(false);
        setError(null);
        return;
      }
      
      // Only log actual errors
      console.error("Speech recognition error:", errorType);
      
      // Other errors that we should handle
      if (errorType === "audio-capture") {
        setError("Микрофон олдсонгүй. Микрофоны эрхийг шалгана уу.");
      } else if (errorType === "not-allowed") {
        setError("Микрофоны эрх олгогдоогүй байна. Эрхийг зөвшөөрнө үү.");
      } else {
        setError(`Алдаа гарлаа: ${errorType}`);
      }
      
      setIsListening(false);
    };

    recognition.onend = () => {
      // Only set listening to false if we're actually listening
      // This prevents race conditions
      setIsListening((prev) => {
        if (prev) {
          return false;
        }
        return prev;
      });
    };

    recognitionRef.current = recognition;

    return () => recognition?.stop?.();
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return;
    
    try {
      setTranscript("");
      setError(null);
      setNoSpeech(false);
      recognitionRef.current.start();
      setIsListening(true);
    } catch (err) {
      // Handle case where recognition is already running
      console.log("Recognition might already be running, stopping first...");
      try {
        recognitionRef.current.stop();
        // Wait a bit then retry
        setTimeout(() => {
          if (recognitionRef.current) {
            recognitionRef.current.start();
            setIsListening(true);
          }
        }, 100);
      } catch (retryErr) {
        console.error("Error starting recognition:", retryErr);
        setError("Дахин оролдоно уу");
        setIsListening(false);
      }
    }
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return (
    <VoiceInputContext.Provider
      value={{
        isListening,
        transcript,
        startListening,
        stopListening,
        error,
        noSpeech,
      }}
    >
      {children}
    </VoiceInputContext.Provider>
  );
}

export function useVoiceInput() {
  const ctx = useContext(VoiceInputContext);
  if (!ctx) throw new Error("useVoiceInput must be used in provider");
  return ctx;
}
