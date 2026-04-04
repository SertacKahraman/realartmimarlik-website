"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const isContactFormConfigured = Boolean(
  EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID
);

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Adres",
    lines: ["Akyazı, Atatürk Blv.", "357/A, Altınordu / Ordu"],
    href: "https://maps.google.com/?q=Akyazı, Atatürk Blv. 357/A, Altınordu, Ordu",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Telefon",
    lines: ["+90 (530) 770 07 95"],
    href: "tel:+905307700795",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "E-posta",
    lines: ["info@realartmimarlik.com"],
    href: "mailto:info@realartmimarlik.com",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Çalışma Saatleri",
    lines: ["Pazartesi - Cuma: 09:00 - 18:00"],
    href: "#",
  },
];

const faqItems = [
  {
    question: "Mesajıma ne kadar sürede dönüş yapılır?",
    answer:
      "İletişim formundan veya e-posta yoluyla gönderilen taleplere en geç 24 saat içinde dönüş yapıyoruz. Acil durumlarda telefon hattımızdan bize doğrudan ulaşabilirsiniz.",
  },
  {
    question: "Ücretsiz ön görüşme yapıyor musunuz?",
    answer:
      "Evet, projenizi daha iyi anlayabilmemiz için ilk görüşmemiz tamamen ücretsizdir. Ofisimize gelerek ya da online görüşme ile ihtiyaçlarınızı dinliyor, size uygun çözüm önerilerimizi sunuyoruz.",
  },
  {
    question: "Ofise randevusuz gelebilir miyim?",
    answer:
      "Ofisimizi çalışma saatleri içinde ziyaret edebilirsiniz. Ancak detaylı bir görüşme yapabilmemiz için önceden randevu almanızı öneriyoruz. Telefon veya iletişim formu üzerinden kolayca randevu oluşturabilirsiniz.",
  },
  {
    question: "Online görüşme imkânınız var mı?",
    answer:
      "Evet, Zoom veya Google Meet üzerinden online görüşme yapabiliyoruz. Özellikle şehir dışından bize ulaşmak isteyen müşterilerimiz için bu yöntemi sıklıkla kullanıyoruz. Randevu oluştururken online görüşme tercihini belirtmeniz yeterlidir.",
  },
  {
    question: "Hangi kanallardan size ulaşabilirim?",
    answer:
      "Bize telefon, e-posta, iletişim formu ve sosyal medya hesaplarımız üzerinden ulaşabilirsiniz. Ayrıca Altınordu'daki ofisimizi ziyaret ederek yüz yüze görüşme de yapabilirsiniz.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-white/20">
      <button
        onClick={onToggle}
        className="w-full cursor-pointer rounded-2xl p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset md:p-8"
        aria-expanded={isOpen}
      >
        <span className="flex items-center justify-between gap-4">
          <span className="text-lg font-semibold text-white md:text-xl">
            {item.question}
          </span>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-white/60 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-base leading-relaxed text-white/75 md:px-8 md:pb-8 md:text-lg">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.current || !isContactFormConfigured) {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("loading");

    const formDataObj = new FormData(form.current);
    const subjectValue = formDataObj.get("subject") as string;
    const subjectText = subjectValue && subjectValue !== "" ? subjectValue : "Genel Soru";

    const templateParams: Record<string, unknown> = {
      name: formDataObj.get("name"),
      email: formDataObj.get("email"),
      phone: formDataObj.get("phone") || "Belirtilmedi",
      subject: subjectText,
      message: formDataObj.get("message"),
    };

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.default.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      form.current.reset();
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Mesaj gönderme hatası:", error);
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-32 md:pb-20 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <span
            className="animate-fade-up mb-4 block text-sm font-medium uppercase tracking-widest text-white/70 md:text-base"
            style={{ "--enter-delay": "0ms" } as CSSProperties}
          >
            İletişim
          </span>
          <h1
            className="animate-fade-up mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
            style={{ "--enter-delay": "90ms" } as CSSProperties}
          >
            Bizimle İletişime <br /> <span className="text-white/60">Geçin</span>
          </h1>
          <p
            className="animate-fade-up max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
            style={{ "--enter-delay": "180ms" } as CSSProperties}
          >
            Projeleriniz, yatırım fırsatları veya herhangi bir konuda sorularınız için
            bize ulaşın. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mb-24">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="animate-fade-up group rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-colors duration-300 hover:bg-white hover:text-black md:p-8"
                style={
                  { "--enter-delay": `${index * 80}ms` } as CSSProperties
                }
              >
                <div className="mb-4 w-fit rounded-xl bg-white/5 p-3 transition-colors group-hover:bg-zinc-100">
                  <div className="text-white transition-colors group-hover:text-black">
                    {info.icon}
                  </div>
                </div>
                <h2 className="mb-2 text-lg font-bold">{info.title}</h2>
                {info.lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm text-white/70 transition-colors group-hover:text-black/70"
                  >
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              className="animate-fade-up"
              style={{ "--enter-delay": "100ms" } as CSSProperties}
            >
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">Mesaj Gönderin</h2>
              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Adınız Soyadınız"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+90 (___) ___ __ __"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="ornek@email.com"
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    aria-label="Konu seçiniz"
                    required
                    defaultValue=""
                    className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white transition-colors focus:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <option value="" disabled>
                      Konu Seçiniz
                    </option>
                    <option value="Mimari Tasarım">Mimari Tasarım</option>
                    <option value="İç Mimari">İç Mimari</option>
                    <option value="Kentsel Dönüşüm">Kentsel Dönüşüm</option>
                    <option value="İnşaat Uygulama">İnşaat Uygulama</option>
                    <option value="Danışmanlık">Danışmanlık</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Projeniz hakkında bize bilgi verin..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === "loading" || !isContactFormConfigured}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    {status === "loading"
                      ? "Gonderiliyor..."
                      : isContactFormConfigured
                        ? "Mesaj Gonder"
                        : "Form Yakinda Aktif"}
                  </button>


                  {status === "success" && (
                    <div className="animate-fade-up flex items-center gap-2 rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-green-400">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <p>
                        Mesajınız başarıyla iletildi. En kısa sürede size dönüş
                        yapacağız.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="animate-fade-up flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-red-400">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p>
                        Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya
                        telefonla bize ulaşın.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div
              className="animate-fade-up flex flex-col"
              style={{ "--enter-delay": "180ms" } as CSSProperties}
            >
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">Bizi Ziyaret Edin</h2>
              <div className="min-h-[400px] flex-1 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://maps.google.com/maps?q=Akyaz%C4%B1,+Atat%C3%BCrk+Blv.+357%2FA,+Alt%C4%B1nordu,+Ordu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "400px",
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Real Art Mimarlık ofis konumu - Akyazı, Altınordu"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950/50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <span className="animate-fade-up mb-4 block text-sm font-medium uppercase tracking-widest text-white/70 md:text-base">
              Merak Edilenler
            </span>
            <h2
              className="animate-fade-up text-3xl font-bold md:text-5xl"
              style={{ "--enter-delay": "90ms" } as CSSProperties}
            >
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="animate-fade-up"
                style={
                  { "--enter-delay": `${index * 70}ms` } as CSSProperties
                }
              >
                <FaqItem
                  item={item}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
