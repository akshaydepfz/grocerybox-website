"use client";

import { Play, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/video.mp4";

export function WatchTutorialButton() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  useEffect(() => {
    if (!open || !videoRef.current) return;
    void videoRef.current.play().catch(() => {});
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-lime/40 hover:bg-white/10"
      >
        <Play className="h-4 w-4 fill-current" aria-hidden />
        Watch Tutorial
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Tutorial video"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-forest shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
              aria-label="Close tutorial"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              controls
              playsInline
              className="aspect-video w-full bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : null}
    </>
  );
}