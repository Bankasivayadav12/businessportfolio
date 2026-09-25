import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center animate-spin">
        <Loader2 className="w-6 h-6" />
      </div>
      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
        Loading Ecosystem Assets...
      </p>
    </div>
  );
}
