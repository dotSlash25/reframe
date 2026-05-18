"use client";

import { EditRecipe } from "@/lib/types";
import { Star } from "lucide-react";

interface Props {
  recipe: EditRecipe;
  onChange: (patch: Partial<EditRecipe>) => void;
}

const FRAMERATES = [0, 24, 30, 60] as const;
const INFO = ["Default", "Cinema", "Standard", "Smooth"] as const;

export default function FrameRateControl({ recipe, onChange }: Props) {
  return (
    <div className="flex gap-2">
      {FRAMERATES.map((fps, idx) => {
        const active = recipe.frameRate === fps;
        return (
          <button
            type="button"
            key={fps}
            onClick={() => onChange({ frameRate: fps })}
            className={`
              flex-1 flex flex-col items-center gap-1.5 py-3 rounded-lg border text-xs transition-all duration-150 cursor-pointer
              hover:scale-[1.03] active:scale-[0.97]
              ${
                active
                  ? "border-film-500 bg-film-50 text-film-700 font-heading font-semibold"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-film-300 bg-[var(--surface)]"
              }
            `}
          >
            {/*<TimerReset size={15} style={{ transform: `rotate(${deg}deg)` }} className="transition-transform" />*/}
            {/*<span className="sr-only">Rotate video to {deg} degrees</span>*/}
            {fps === 0 ? <Star size={15} /> : <p>{fps} FPS</p>}
            <p>{INFO[idx]}</p>
          </button>
        );
      })}
    </div>
  );
}
