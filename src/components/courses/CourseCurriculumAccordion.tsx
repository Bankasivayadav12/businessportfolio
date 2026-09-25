"use client";

import React, { useState } from "react";
import { CourseModule } from "@/types";
import { ChevronDown, ChevronUp, PlayCircle, Lock } from "lucide-react";

export function CourseCurriculumAccordion({ modules }: { modules: CourseModule[] }) {
  // Default first module open
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [modules[0]?.id || "m1"]: true,
  });

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4">
      {modules.map((mod, index) => {
        const isOpen = !!openModules[mod.id];
        return (
          <div
            key={mod.id}
            className="rounded-2xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden transition-all shadow-md"
          >
            {/* Header Accordion Button */}
            <button
              onClick={() => toggleModule(mod.id)}
              className="w-full p-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">
                    Module 0{index + 1}
                  </span>
                  <span className="text-xs text-slate-500">
                    {mod.lessons.length} Lessons
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white light:text-slate-900">
                  {mod.title}
                </h4>
                {mod.description && (
                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-1">
                    {mod.description}
                  </p>
                )}
              </div>

              <div className="p-2 rounded-xl bg-white/5 text-slate-400">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {/* Expanded Lessons List */}
            {isOpen && (
              <div className="px-5 pb-5 pt-1 space-y-2 border-t border-white/5 light:border-slate-100">
                {mod.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.isFreePreview ? (
                        <PlayCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      )}
                      <span className="font-medium text-slate-200 light:text-slate-800">
                        {lesson.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {lesson.isFreePreview && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                          Free Preview
                        </span>
                      )}
                      <span className="text-slate-500 font-mono">{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
