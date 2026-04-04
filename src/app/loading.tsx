export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Spinner */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/70 animate-spin" />
                </div>
                <span className="text-white/30 text-sm tracking-widest uppercase">
                    Yükleniyor
                </span>
            </div>
        </div>
    );
}
