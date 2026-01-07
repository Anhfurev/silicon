// services/audio-player.ts
let currentAudio: HTMLAudioElement | null = null

export function playAudio(path: string) {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  currentAudio = new Audio(`/${path}`)
  currentAudio.volume = 1
  currentAudio.play()
}
