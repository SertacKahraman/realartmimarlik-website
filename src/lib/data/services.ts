import type { Service } from "../types";

export const services: Record<string, Service> = {
  "mimari-tasarim": {
    slug: "mimari-tasarim",
    title: "Mimari Tasarım",
    tagline: "Ordu'da Konut, Villa ve Ticari Yapılar İçin Özgün Mimari Çözümler",
    description:
      "Real Art Mimarlık, Ordu ve çevresinde konut, villa, ticari yapı ve özel yaşam alanları için mimari tasarım hizmeti sunar. Her projede işlevsellik, estetik, sürdürülebilirlik ve kullanıcı deneyimini birlikte ele alarak özgün yapılar geliştiririz.",
    heroImage: "/images/services/mimari-tasarim.webp",
    features: [
      {
        title: "Konsept Geliştirme",
        description:
          "Projenin mimari karakterini belirleyen ilk fikir, kütle dili ve genel tasarım yaklaşımını oluşturuyoruz.",
      },
      {
        title: "3D Görselleştirme",
        description:
          "Projenin tamamlanmış halini uygulama öncesinde net biçimde görmenizi sağlayan 3D sunumlar hazırlıyoruz.",
      },
      {
        title: "Ruhsat ve Uygulama Projeleri",
        description:
          "Belediye ve ilgili mevzuat süreçlerine uygun mimari çizimler ile uygulama setlerini eksiksiz hazırlıyoruz.",
      },
      {
        title: "Detay ve Malzeme Kurgusu",
        description:
          "Cephe, planlama, malzeme ve yapı detaylarını projenin kalitesini yükseltecek şekilde çözümlüyoruz.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Keşif ve Analiz",
        description:
          "Arsa, ihtiyaç programı, kullanım senaryosu ve imar verilerini değerlendirerek sürecin temelini oluşturuyoruz.",
      },
      {
        step: "02",
        title: "Konsept Tasarım",
        description:
          "Eskizler, yerleşim kararları ve kütle çalışmaları ile projenin mimari omurgasını kuruyoruz.",
      },
      {
        step: "03",
        title: "Projelendirme",
        description:
          "Kesin çizimler, teknik detaylar ve disiplin koordinasyonuyla projenizi uygulanabilir hale getiriyoruz.",
      },
      {
        step: "04",
        title: "Sunum ve Onay",
        description:
          "3D görseller ve proje paftaları ile nihai tasarımı sunuyor, onay sonrası uygulama aşamasına geçiyoruz.",
      },
    ],
    stats: [
      { value: "Konsept", label: "Tasarım" },
      { value: "3D", label: "Sunum" },
      { value: "Ruhsat", label: "Proje" },
      { value: "Detay", label: "Çözüm" },
    ],
    benefits: [
      {
        title: "Özgün Mimari Dil",
        description:
          "Kopya çözümler yerine arsanıza, yaşam biçiminize ve hedefinize uygun özgün tasarımlar geliştiriyoruz.",
      },
      {
        title: "Yatırım Değeri",
        description:
          "Doğru planlama ve güçlü cephe kararlarıyla projenizin estetik ve ticari değerini artırıyoruz.",
      },
      {
        title: "Uygulanabilir Tasarım",
        description:
          "Sadece etkileyici görünen değil, sahada doğru uygulanabilen ve maliyeti yönetilebilir projeler üretiyoruz.",
      },
    ],
  },
  "ic-mimari": {
    slug: "ic-mimari",
    title: "İç Mimari",
    tagline: "Konut, Villa, Ofis ve Ticari Mekanlar İçin İç Mimari Çözümler",
    description:
      "İç mimari hizmetimizle ev, villa, ofis, mağaza ve ticari alanlarda işlevsel, estetik ve kullanıcı odaklı mekanlar tasarlıyoruz. Planlama, malzeme, aydınlatma ve mobilya kararlarını tek bir bütün olarak ele alıyoruz.",
    heroImage: "/images/services/ic-mimari.webp",
    features: [
      {
        title: "Mekan Planlama",
        description:
          "Alanı daha verimli, konforlu ve akıcı kullanmanızı sağlayan yerleşim senaryoları oluşturuyoruz.",
      },
      {
        title: "Mobilya ve Sabit Donatı Tasarımı",
        description:
          "Mekana özel dolap, mutfak, banyo ve sabit mobilya çözümleriyle bütüncül bir tasarım dili kuruyoruz.",
      },
      {
        title: "Aydınlatma Tasarımı",
        description:
          "Mekanın atmosferini destekleyen katmanlı aydınlatma çözümleri ve ürün seçimleri hazırlıyoruz.",
      },
      {
        title: "Malzeme ve Renk Danışmanlığı",
        description:
          "Zemin, duvar, tavan ve dekoratif yüzeylerde uyumlu malzeme, doku ve renk seçimleri yapıyoruz.",
      },
    ],
    process: [
      {
        step: "01",
        title: "İhtiyaç Analizi",
        description:
          "Kullanıcı alışkanlıklarını, yaşam biçimini ve mekan hedeflerini analiz ederek brief oluşturuyoruz.",
      },
      {
        step: "02",
        title: "Konsept ve Moodboard",
        description:
          "Tarz, renk, malzeme ve atmosfer kararlarını netleştiren konsept sunumları hazırlıyoruz.",
      },
      {
        step: "03",
        title: "Detay Tasarım",
        description:
          "3D görseller, yerleşim planları ve üretim detayları ile iç mekan kurgusunu tamamlıyoruz.",
      },
      {
        step: "04",
        title: "Uygulama Takibi",
        description:
          "Sahadaki uygulamaları, ölçü kontrollerini ve malzeme süreçlerini takip ederek tasarımı hayata geçiriyoruz.",
      },
    ],
    stats: [
      { value: "Konut", label: "Projeleri" },
      { value: "Villa", label: "İç Mekan" },
      { value: "Ofis", label: "Çözümü" },
      { value: "Mağaza", label: "Tasarımı" },
    ],
    benefits: [
      {
        title: "Fonksiyonel Konfor",
        description:
          "Günlük yaşamı kolaylaştıran, düzenli ve ergonomik iç mekan çözümleri sunuyoruz.",
      },
      {
        title: "Bütünsel Estetik",
        description:
          "Mekan, mobilya, aydınlatma ve malzemeyi tek bir tasarım dili içinde bir araya getiriyoruz.",
      },
      {
        title: "Doğru Bütçe Yönetimi",
        description:
          "Malzeme ve uygulama kalemlerini planlayarak iç mimari sürecini daha kontrollü yürütüyoruz.",
      },
    ],
  },
  "insaat-uygulama": {
    slug: "insaat-uygulama",
    title: "İnşaat Uygulama",
    tagline: "Projeyi Sahada Kalite, Disiplin ve Kontrolle Hayata Geçiriyoruz",
    description:
      "İnşaat uygulama hizmetimiz kapsamında projeleri kaba inşaattan ince işlere kadar kontrollü biçimde yürütüyor, şantiye yönetimi, iş programı ve kalite takibini tek merkezden sağlıyoruz. Ordu'da anahtar teslim ve uygulama odaklı inşaat çözümleri sunuyoruz.",
    heroImage: "/images/services/insaat-uygulama.webp",
    features: [
      {
        title: "Anahtar Teslim Uygulama",
        description:
          "Temelden son dokunuşlara kadar tüm imalat süreçlerini planlı ve koordineli şekilde yönetiyoruz.",
      },
      {
        title: "Şantiye Yönetimi",
        description:
          "İş akışını, ekipleri, tedarik süreçlerini ve uygulama takvimini sahada disiplinli biçimde kontrol ediyoruz.",
      },
      {
        title: "Kalite Kontrol",
        description:
          "Her aşamada teknik şartnameye, proje kararlarına ve işçilik kalitesine uygunluk denetimi yapıyoruz.",
      },
      {
        title: "İş Güvenliği ve Düzen",
        description:
          "Şantiye organizasyonunu güvenli, düzenli ve verimli ilerleyecek şekilde planlıyoruz.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Planlama",
        description:
          "İş programı, bütçe çerçevesi, ekip planlaması ve malzeme takvimini oluşturuyoruz.",
      },
      {
        step: "02",
        title: "Kaba İnşaat",
        description:
          "Temel, betonarme, duvar ve yapısal imalatları projeye uygun şekilde hayata geçiriyoruz.",
      },
      {
        step: "03",
        title: "İnce İşler",
        description:
          "Tesisat, kaplama, boya, doğrama ve montaj işlerini kontrollü biçimde tamamlıyoruz.",
      },
      {
        step: "04",
        title: "Teslim ve Kontrol",
        description:
          "Son kontrolleri yapıyor, eksikleri kapatıyor ve yapıyı kullanıma hazır şekilde teslim ediyoruz.",
      },
    ],
    stats: [
      { value: "Kaba", label: "İnşaat" },
      { value: "İnce", label: "İşler" },
      { value: "Şantiye", label: "Takibi" },
      { value: "Teslim", label: "Kontrolü" },
    ],
    benefits: [
      {
        title: "Teknik Uyum",
        description:
          "Projede tanımlanan teknik kararların sahada doğru uygulanmasını sağlıyoruz.",
      },
      {
        title: "Zaman Yönetimi",
        description:
          "Doğru planlama ile uygulama sürecini daha kontrollü, öngörülebilir ve verimli hale getiriyoruz.",
      },
      {
        title: "Kaliteli İşçilik",
        description:
          "Malzeme seçimi ve uygulama kalitesini birlikte takip ederek daha uzun ömürlü yapılar üretiyoruz.",
      },
    ],
  },
  "kentsel-donusum": {
    slug: "kentsel-donusum",
    title: "Kentsel Dönüşüm",
    tagline: "Riskli Yapıları Güvenli ve Değerli Yaşam Alanlarına Dönüştürüyoruz",
    description:
      "Kentsel dönüşüm hizmetimizle riskli ve eski yapıları deprem yönetmeliğine uygun, modern ve yatırım değeri yüksek yapılara dönüştürüyoruz. Süreci analiz, proje geliştirme, ruhsat, yapım ve teslim aşamalarıyla bütün olarak yönetiyoruz.",
    heroImage: "/images/services/kentsel-donusum.webp",
    features: [
      {
        title: "Risk ve Durum Analizi",
        description:
          "Mevcut yapının teknik durumunu değerlendiriyor, dönüşüm ihtiyacını verilerle ortaya koyuyoruz.",
      },
      {
        title: "Hak Sahibi Süreç Yönetimi",
        description:
          "Görüşme, uzlaşma ve bilgilendirme süreçlerini daha düzenli ve şeffaf bir çerçevede yürütüyoruz.",
      },
      {
        title: "Ruhsat ve Proje Geliştirme",
        description:
          "Yeni yapının mimari kararlarını, ruhsat dosyalarını ve resmi sürecini eksiksiz hazırlıyoruz.",
      },
      {
        title: "Yapım ve Teslim",
        description:
          "Yıkım sonrası yeni yapının kontrollü inşaat sürecini yönetip teslim aşamasına kadar takip ediyoruz.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Fizibilite",
        description:
          "Parsel, yapı, imar ve maliyet analizleriyle dönüşüm senaryosunu belirliyoruz.",
      },
      {
        step: "02",
        title: "Uzlaşma ve Proje",
        description:
          "Hak sahipleriyle süreci netleştiriyor, yeni yapının proje kurgusunu oluşturuyoruz.",
      },
      {
        step: "03",
        title: "Ruhsat ve Yapım",
        description:
          "Gerekli izinleri tamamlayıp yıkım ve inşaat sürecini kontrollü şekilde başlatıyoruz.",
      },
      {
        step: "04",
        title: "İskan ve Teslim",
        description:
          "Yasal kapanışları tamamlayarak yapıyı güvenli ve kullanıma hazır şekilde teslim ediyoruz.",
      },
    ],
    stats: [
      { value: "Risk", label: "Analizi" },
      { value: "Ruhsat", label: "Süreci" },
      { value: "Yıkım", label: "Planı" },
      { value: "Teslim", label: "Yönetimi" },
    ],
    benefits: [
      {
        title: "Deprem Güvenliği",
        description:
          "Eski ve riskli yapıların yerine yönetmeliğe uygun güvenli yaşam alanları geliştiriyoruz.",
      },
      {
        title: "Modern Yaşam Standardı",
        description:
          "Yeni projelerde konfor, enerji verimliliği ve güncel yaşam ihtiyaçlarını birlikte ele alıyoruz.",
      },
      {
        title: "Değer Artışı",
        description:
          "Kentsel dönüşüm sürecini estetik ve işlevsel çözümlerle destekleyerek gayrimenkul değerini yükseltiyoruz.",
      },
    ],
  },
  danismanlik: {
    slug: "danismanlik",
    title: "Danışmanlık",
    tagline: "Arsa, Yatırım, Proje ve Süreç Yönetiminde Stratejik Destek",
    description:
      "Danışmanlık hizmetimiz; arsa analizi, gayrimenkul geliştirme, yatırım fizibilitesi, proje yönetimi ve uygulama kontrolü gibi başlıklarda profesyonel destek sunar. Doğru kararı daha erken vermeniz için teknik ve ticari verileri birlikte değerlendiriyoruz.",
    heroImage: "/images/services/danismanlik.webp",
    features: [
      {
        title: "Arsa ve Yatırım Analizi",
        description:
          "Arsanın potansiyelini, emsal değerlerini, kullanım senaryolarını ve yatırım geri dönüşünü değerlendiriyoruz.",
      },
      {
        title: "Proje Geliştirme Desteği",
        description:
          "Konsept kurgusu, hedef kullanıcı analizi ve iş modeli doğrultusunda proje çerçevesi oluşturuyoruz.",
      },
      {
        title: "Uygulama Kontrolü",
        description:
          "Devam eden projelerin teknik şartname, bütçe ve iş programına uygunluğunu takip ediyoruz.",
      },
      {
        title: "Mevzuat ve Süreç Rehberliği",
        description:
          "İmar, ruhsat ve yapı süreçlerinde karşılaşacağınız teknik kararlar için yol gösteriyoruz.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Dinleme ve Hedef Tanımı",
        description:
          "Beklenti, bütçe, zaman ve yatırım hedeflerini netleştirerek başlangıç çerçevesini kuruyoruz.",
      },
      {
        step: "02",
        title: "Araştırma ve Veri Toplama",
        description:
          "Pazar, konum, emsal ve maliyet verilerini toplayarak karar zeminini oluşturuyoruz.",
      },
      {
        step: "03",
        title: "Strateji Geliştirme",
        description:
          "Alternatif senaryoları değerlendiriyor ve size en uygun çözüm yolunu belirliyoruz.",
      },
      {
        step: "04",
        title: "Süreç Takibi",
        description:
          "Karar sonrası planın uygulanmasını takip ederek projenin daha sağlıklı ilerlemesini destekliyoruz.",
      },
    ],
    stats: [
      { value: "Arsa", label: "Analizi" },
      { value: "Bütçe", label: "Planı" },
      { value: "Proje", label: "Stratejisi" },
      { value: "Süreç", label: "Yönetimi" },
    ],
    benefits: [
      {
        title: "Daha Doğru Karar",
        description:
          "Teknik ve ticari verileri birlikte değerlendirerek yatırım ve proje kararlarını güçlendiriyoruz.",
      },
      {
        title: "Risk Azaltma",
        description:
          "Sürecin başında yapılan doğru analizlerle maliyet ve zaman risklerini azaltıyoruz.",
      },
      {
        title: "Verimli Yol Haritası",
        description:
          "Kaynaklarınızı gereksiz denemelere harcamadan ilerlemeniz için net bir plan sunuyoruz.",
      },
    ],
  },
  "peyzaj-tasarimi": {
    slug: "peyzaj-tasarimi",
    title: "Peyzaj Tasarımı",
    tagline: "Yapıya Değer Katan Dış Mekan ve Bahçe Tasarımı Çözümleri",
    description:
      "Peyzaj tasarımı hizmetimizle villa bahçeleri, site çevreleri, ticari dış mekanlar ve özel açık alanlar için estetik ve işlevsel peyzaj çözümleri geliştiriyoruz. Bitkisel tasarım, sert zemin, sulama ve dış mekan kullanım senaryolarını birlikte planlıyoruz.",
    heroImage: "/images/services/peyzaj-tasarimi.webp",
    features: [
      {
        title: "Bitkisel Tasarım",
        description:
          "İklim, bakım ihtiyacı ve görsel dengeye uygun bitki kompozisyonları oluşturuyoruz.",
      },
      {
        title: "Sert Zemin ve Dolaşım",
        description:
          "Yürüme yolları, teraslar, oturma alanları ve geçiş kurgularını kullanıma uygun biçimde tasarlıyoruz.",
      },
      {
        title: "Sulama ve Altyapı",
        description:
          "Peyzajın sürdürülebilirliği için sulama, drenaj ve temel altyapı çözümlerini planlıyoruz.",
      },
      {
        title: "Dış Mekan Atmosferi",
        description:
          "Aydınlatma, oturma alanı ve odak noktalarıyla açık alanın karakterini güçlendiriyoruz.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Saha Analizi",
        description:
          "Topografya, güneş, rüzgar ve mevcut doğal çevre verilerini inceleyerek tasarımı şekillendiriyoruz.",
      },
      {
        step: "02",
        title: "Konsept Geliştirme",
        description:
          "Bahçe ve dış mekanın kullanım senaryosuna uygun leke planları ve konsept kararlar oluşturuyoruz.",
      },
      {
        step: "03",
        title: "Uygulama Projesi",
        description:
          "Bitkisel ve yapısal peyzaj detaylarını uygulamaya hazır proje setine dönüştürüyoruz.",
      },
      {
        step: "04",
        title: "Uygulama ve Yerleşim",
        description:
          "Belirlenen malzeme ve bitkilerle dış mekanı tasarıma uygun biçimde hayata geçiriyoruz.",
      },
    ],
    stats: [
      { value: "Bahçe", label: "Planı" },
      { value: "Bitkisel", label: "Tasarım" },
      { value: "Sert Zemin", label: "Çözümü" },
      { value: "Dış Mekan", label: "Kurgusu" },
    ],
    benefits: [
      {
        title: "Yaşam Kalitesi",
        description:
          "Dinlenme, sosyalleşme ve günlük kullanım için daha konforlu açık alanlar oluşturuyoruz.",
      },
      {
        title: "Estetik Bütünlük",
        description:
          "Peyzajı yapının mimari diliyle uyumlu hale getirerek güçlü bir dış görünüm sağlıyoruz.",
      },
      {
        title: "Uzun Vadeli Kullanım",
        description:
          "Doğru bitki ve malzeme seçimleriyle daha dayanıklı ve bakımı yönetilebilir dış mekanlar planlıyoruz.",
      },
    ],
  },
};

export const servicesList = Object.values(services);
