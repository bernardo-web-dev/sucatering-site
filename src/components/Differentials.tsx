import { siteData } from "@/data/siteData";

interface DifferentialItemProps {
  icon: string;
  title: string;
  description: string;
}

function DifferentialItem({ icon, title, description }: DifferentialItemProps) {
  return (
    <div className="flex gap-5 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-xl group-hover:bg-[#C9A96E]/20 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-[#1C1C1A] text-base mb-1.5">{title}</h3>
        <p className="text-[#6B6B68] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Differentials() {
  const { differentials } = siteData;
  const half = Math.ceil(differentials.length / 2);
  const firstCol = differentials.slice(0, half);
  const secondCol = differentials.slice(half);

  return (
    <section id="differentials" className="py-28 bg-[#1C1C1A] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at 70% 50%, #C9A96E33 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Header + CTA */}
          <div className="sticky top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                Por que nos escolher
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#FAFAF8] leading-[1.1] mb-6">
              Qualidade que{" "}
              <em className="not-italic text-[#C9A96E]">você sente</em> em
              cada detalhe.
            </h2>

            <p className="text-[#A8A8A0] text-base leading-relaxed mb-10">
              Mais do que comida, entregamos uma experiência completa. Nossa
              diferença está no cuidado com cada aspecto do seu evento.
            </p>

            {/* Feature highlight */}
            <div className="bg-[#FAFAF8]/5 border border-[#FAFAF8]/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A96E] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1C1A" strokeWidth="2.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#FAFAF8] font-semibold text-sm mb-1">
                    Satisfação garantida
                  </p>
                  <p className="text-[#A8A8A0] text-xs leading-relaxed">
                    Se algo não estiver de acordo com o combinado, resolvemos imediatamente. Seu evento é nossa responsabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Differentials grid */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {differentials.map((item) => (
              <DifferentialItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
