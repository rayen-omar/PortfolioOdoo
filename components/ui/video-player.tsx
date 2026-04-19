"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Gauge, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  src: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  defaultPlaybackRate?: number
  title?: string
  ariaLabel?: string
}

export function VideoPlayer({
  src,
  className = "",
  autoPlay = false,
  loop = true,
  muted = true,
  defaultPlaybackRate = 1.5,
  title,
  ariaLabel,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [playbackRate, setPlaybackRate] = useState(defaultPlaybackRate)
  const [isMuted, setIsMuted] = useState(muted)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const changeSpeed = (rate: number) => {
    setPlaybackRate(rate)
    if (videoRef.current) {
      videoRef.current.playbackRate = rate
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const speedOptions = [1, 1.25, 1.5, 1.75, 2]

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover rounded-lg"
        loop={loop}
        muted={isMuted}
        autoPlay={autoPlay}
        playsInline
        title={title}
        aria-label={ariaLabel || title || "Vidéo de démonstration du projet"}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Controls overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Play/Pause */}
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-white hover:bg-white/20"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>

          {/* Speed control */}
          <div className="flex items-center gap-1 bg-black/50 rounded-lg px-2 py-1">
            <Gauge className="h-3 w-3 text-white" />
            <div className="flex gap-1">
              {speedOptions.map((rate) => (
                <button
                  key={rate}
                  onClick={() => changeSpeed(rate)}
                  className={`px-2 py-0.5 text-xs rounded transition-colors ${
                    playbackRate === rate
                      ? "bg-primary text-white"
                      : "text-white/70 hover:text-white hover:bg-white/20"
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>

          {/* Mute/Unmute */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="text-white hover:bg-white/20"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Play button overlay when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          >
            <Play className="h-8 w-8 ml-1" />
          </Button>
        </div>
      )}
    </div>
  )
}











