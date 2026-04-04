"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-md text-center relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <svg
                        className="w-8 h-8 text-white/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                    </svg>
                </div>

                <h2 className="text-3xl font-bold mb-4 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Bir Hata Oluştu
                </h2>
                <p className="text-white/50 text-base mb-10 leading-relaxed">
                    Beklenmedik bir sorunla karşılaştık. Teknik ekibimiz durumdan haberdar edildi.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                    >
                        Tekrar Dene
                    </button>
                    <Link
                        href="/"
                        className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white text-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                    >
                        Ana Sayfa
                    </Link>
                </div>
            </div>
        </div>
    );
}
