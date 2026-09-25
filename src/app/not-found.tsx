import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
          The page or digital asset you are looking for does not exist or has been relocated.
        </p>

        <div className="pt-2 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/25"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/products"
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 light:text-slate-700 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 border border-white/10"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}
