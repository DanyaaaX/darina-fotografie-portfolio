import React, { useState } from 'react';
import { motion } from 'motion/react';

type Lang = 'ua' | 'de';

const content = {
  hero: {
    title: "Darina Fotografie",
    slogan: {
      ua: "Світ крізь об’єктив. Твоє майбутнє у твоїх мріях.",
      de: "Die Welt durch das Objektiv. Deine Zukunft liegt in deinen Träumen."
    },
    details: {
      ua: "Німеччина, 2026.",
      de: "Deutschland, 2026."
    }
  },
  portfolio: {
    title: {
      ua: "Портфоліо",
      de: "Portfolio"
    },
    categories: {
      ua: ["Love Story / Парні фотосесії", "Портрети", "Вуличні зйомки", "Студія"],
      de: ["Love Story / Paar-Fotoshootings", "Porträts", "Street", "Studio"]
    },
    message: {
      ua: "Автентичність та справжні емоції.",
      de: "Authentizität & natürliche Emotionen."
    }
  },
  services: {
    title: {
      ua: "Послуги",
      de: "Leistungen"
    },
    prices: [
      { time: "1h", price: "50€" },
      { time: "2h", price: "80€" }
    ],
    loyalty: {
      ua: "Картка постійного клієнта: -10% на третю зйомку.",
      de: "Stammkundenkarte: -10% auf dein 3. Shooting."
    },
    note: {
      ua: "Професійна ретуш включена. Оренда студії оплачується окремо (~70€/2h).",
      de: "Professionelle Retusche inklusive. Studiomiete ist extra (~70€/2h)."
    }
  },
  about: {
    title: {
      ua: "Про мене",
      de: "Über mich"
    },
    text: {
      ua: "Незалежний фотограф у Німеччині. Спеціалізуюся на індивідуальних, парних та сімейних зйомках. Мій підхід: допомагаю з позуванням, знаходжу найкраще світло і навіть можу створити індивідуальний декор на природі, щоб зробити вашу зйомку унікальною.",
      de: "Selbstständige Fotografin in Deutschland. Ich bin spezialisiert auf Einzel-, Paar- und Familienshootings. Mein Ansatz: Ich helfe beim Posen, finde das beste Licht und kann sogar ein individuelles Dekor in der Natur aufbauen, um dein Shooting einzigartig zu machen."
    }
  },
  contact: {
    title: {
      ua: "Контакти",
      de: "Kontakt"
    },
    cta: {
      ua: "Створімо спогади разом.",
      de: "Lass uns Erinnerungen schaffen."
    },
    instagram: "Instagram Direct"
  }
};

const Section = ({ bgImage, children }: { bgImage: string, children: React.ReactNode }) => (
  <section
    className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
      {children}
    </div>
  </section>
);

export default function App() {
  const [lang, setLang] = useState<Lang>('de');

  return (
    <div className="font-sans text-white bg-black selection:bg-white/30">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:px-12 flex justify-between items-center">
        <div className="text-[10px] tracking-[0.2em] uppercase font-medium">Darina Fotografie</div>
        <div className="flex gap-4 text-[10px] tracking-[0.2em] uppercase font-medium">
          <button 
            onClick={() => setLang('ua')} 
            className={`transition-opacity duration-300 ${lang === 'ua' ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
          >
            UA
          </button>
          <span className="opacity-40">/</span>
          <button 
            onClick={() => setLang('de')} 
            className={`transition-opacity duration-300 ${lang === 'de' ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
          >
            DE
          </button>
        </div>
      </header>

      <main>
        {/* Section 1: Hero */}
        <Section bgImage="https://picsum.photos/seed/fashion/1920/1080?grayscale">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8"
          >
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-light mb-12 leading-relaxed"
          >
            {content.hero.slogan[lang]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-[9px] tracking-[0.3em] uppercase opacity-60"
          >
            {content.hero.details[lang]}
          </motion.p>
        </Section>

        {/* Section 2: Portfolio */}
        <Section bgImage="https://picsum.photos/seed/portrait/1920/1080?grayscale">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-light mb-16 italic"
          >
            {content.portfolio.title[lang]}
          </motion.h2>
          <ul className="space-y-8 mb-16">
            {content.portfolio.categories[lang].map((cat, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-light"
              >
                {cat}
              </motion.li>
            ))}
          </ul>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-60 border-t border-white/20 pt-8 inline-block px-8"
          >
            {content.portfolio.message[lang]}
          </motion.p>
        </Section>

        {/* Section 3: Services */}
        <Section bgImage="https://picsum.photos/seed/studio/1920/1080?grayscale">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-light mb-16 italic"
          >
            {content.services.title[lang]}
          </motion.h2>
          <div className="flex flex-col items-center gap-6 mb-16">
            {content.services.prices.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex justify-between w-56 text-[11px] md:text-xs tracking-[0.2em] uppercase font-light border-b border-white/20 pb-3"
              >
                <span>{p.time}</span>
                <span>{p.price}</span>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-lg mx-auto"
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.15em] uppercase leading-relaxed">
              {content.services.loyalty[lang]}
            </p>
            <p className="text-[9px] md:text-[10px] tracking-[0.1em] uppercase opacity-50 leading-relaxed">
              {content.services.note[lang]}
            </p>
          </motion.div>
        </Section>

        {/* Section 4: About */}
        <Section bgImage="https://picsum.photos/seed/photographer/1920/1080?grayscale">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-light mb-12 italic"
          >
            {content.about.title[lang]}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-xs tracking-[0.15em] uppercase leading-loose max-w-2xl mx-auto font-light text-justify md:text-center"
          >
            {content.about.text[lang]}
          </motion.p>
        </Section>

        {/* Section 6: Contact & Footer */}
        <Section bgImage="https://picsum.photos/seed/minimal/1920/1080?grayscale">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl font-light mb-10"
          >
            {content.contact.title[lang]}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-light mb-16"
          >
            {content.contact.cta[lang]}
          </motion.p>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            href="https://instagram.com/darik.photog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-white/30 px-10 py-5 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors duration-500"
          >
            {content.contact.instagram}
          </motion.a>
          
          <div className="absolute bottom-10 left-0 w-full text-center">
            <p className="text-[8px] tracking-[0.3em] uppercase opacity-40">
              © 2026 Darina Fotografie
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
