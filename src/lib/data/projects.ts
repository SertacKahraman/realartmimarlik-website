import type { Project } from "../types";

export const projects: Record<string, Project> = {
  "akyazi-villa": {
    id: 1,
    slug: "akyazi-villa",
    title: "Akyazı Villa Projesi",
    description:
      "Ordu Akyazı bölgesinde tasarlanan, modern çizgilere sahip özel villa projesi.",
    longDescription:
      "Akyazı Villa Projesi, Ordu'da konfor, estetik ve işlevselliği bir araya getiren özel bir konut çalışmasıdır. Cephe dili, kütle dengesi ve yaşam alanı organizasyonu kullanıcı ihtiyaçlarına göre şekillendirilmiş; hem dış görünüşte hem iç kullanım kurgusunda çağdaş bir yaklaşım benimsenmiştir.",
    category: "Konut",
    location: "Ordu, Akyazı",
    year: 2024,
    area: "Özel Konut",
    status: "Tamamlandı",
    image: "/images/projects/akyazi-viila-1.jpeg",
    gallery: [
      "/images/projects/akyazi-viila-1.jpeg",
      "/images/projects/akyazi-villa-2.jpeg",
      "/images/projects/akyazi-villa-3.jpeg",
      "/images/projects/akyazi-villa-4.jpeg",
      "/images/projects/akyazi-insaat-1.jpeg",
      "/images/projects/akyazi-insaat-2.jpeg",
    ],
    services: ["Mimari Tasarım", "Projelendirme", "Uygulama Takibi"],
    materials: [
      "Modern cephe kaplamaları",
      "Alüminyum doğrama",
      "Cam yüzey detayları",
      "Doğal doku uygulamaları",
    ],
    features: [
      "Modern villa cephe kurgusu",
      "Ferah yaşam alanı planlaması",
      "Güçlü kütle dengesi",
      "Çağdaş dış mekan dili",
    ],
  },
  "gokdelen-tasarim": {
    id: 2,
    slug: "gokdelen-tasarim",
    title: "Gökdelen Tasarım Çalışması",
    description:
      "Dikey mimari dilin öne çıktığı, güçlü cephe karakterine sahip konsept tasarım projesi.",
    longDescription:
      "Gökdelen Tasarım Çalışması, modern şehir dokusuna uyum sağlayan güçlü bir siluet ve cephe ritmi oluşturmayı hedefleyen tasarım yaklaşımını yansıtır. Görsel denge, yapı kimliği ve kent içi algı bu çalışmanın ana omurgasını oluşturur.",
    category: "Tasarım",
    location: "Ordu",
    year: 2022,
    area: "Konsept Proje",
    status: "Tamamlandı",
    image: "/images/projects/gokdelen-tasarim.jpeg",
    gallery: ["/images/projects/gokdelen-tasarim.jpeg"],
    services: ["Mimari Tasarım", "Cephe Tasarımı", "Konsept Geliştirme"],
    materials: [
      "Cephe konsept çalışmaları",
      "Cam ve metal yüzey kurgusu",
      "Kütle kompozisyonu",
      "Modern tasarım detayları",
    ],
    features: [
      "Dikey mimari yaklaşım",
      "Güçlü cephe etkisi",
      "Modern şehir silueti",
      "Konsept odaklı tasarım dili",
    ],
  },
  "ozyil-hirdavat": {
    id: 3,
    slug: "ozyil-hirdavat",
    title: "Özyıl Hırdavat",
    description:
      "Ticari kullanım için geliştirilen, marka görünürlüğünü öne çıkaran mağaza ve işyeri projesi.",
    longDescription:
      "Özyıl Hırdavat projesi, ticari mekan kimliğini güçlendiren cephe ve kullanım kararlarıyla öne çıkan bir çalışmadır. İşlevsellik, müşteri sirkülasyonu ve marka görünürlüğü birlikte ele alınarak ticari performansı destekleyen bir mekan dili oluşturulmuştur.",
    category: "Ticari",
    location: "Ordu",
    year: 2022,
    area: "Ticari Mekan",
    status: "Tamamlandı",
    image: "/images/projects/ozyil-hirdavat-1.jpeg",
    gallery: ["/images/projects/ozyil-hirdavat-1.jpeg"],
    services: ["Ticari Mekan Tasarımı", "Cephe Düzenleme", "Uygulama"],
    materials: [
      "Dış cephe kaplama",
      "Tabela ve marka uygulamaları",
      "Vitrin çözümleri",
      "Ticari mekan donatıları",
    ],
    features: [
      "Marka odaklı cephe dili",
      "Ticari görünürlük",
      "İşlevsel mekan kurgusu",
      "Güçlü dış cephe etkisi",
    ],
  },
  "sinanoglu-projesi": {
    id: 4,
    slug: "sinanoglu-projesi",
    title: "Sinanoğlu Projesi",
    description:
      "Gerçek saha görselleriyle desteklenen, uygulama ve tasarım kararlarının birlikte öne çıktığı yapı projesi.",
    longDescription:
      "Sinanoğlu Projesi, uygulama detayları ile mimari kararların dengeli biçimde bir araya geldiği bir çalışma olarak öne çıkar. Yapının kullanım senaryosu, cephe etkisi ve uygulama kalitesi birlikte ele alınmış; ortaya işlevsel ve güçlü bir proje dili çıkarılmıştır.",
    category: "Konut",
    location: "Ordu",
    year: 2023,
    area: "Yapı Projesi",
    status: "Tamamlandı",
    image: "/images/projects/sinanoglu-1.jpeg",
    gallery: [
      "/images/projects/sinanoglu-1.jpeg",
      "/images/projects/sinanoglu-2.jpeg",
    ],
    services: ["Mimari Tasarım", "Uygulama", "Proje Geliştirme"],
    materials: [
      "Cephe uygulama detayları",
      "Yapı kabuk çözümleri",
      "Modern malzeme kullanımı",
      "Fonksiyonel mekan bileşenleri",
    ],
    features: [
      "Gerçek saha uygulaması",
      "Dengeli cephe kurgusu",
      "Fonksiyonel proje yaklaşımı",
      "Uygulama ve tasarım bütünlüğü",
    ],
  },
};

export const projectsList = Object.values(projects);
