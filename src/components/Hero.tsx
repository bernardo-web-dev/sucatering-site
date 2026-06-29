import { siteData } from "@/data/siteData";

const whatsappUrl = `https://wa.me/${siteData.company.whatsapp}?text=${encodeURIComponent(
  siteData.company.whatsappMessage
)}`;

export function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1C1C1A]">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, #C9A96E22 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 20%, #C9A96E11 0%, transparent 50%)`,
        }}
      />

      {/* Decorative grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Gold line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
              {hero.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#FAFAF8] leading-[1.05] mb-6">
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <em className="not-italic text-[#C9A96E]">{line}</em>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="text-[#A8A8A0] text-base sm:text-lg leading-relaxed max-w-md mb-10">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#C9A96E] text-[#1C1C1A] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#D4B87A] active:scale-95 transition-all duration-200 shadow-lg shadow-[#C9A96E]/20"
            >
              <WhatsAppIcon />
              {hero.cta}
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 text-[#FAFAF8]/70 text-sm font-medium px-8 py-4 rounded-full border border-[#FAFAF8]/15 hover:border-[#FAFAF8]/30 hover:text-[#FAFAF8] transition-all duration-200"
            >
              {hero.ctaSecondary}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-[#FAFAF8]/10 w-full">
            {[
              { val: "+500", label: "Eventos" },
              { val: "5+ anos", label: "Experiência" },
              { val: "Recife", label: "e Grande Recife" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-[#FAFAF8]">
                  {badge.val}
                </span>
                <span className="text-[#A8A8A0] text-xs">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual panel */}
        <div className="hidden lg:block relative">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2A2A26] to-[#1C1C1A] border border-[#FAFAF8]/10">
            {/* Elegant food illustration using CSS */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Plate base */}
                <div className="absolute inset-0 rounded-full border-2 border-[#C9A96E]/30" />
                <div className="absolute inset-4 rounded-full border border-[#C9A96E]/20" />
                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl" role="img" aria-label="Prato gourmet">
                    🍽️
                  </span>
                </div>
                {/* Orbit dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-2 h-2 rounded-full bg-[#C9A96E]/50"
                    style={{
                      top: `calc(50% - 4px + ${Math.sin((deg * Math.PI) / 180) * 110}px)`,
                      left: `calc(50% - 4px + ${Math.cos((deg * Math.PI) / 180) * 110}px)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute top-6 left-6 bg-[#FAFAF8]/10 backdrop-blur-sm border border-[#FAFAF8]/15 rounded-xl px-4 py-3">
              <p className="text-[#C9A96E] text-xs font-medium">Próxima data</p>
              <p className="text-[#FAFAF8] text-sm font-semibold mt-0.5">Disponível para seu evento</p>
            </div>

            <div className="absolute bottom-6 right-6 bg-[#FAFAF8]/10 backdrop-blur-sm border border-[#FAFAF8]/15 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {["🧑", "👩", "👨"].map((emoji, i) => (
                    <span key={i} className="text-sm">
                      {emoji}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-[#FAFAF8] text-xs font-medium">+500 clientes</p>
                  <p className="text-[#A8A8A0] text-xs">confiam em nós</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#C9A96E]/10 blur-2xl" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#C9A96E]/5 blur-3xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#FAFAF8]/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#FAFAF8]/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
