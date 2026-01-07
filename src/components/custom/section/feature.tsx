"use client"

import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useRef, useState } from "react"

import { useVoiceInput } from "@/providers/Feature.povider"
import { matchQuestion } from "@/utils/Question.matcher"
import { playAudio } from "@/utils/Audio.player"

export default function VoiceInputButton() {
  const { isListening, transcript, startListening, stopListening, noSpeech } =
    useVoiceInput()
  const prevListeningRef = useRef(false)
  const processedTranscriptRef = useRef("")
  const [displayAnswer, setDisplayAnswer] = useState<string | null>(null)

  // Process transcript when listening stops
  useEffect(() => {
    // If we just stopped listening
    if (!isListening && prevListeningRef.current) {
      // If we have a transcript, process it
      if (transcript && transcript !== processedTranscriptRef.current) {
        processedTranscriptRef.current = transcript
        
        console.log("🎤 Received transcript:", transcript)
        console.log("🎤 Transcript length:", transcript.length)
        console.log("🎤 Transcript characters:", Array.from(transcript).map(c => `${c} (${c.charCodeAt(0)})`).join(", "))
        const result = matchQuestion(transcript)

        // Use setTimeout to avoid synchronous setState in effect
        setTimeout(() => {
          if (result) {
            console.log("Match found:", result.question)
            if (result.audio_path) {
              playAudio(result.audio_path)
              setDisplayAnswer(null) // Clear answer if audio is playing
            } else {
              console.log("No audio path for matched question")
              // Show answer in tooltip
              setDisplayAnswer(result.answer)
              // Auto-hide answer after 10 seconds
              setTimeout(() => {
                setDisplayAnswer(null)
              }, 10000)
            }
          } else {
            console.log("No match found for transcript:", transcript)
            playAudio("audio/not-found.m4a")
            setDisplayAnswer(null)
          }
        }, 0)
      } else {
        // No transcript - this is normal for "no-speech" errors
        // Just reset the processed transcript ref silently
        processedTranscriptRef.current = ""
      }
    }
    
    prevListeningRef.current = isListening
    
    // Clear answer when starting to listen again
    if (isListening) {
      setTimeout(() => {
        setDisplayAnswer(null)
      }, 0)
    }
  }, [isListening, transcript])

  const toggle = () => {
    if (isListening) {
      stopListening()
    } else {
      processedTranscriptRef.current = ""
      setDisplayAnswer(null)
      startListening()
    }
  }

  // Determine tooltip content and visibility
  const tooltipOpen = isListening || displayAnswer !== null || noSpeech
  const tooltipContent = isListening 
    ? "Та ярина уу!" 
    : noSpeech
    ? "Яриа илрээгүй байна"
    : displayAnswer || ""

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <Tooltip open={tooltipOpen}>
          <TooltipTrigger asChild>
            <Button
              onClick={toggle}
              size="lg"
              aria-label="Voice input"
              className={cn(
                "h-16 w-16 rounded-full",
                "bg-primary text-white shadow-xl",
                isListening && "ring-4 ring-primary/40"
              )}
            >
              {isListening ? <MicOff /> : <Mic />}
            </Button>
          </TooltipTrigger>

          <TooltipContent
            side="right"
            align="center"
            className={cn(
              "bg-primary text-white px-3 py-1 text-xs font-semibold",
              displayAnswer 
                ? "max-w-md rounded-lg whitespace-normal" 
                : "rounded-full"
            )}
          >
            {tooltipContent}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
