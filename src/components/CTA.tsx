import { siteData } from "@/data/siteData";

const whatsappUrl = `https://wa.me/${siteData.company.whatsapp}?text=${encodeURIComponent(
  siteData.company.whatsappMessage
)}`;

export function CTA() {
  const { cta, company } = siteData;

  return (
    <section id="cta" className="py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#C9A96E 1px, transparent 1px),
            linear-gradient(90deg, #C9A96E 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
            {cta.eyebrow}
          </span>
          <div className="h-px w-8 bg-[#C9A96E]" />
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1C1C1A] leading-[1.05] mb-6">
          {cta.headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <em className="not-italic text-[#C9A96E]">{line}</em>
              ) : (
                line
              )}
            </span>
          ))}
        </h2>

        {/* Subheadline */}
        <p className="text-[#6B6B68] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {cta.subheadline}
        </p>

        {/* CTA Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#C9A96E] text-[#1C1C1A] font-semibold text-base px-10 py-5 rounded-full hover:bg-[#D4B87A] active:scale-95 transition-all duration-200 shadow-xl shadow-[#C9A96E]/30"
        >
          <WhatsAppIcon />
          {cta.cta}
        </a>

        {/* Trust note */}
        <p className="text-[#A8A8A0] text-xs mt-5">
          Respondemos em até 2 horas • Orçamento gratuito e sem compromisso
        </p>

        {/* Divider with icon */}
        <div className="flex items-center gap-6 my-16">
          <div className="flex-1 h-px bg-[#E8E4DC]" />
          <span className="text-[#C9A96E] text-xl">✦</span>
          <div className="flex-1 h-px bg-[#E8E4DC]" />
        </div>

        {/* Trust testimonial */}
        <div className="bg-[#1C1C1A] rounded-2xl px-8 py-10 text-left sm:text-center">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#C9A96E">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="font-display text-xl sm:text-2xl text-[#FAFAF8] italic leading-relaxed mb-4">
            "O casamento da minha filha foi perfeito. A comida estava incrível e o atendimento superou todas as expectativas."
          </blockquote>
          <cite className="text-[#A8A8A0] text-sm not-italic">
            — Maria das Graças, cliente desde 2022
          </cite>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
