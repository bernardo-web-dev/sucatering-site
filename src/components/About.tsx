import { siteData } from "@/data/siteData";

export function About() {
  const { about } = siteData;

  return (
    <section id="about" className="py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1">
            {/* Main block */}
            <div className="relative bg-[#1C1C1A] rounded-2xl overflow-hidden aspect-[4/5]">
              {/* Large decorative content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                <div className="w-32 h-32 rounded-full border-2 border-[#C9A96E]/30 flex items-center justify-center mb-6">
                  <span className="text-5xl" role="img" aria-label="Gastronomia">🍴</span>
                </div>
                <blockquote className="font-display text-2xl text-[#FAFAF8] italic text-center leading-relaxed">
                  "Cada prato conta uma história. Cada evento, uma memória."
                </blockquote>
                <cite className="text-[#C9A96E] text-xs tracking-widest uppercase mt-4 not-italic">
                  SuCatering • Desde 2019
                </cite>
              </div>

              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* Stats overlay card */}
            <div className="absolute -bottom-8 -right-6 lg:-right-10 bg-[#FAFAF8] border border-[#E8E4DC] rounded-2xl p-6 shadow-xl">
              <div className="flex gap-8">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <span className="font-display text-3xl font-semibold text-[#C9A96E]">
                      {stat.value}
                    </span>
                    <span className="text-[#6B6B68] text-xs mt-1 leading-tight max-w-[70px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#C9A96E]/15 -z-10" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 pt-0 lg:pt-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                {about.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#1C1C1A] leading-[1.1] mb-8">
              {about.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <em className="not-italic text-[#C9A96E]">{line}</em>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-[#4A4A48] text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Values list */}
            <div className="mt-10 space-y-3">
              {[
                "Gastronomia com propósito e sabor",
                "Atendimento personalizado do início ao fim",
                "Comprometimento com cada detalhe",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-4 h-4 rounded-full bg-[#C9A96E]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                  </div>
                  <span className="text-[#4A4A48] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
