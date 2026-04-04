export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content
    date: string;
    author: string;
    image: string;
    category: string;
    tags: string[];
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "2026-modern-mimari-trendleri-ordu",
        title: "2026 Modern Mimari Trendleri: Ordu'da Geleceğin Evleri Nasıl Olacak?",
        excerpt: "2026 yılında mimari dünyasını sarsan 'Biyofilik 2.0', yapay zeka destekli yaşam alanları ve Karadeniz'in iklimine özel sürdürülebilir çözümleri inceliyoruz.",
        content: `
            <h2>Geleceğin Mimarisi: Doğayla Teknoloji Arasındaki Denge</h2>
            <p>2026 yılı, mimaride sadece estetiğin değil, "akıllı sürdürülebilirliğin" yılı oldu. Artık evlerimiz sadece barınma ihtiyacını karşılayan yapılar değil, kendi enerjisini üreten, atıklarını yöneten ve sakinlerinin sağlığını düşünen yaşayan organizmalar haline geldi. Ordu'nun eşsiz doğasıyla bütünleşen bu yeni nesil mimari anlayış, lüksü yeniden tanımlıyor.</p>
            
            <h3>1. Biyofilik Tasarım 2.0: Doğanın Kalbine Dönüş</h3>
            <p>Geçmiş yıllarda sadece "yeşil bir duvar" veya "saksı bitkisi" olarak algılanan biyofilik tasarım, 2026'da yapının DNA'sına işlenmiş durumda. Artık iç mekan ile dış mekan arasındaki sınırlar tamamen kalkıyor.</p>
            <ul>
                <li><strong>Yaşayan Cepheler:</strong> Ordu'nun nemli iklimini avantaja çeviren, havayı temizleyen yosun paneller ve dikey ormanlar.</li>
                <li><strong>Doğal Işık Heykeltıraşlığı:</strong> Güneşin gün içindeki hareketine göre form değiştiren akıllı gölgelendirme sistemleri.</li>
                <li><strong>İç Mekan Vadileri:</strong> Evin tam ortasından geçen cam tavanlı iç bahçeler ve su öğeleri.</li>
            </ul>

            <h3>2. Yapay Zeka Destekli (AI) Evler</h3>
            <p>Akıllı ev teknolojileri artık sadece ışığı açıp kapatmaktan ibaret değil. 2026 standartlarında evler, kullanıcı alışkanlıklarını öğreniyor ve adapte oluyor.</p>
            <p>Örneğin, <em>"Adaptif İklimlendirme"</em> sistemleri, Ordu'nun değişken hava koşullarına anlık tepki vererek enerji tasarrufunu %40'a kadar artırıyor. Eviniz, fırtına yaklaşırken pencereleri otomatik kapatıyor veya güneşli bir kış gününde ısıtma sistemini kısarak güneş enerjisinden faydalanıyor.</p>

            <h3>3. Sürdürülebilir Lüks: Karbon Nötr Villalar</h3>
            <p>Lüks anlayışı artık "altın varaklardan" değil, "karbon nötr" olmaktan geçiyor. Real Art Mimarlık olarak projelerimizde kullandığımız yenilikçi malzemeler:</p>
            <ul>
                <li><strong>Hempcrete (Kenevir Betonu):</strong> Yüksek yalıtım sağlayan, nefes alan ve %100 doğal duvarlar.</li>
                <li><strong>Geri Dönüştürülmüş Çelik:</strong> Endüstriyel şıklığı çevreci bir duruşla birleştiren yapı iskeletleri.</li>
                <li><strong>Akıllı Camlar:</strong> Perde gerektirmeyen, elektriksel uyarımla opaklaşabilen mahremiyet camları.</li>
            </ul>

            <blockquote>
                "Mimarlık, doğaya karşı değil, doğayla birlikte inşa etme sanatıdır. 2026 projelerimizde hedefimiz, Ordu'nun siluetini bozmadan ona değer katan yapılar üretmek." — <strong>Real Art Mimarlık</strong>
            </blockquote>

            <h2>Ordu'da Gayrimenkul Yatırımı: Hangi Bölgeler Yükselişte?</h2>
            <p>2026 yılı verilerine göre, Ordu'da yatırım değeri en çok artan bölgeler, doğayla iç içe ama şehre ulaşımı kolay lokasyonlar...</p>
        `,
        date: "2026-02-15",
        author: "Real Art Mimarlık",
        image: "/images/blog/modern-mimari-trendleri-2026.webp",
        category: "Mimari Vizyon",
        tags: ["Mimari Trendler 2026", "Akıllı Evler", "Sürdürülebilirlik", "Lüks Konut", "Biyofilik Tasarım"],
        readTime: "8 dk"
    },
    {
        slug: "kentsel-donusum-yasasi-2026-degisiklikleri",
        title: "2026 Kentsel Dönüşüm Düzenlemeleri: Ordu'da Ev Sahipleri İçin Kritik Rehber",
        excerpt: "Yeni 'Hızlandırılmış Dönüşüm Yasası' ile süreçler nasıl kısaldı? Devletin sunduğu %0.69 faizli krediler ve hibe destekleri hakkında bilmeniz gereken her şey.",
        content: `
            <h2>Dönüşümde Yeni Dönem: "Yerinde ve Hızlı"</h2>
            <p>2026 yılı itibarıyla yürürlüğe giren yeni Kentsel Dönüşüm Yönetmeliği, bürokrasiyi azaltarak güvenli konutlara erişimi hızlandırmayı hedefliyor. Özellikle Ordu gibi deprem riski taşıyan ve eski yapı stokunun yenilenmesi gereken şehirlerde, bu yeni düzenlemeler ev sahipleri için tarihi fırsatlar sunuyor.</p>

            <h3>2026 Yasası Neleri Değiştirdi?</h3>
            <ol>
                <li><strong>3/2 Çoğunluk Yerine %50+1 Kuralı:</strong> Artık dönüşüm kararı almak için apartman sakinlerinin salt çoğunluğu yeterli oluyor. Bu, yıllarca süren anlaşmazlıkların sonu demek.</li>
                <li><strong>Elektronik Tebligat Dönemi:</strong> Ulaşılamayan malikler yüzünden tıkanan süreçler, e-Devlet üzerinden yapılan tebligatlarla aşıldı. Süreç ortalama 8 ay kısaldı.</li>
                <li><strong>Rezerv Yapı Alanı Genişletilmesi:</strong> Şehir merkezindeki sıkışık parseller için yeni imar hakları ve birleştirme teşvikleri getirildi.</li>
            </ol>

            <h2>Finansal Destekler: Hibeler ve Krediler</h2>
            <p>Devlet, 2026 yılında "Yarısı Bizden" kampanyasını genişleterek Ordu'yu da pilot iller arasına aldı. İşte güncel rakamlar:</p>
            <div class="bg-zinc-800 p-6 rounded-xl my-6 border-l-4 border-purple-500">
                <h4 class="text-xl font-bold mb-2">2026 Destek Paketi</h4>
                <ul class="list-disc pl-4 space-y-2">
                    <li><strong>Hibe Desteği:</strong> Konut başına 1.5 Milyon TL'ye kadar karşılıksız hibe.</li>
                    <li><strong>Kredi İmkanı:</strong> 2.5 Milyon TL'ye kadar, 0.69 faiz oranıyla 180 ay vadeli kredi.</li>
                    <li><strong>Kira Yardımı:</strong> Ordu ili için aylık 15.000 TL kira desteği (18 ay boyunca).</li>
                </ul>
            </div>

            <h3>Süreci Nasıl Yönetmelisiniz?</h3>
            <p>Kentsel dönüşüm teknik ve hukuki bir süreçtir. Yanlış atılan bir imza, mülkiyet haklarınızda kayıplara yol açabilir.</p>
            <p><strong>Adım Adım Yol Haritası:</strong></p>
            <ol>
                <li>Binanızın "Riskli Yapı Tespiti"ni lisanslı bir kuruluşa yaptırın.</li>
                <li>Komşularınızla bir araya gelerek ortak karar protokolü imzalayın.</li>
                <li>Real Art Mimarlık gibi SPK Lisanslı Değerleme uzmanlarıyla çalışan, referanslı bir firmadan teklif alın.</li>
                <li>Banka teminat mektubu ve tamamlama sigortası olmadan sözleşme imzalamayın.</li>
            </ol>
            
            <p><em>Real Art Mimarlık olarak, hukuki danışmanlarımızla birlikte sürecin başından anahtar teslimine kadar yanınızdayız.</em></p>
        `,
        date: "2026-02-10",
        author: "Real Art Mimarlık",
        image: "/images/blog/kentsel-donusum-yasasi.webp",
        category: "Kentsel Dönüşüm",
        tags: ["Kentsel Dönüşüm 2026", "Hibe Destekleri", "Deprem Yönetmeliği", "Hukuki Rehber"],
        readTime: "12 dk"
    },
    {
        slug: "2026-insaat-ve-tadilat-maliyetleri",
        title: "2026 İnşaat ve Tadilat Maliyet Rehberi: Metrekare Fiyatları Ne Oldu?",
        excerpt: "Enflasyon, işçilik ücretleri ve malzeme fiyatlarındaki son değişimler. 2026 yılında bir evi yenilemenin veya sıfırdan yapmanın gerçek maliyeti nedir?",
        content: `
            <h2>Bütçenizi Doğru Yönetin: 2026 Fiyat Analizi</h2>
            <p>2026 yılına girerken inşaat sektöründe malzeme fiyatları bir miktar dengelenirken, nitelikli işçilik maliyetlerinde ciddi bir artış yaşandı. Evini yenilemek veya kendi evini inşa etmek isteyenler için güncel piyasa verilerini, bir mimar ve şantiye şefi gözüyle analiz ettik.</p>

            <h3>Kalem Kalem Tadilat Maliyetleri (2026 Güncel)</h3>
            <p>Aşağıdaki fiyatlar, Ordu ilinde "1. Sınıf Malzeme ve İşçilik" standartları baz alınarak ortalama olarak hesaplanmıştır.</p>
            
            <table class="w-full text-left border-collapse my-6">
                <thead>
                    <tr class="border-b border-white/20">
                        <th class="py-2 text-purple-400">Uygulama Kalemi</th>
                        <th class="py-2 text-purple-400">Ortalama Maliyet (TL)</th>
                        <th class="py-2 text-purple-400">Süre</th>
                    </tr>
                </thead>
                <tbody class="text-sm">
                    <tr class="border-b border-white/10">
                        <td class="py-2">Komple Banyo Yenileme (6 m²)</td>
                        <td class="py-2">120.000 - 180.000 ₺</td>
                        <td class="py-2">7-10 Gün</td>
                    </tr>
                    <tr class="border-b border-white/10">
                        <td class="py-2">Mutfak Yenileme (Dolap + Tezgah)</td>
                        <td class="py-2">250.000 - 450.000 ₺</td>
                        <td class="py-2">15-20 Gün</td>
                    </tr>
                    <tr class="border-b border-white/10">
                        <td class="py-2">Zemin Seramik/Parke (m²)</td>
                        <td class="py-2">1.500 - 3.500 ₺</td>
                        <td class="py-2">-</td>
                    </tr>
                    <tr>
                        <td class="py-2">Komple Ev Tadilatı (100 m²)</td>
                        <td class="py-2">1.2M - 2.0M ₺</td>
                        <td class="py-2">45-60 Gün</td>
                    </tr>
                </tbody>
            </table>

            <h3>Maliyetleri Düşürmenin "Akıllı" Yolları</h3>
            <p>Bütçe dostu bir tadilat kalitesiz olmak zorunda değildir. İşte uzman tüyoları:</p>
            <ul>
                <li><strong>Sezon Dışı Tadilat:</strong> Kış ayları (Ocak-Mart), usta bulmanın daha kolay ve fiyatların daha rekabetçi olduğu dönemlerdir.</li>
                <li><strong>Stok Ürünleri Takip Edin:</strong> Seramik ve vitrifiye markalarının "seri sonu" ürünleri, %60'a varan indirimlerle satılır ve kaliteleri aynıdır.</li>
                <li><strong>"Paket" Anlaşma Yapın:</strong> Her ustayı ayrı bulmak yerine, anahtar teslim çalışan kurumsal bir ofisle anlaşmak, sürpriz ekstraları önler ve toplamda daha ekonomiktir.</li>
            </ul>

            <h2>Kaba İnşaat Maliyetleri 2026</h2>
            <p>Kendi arsasında villa yapmak isteyenler için 2026 yılı metrekare birim maliyeti (Kaba + İnce İnşaat, arsa hariç) ortalama <strong>35.000 TL ile 55.000 TL</strong> arasında değişmektedir. Bu rakam, seçilen cephe kaplaması, otomasyon sistemleri ve peyzaj detaylarına göre artış gösterebilir.</p>

            <p><em>Hayalinizdeki proje için en doğru bütçe analizini yapmak üzere ofisimize kahveye bekleriz. Ücretsiz keşif ekibimiz, yerinde tespit yaparak size özel net bir teklif sunacaktır.</em></p>
        `,
        date: "2026-02-12",
        author: "Real Art Mimarlık",
        image: "/images/blog/insaat-maliyetleri-2026.webp",
        category: "Maliyet Analizi",
        tags: ["Tadilat Fiyatları 2026", "İnşaat Maliyeti", "Bütçe Planlama", "Dekorasyon Fikirleri"],
        readTime: "9 dk"
    },
    {
        slug: "villa-yapim-maliyeti-2026-rehberi",
        title: "Villa Yapım Maliyeti 2026: Metrekare Fiyatları, Kaba İnşaat ve Anahtar Teslim Bütçe Rehberi",
        excerpt: "2026 yılında villa yaptırmak ne kadara mal olur? Kaba inşaat, ince işçilik, proje-ruhsat harçları ve anahtar teslim fiyatları detaylı hesaplamalarla açıklıyoruz.",
        content: `
            <h2>2026 Yılında Villa Yaptırmak Ne Kadara Mal Olur?</h2>
            <p>Kendi arsanızda hayalinizdeki villayı inşa etmeyi düşünüyorsanız, en çok merak ettiğiniz soru şüphesiz bütçeyle ilgili. 2026 yılı itibarıyla Türkiye'de villa yapım maliyetleri, malzeme fiyatlarındaki dalgalanma, işçilik ücretleri ve bölgesel farklılıklar nedeniyle geniş bir aralıkta seyrediyor. Bu yazıda, gerçek rayiç bedellere dayalı detaylı bir maliyet analizi sunuyoruz.</p>

            <h3>Metrekare Birim Maliyetleri</h3>
            <p>2026 yılında villa/müstakil ev yapım maliyeti, seçilen malzeme kalitesine göre <strong>metrekare başına 18.000 TL ile 55.000 TL</strong> arasında değişmektedir. İşte kategorilere göre dağılım:</p>
            <ul>
                <li><strong>Standart Kalite:</strong> 18.000 – 25.000 TL/m² (Ekonomik malzemeler, temel donanım)</li>
                <li><strong>Orta-Üst Kalite:</strong> 25.000 – 38.000 TL/m² (Kaliteli yerli markalar, modern tasarım)</li>
                <li><strong>Lüks Kalite:</strong> 38.000 – 55.000 TL/m² (İthal malzeme, akıllı ev sistemleri, özel tasarım)</li>
            </ul>
            <p>Eğimli arazilerde, dar sokaklarda veya kaya zeminde bu rakamlar <strong>%30-60 oranında artış</strong> gösterebilir.</p>

            <h3>Maliyet Kalemleri Dağılımı</h3>
            <p>200 m² betonarme bir villanın (arsa hariç) ortalama maliyet dağılımı şu şekildedir:</p>
            <table>
                <thead>
                    <tr>
                        <th>Kalem</th>
                        <th>Yaklaşık Maliyet</th>
                        <th>Oran</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Hafriyat ve Temel</td><td>250.000 – 450.000 TL</td><td>%8</td></tr>
                    <tr><td>Kaba İnşaat (Beton, Demir, Kalıp)</td><td>1.200.000 – 2.000.000 TL</td><td>%28</td></tr>
                    <tr><td>Çatı ve İzolasyon</td><td>350.000 – 600.000 TL</td><td>%10</td></tr>
                    <tr><td>Elektrik ve Mekanik Tesisat</td><td>400.000 – 700.000 TL</td><td>%12</td></tr>
                    <tr><td>İnce İşçilik (Sıva, Boya, Kaplama)</td><td>600.000 – 1.200.000 TL</td><td>%18</td></tr>
                    <tr><td>Mutfak ve Banyo</td><td>350.000 – 800.000 TL</td><td>%12</td></tr>
                    <tr><td>Kapı, Pencere (PVC/Alüminyum)</td><td>200.000 – 450.000 TL</td><td>%7</td></tr>
                    <tr><td>Proje ve Ruhsat Harçları</td><td>80.000 – 200.000 TL</td><td>%5</td></tr>
                </tbody>
            </table>

            <h3>Ekstra Maliyetler: Havuz, Peyzaj ve Akıllı Ev</h3>
            <p>Temel villa maliyetinin üzerine eklenen popüler isteğe bağlı kalemler:</p>
            <ul>
                <li><strong>Yüzme Havuzu:</strong> 150.000 – 500.000 TL (boyut ve tipine göre)</li>
                <li><strong>Peyzaj ve Bahçe Düzenlemesi:</strong> 100.000 – 300.000 TL</li>
                <li><strong>Akıllı Ev Otomasyonu:</strong> 80.000 – 250.000 TL</li>
                <li><strong>Yerden Isıtma Sistemi:</strong> 60.000 – 150.000 TL</li>
                <li><strong>Güneş Enerjisi Panelleri:</strong> 120.000 – 350.000 TL</li>
            </ul>

            <h3>Ordu'da Villa Yaptırmanın Avantajları</h3>
            <p>Ordu, İstanbul, Bodrum veya Antalya gibi büyük şehirlere kıyasla hem arsa fiyatları hem de işçilik maliyetleri açısından önemli avantajlar sunmaktadır. Aynı bütçeyle İstanbul'da 150 m²'lik bir apartman dairesi alırken, Ordu'da deniz manzaralı 250 m²'lik bir villa yaptırabilirsiniz.</p>

            <blockquote>
                "Doğru bütçe planlaması, villa projenizin en kritik adımıdır. Real Art Mimarlık olarak ücretsiz keşif hizmetimizle arsanızı yerinde inceliyor ve size özel detaylı maliyet raporu hazırlıyoruz." — <strong>Real Art Mimarlık Ekibi</strong>
            </blockquote>
        `,
        date: "2026-02-10",
        author: "Real Art Mimarlık",
        image: "/images/blog/villa-yapim-maliyeti.webp",
        category: "Maliyet Rehberi",
        tags: ["Villa Maliyeti", "İnşaat Fiyatları 2026", "Metrekare Maliyet", "Anahtar Teslim Villa"],
        readTime: "7 dk"
    },
    {
        slug: "insaat-ruhsati-nasil-alinir-adim-adim",
        title: "İnşaat Ruhsatı Nasıl Alınır? 2026 Adım Adım Başvuru Rehberi",
        excerpt: "İnşaat ruhsatı için hangi belgeler gerekli? Başvuru süreci ne kadar sürer? İmar çapından yapı denetim sözleşmesine kadar tüm adımları bu rehberde açıklıyoruz.",
        content: `
            <h2>İnşaat Ruhsatı Nedir ve Neden Zorunludur?</h2>
            <p>İnşaat ruhsatı, İmar Kanunu kapsamında tüm yapılar için belediyeden alınması zorunlu olan resmi izin belgesidir. Ruhsatsız inşaata başlamak yasaktır ve <strong>idari para cezasından yıkım kararına</strong> kadar ciddi yaptırımlar içerir. İşte 2026 yılı itibarıyla inşaat ruhsatı alma sürecinin tüm detayları.</p>

            <h3>Adım 1: İmar Durumu Belgesi (İmar Çapı) Alınması</h3>
            <p>İlk adım olarak belediyeden arsanızın imar durumunu gösteren belgeyi almanız gerekir. Bu belge şu bilgileri içerir:</p>
            <ul>
                <li><strong>TAKS:</strong> Taban Alanı Kat Sayısı (arsanın ne kadarına inşaat yapılabilir)</li>
                <li><strong>KAKS:</strong> Kat Alanı Kat Sayısı (toplam kaç m² kapalı alan yapılabilir)</li>
                <li><strong>Çekme mesafeleri:</strong> Komşu parsellere ve yola olan minimum mesafeler</li>
                <li><strong>Kat sayısı:</strong> Yapılabilecek maksimum kat adedi</li>
            </ul>
            <p><strong>Gerekli belgeler:</strong> Tapu fotokopisi, kimlik fotokopisi, başvuru dilekçesi.</p>

            <h3>Adım 2: Zemin Etüdü Raporu</h3>
            <p>Arsanızın jeolojik yapısını ve zemin taşıma kapasitesini belirleyen bu rapor, Jeoloji ve Jeofizik Mühendisleri tarafından hazırlanır. Rapor, yapınızın temel tipini ve zemin iyileştirme gereksinimlerini ortaya koyar.</p>

            <h3>Adım 3: Projelerin Hazırlanması</h3>
            <p>Aşağıdaki projelerin ilgili mühendis ve mimarlar tarafından hazırlanması gerekir:</p>
            <ul>
                <li><strong>Mimari Proje:</strong> Kat planları, cephe görünümleri, kesitler, alan hesapları</li>
                <li><strong>Statik Proje:</strong> Betonarme hesapları ve yapı güvenliği</li>
                <li><strong>Mekanik Proje:</strong> Sıhhi tesisat, ısıtma/soğutma ve havalandırma</li>
                <li><strong>Elektrik Projesi:</strong> Aydınlatma, priz, topraklama ve güç planları</li>
                <li><strong>Isı Yalıtım Raporu:</strong> Enerji kimlik belgesi için gerekli hesaplar</li>
            </ul>

            <h3>Adım 4: Yapı Denetim Firması ile Sözleşme</h3>
            <p>Seçeceğiniz yapı denetim firması ile sözleşme imzalamanız ve ilk taksitin yatırıldığına dair makbuzu sunmanız gerekir. Yapı denetim firması, inşaat süresince projenin mevzuata uygunluğunu kontrol eder.</p>

            <h3>Adım 5: Belediyeye Başvuru ve Ruhsat Alımı</h3>
            <p>Tüm belgeler tamamlandıktan sonra belediyeye başvurulur. Başvuruda eksiklik yoksa ruhsat <strong>30 gün</strong> içinde düzenlenir. Gerekli ek belgeler:</p>
            <ul>
                <li>Aplikasyon krokisi ve harita plan örneği</li>
                <li>Müteahhit ve şantiye şefi belgeleri</li>
                <li>Vergi kaydı ve emlak vergisi borcu olmadığına dair yazı</li>
                <li>Hisseli tapularda noter onaylı muvafakatname</li>
            </ul>

            <h3>Ruhsat ve Harç Maliyetleri (2026)</h3>
            <p>Proje ve ruhsat toplam maliyeti <strong>80.000 TL ile 200.000 TL</strong> arasında değişmektedir. Bu rakam, projenin büyüklüğüne ve belediyenin belirlediği harç tarifesine göre farklılık gösterir.</p>

            <blockquote>
                "Real Art Mimarlık olarak, ruhsat sürecinin A'dan Z'ye tüm aşamalarını müşterilerimiz adına takip ediyoruz. İmar çapı alımından yapı denetim sözleşmesine kadar bürokratik işlemlerin tamamı bizim sorumluluğumuzda." — <strong>Real Art Mimarlık</strong>
            </blockquote>
        `,
        date: "2026-02-08",
        author: "Real Art Mimarlık",
        image: "/images/blog/insaat-ruhsati-rehberi.webp",
        category: "Rehber",
        tags: ["İnşaat Ruhsatı", "Yapı İzni", "İmar Durumu", "Belediye Başvurusu"],
        readTime: "8 dk"
    },
    {
        slug: "komple-ev-tadilati-is-siralamasi-rehberi",
        title: "Komple Ev Tadilatında İş Sıralaması: Nereden Başlanır, Hangi Adımda Ne Yapılır?",
        excerpt: "Ev tadilatına başlamadan önce iş sıralamasını bilmek, hem zamandan hem paradan tasarruf ettirir. İşte doğru sıralama ve dikkat edilmesi gereken püf noktaları.",
        content: `
            <h2>Ev Tadilatında Doğru Sıralama Neden Bu Kadar Önemli?</h2>
            <p>Yanlış iş sıralaması, tadilatınızın hem süresini hem maliyetini katlar. Boyadan sonra yapılan tesisat değişikliği duvarları yeniden kırmak demektir. Döşeme yapıldıktan sonra fark edilen bir su kaçağı, tüm yer kaplamalarının sökülmesine neden olabilir. Bu yazıda, komple bir ev tadilatının profesyonel iş akışını adım adım paylaşıyoruz.</p>

            <h3>1. Yıkım ve Söküm İşleri</h3>
            <p>Tadilatın ilk aşaması, eski malzemelerin sökülmesi ve planlamaya uygun olmayan duvarların kaldırılmasıdır:</p>
            <ul>
                <li>Eski seramik, parke ve duvar kaplamalarının sökümü</li>
                <li>Kaldırılacak bölme duvarların yıkımı</li>
                <li>Eski mutfak dolabı, banyo armatürlerinin demontajı</li>
                <li>Moloz temizliği ve nakliyesi</li>
            </ul>
            <p><strong>Dikkat:</strong> Taşıyıcı duvarlar kesinlikle yıkılmamalıdır. Bu duvarları belirlemek için mutlaka bir inşaat mühendisi veya mimar ile çalışın.</p>

            <h3>2. Duvar Örme ve Alçı İşleri</h3>
            <p>Yeni oda bölümleri, niş alanları veya alçıpan tavan gibi yapısal değişiklikler bu aşamada yapılır. Alçıpan bölme duvarlar hem hızlı hem ekonomik bir çözümdür.</p>

            <h3>3. Elektrik ve Su Tesisatı</h3>
            <p>Kaba inşaat bittikten sonra, duvarlar kapatılmadan önce tüm tesisatların yenilenmesi gerekir:</p>
            <ul>
                <li><strong>Elektrik:</strong> Priz noktalarının belirlenmesi, kablolama, sigorta panosu güncellemesi</li>
                <li><strong>Su Tesisatı:</strong> Eski boruların değişimi, sıcak-soğuk su hatları</li>
                <li><strong>Doğalgaz:</strong> Kombi bağlantısı ve gaz hattı kontrolü</li>
            </ul>
            <p><em>Bu adım, boyama ve kaplama işlerinden mutlaka ÖNCE yapılmalıdır.</em></p>

            <h3>4. Şap ve Zemin Tesviyesi</h3>
            <p>Tesisat kanalları kapatıldıktan sonra zemin şap atılır. Şapın düzgün kuruması için hava koşullarına bağlı olarak <strong>7 ile 21 gün</strong> beklemek gerekir.</p>

            <h3>5. Seramik ve Fayans İşleri</h3>
            <p>Banyo, mutfak ve varsa diğer ıslak hacimlerde seramik ve fayans döşemesi yapılır. Zemin kaplaması genellikle duvar fayansından sonra uygulanır.</p>

            <h3>6. İç Kapılar ve Doğrama</h3>
            <p>İç kapılar, PVC pencereler ve varsa ahşap doğramalar bu aşamada monte edilir. Kapıların montajı, boya işleminden önce tamamlanmalıdır.</p>

            <h3>7. Boya ve Duvar Kaplamaları</h3>
            <p>Tüm kaba işler tamamlandıktan sonra sıra boyaya gelir:</p>
            <ul>
                <li>İlk kat astar uygulaması</li>
                <li>Macun ve zımpara ile pürüzsüz yüzey hazırlığı</li>
                <li>2-3 kat son kat boya</li>
                <li>Varsa dekoratif duvar kağıdı uygulaması</li>
            </ul>

            <h3>8. Zemin Kaplama (Parke/Laminat)</h3>
            <p>Boya tamamen kuruduktan sonra salon ve odalarda parke veya laminat döşemesi yapılır. Boyadan önce yapılırsa boya damlaları ve çizikler kaçınılmaz olur.</p>

            <h3>9. Mutfak ve Banyo Montajı</h3>
            <p>Mutfak dolapları, tezgah, ankastre cihazlar ve banyo dolapları, armatür montajı bu aşamada gerçekleştirilir.</p>

            <h3>10. Genel Temizlik ve Teslim</h3>
            <p>Tüm işlemler tamamlandıktan sonra inşaat sonrası profesyonel temizlik yapılır ve ev kullanıma hazır hale getirilir.</p>

            <blockquote>
                "Doğru sıralama = daha az süre + daha az maliyet. Real Art Mimarlık olarak anahtar teslim tadilat projelerimizde bu iş akışını eksiksiz uyguluyoruz." — <strong>Real Art Mimarlık</strong>
            </blockquote>
        `,
        date: "2026-02-05",
        author: "Real Art Mimarlık",
        image: "/images/blog/ev-tadilati-rehberi.webp",
        category: "Tadilat Rehberi",
        tags: ["Ev Tadilatı", "Tadilat Sıralaması", "Komple Tadilat", "Dekorasyon"],
        readTime: "10 dk"
    },
    {
        slug: "mimar-tutmak-gerekli-mi-ne-zaman-basvurmali",
        title: "Mimar Tutmak Gerekli mi? Ne Zaman Başvurmalı, Maliyeti Ne Kadar?",
        excerpt: "Ev yaptırırken veya tadilat yaparken mimar tutmak zorunlu mu? Hangi projelerde mimara ihtiyaç duyulur, maliyeti nedir ve nasıl doğru mimarı bulursunuz?",
        content: `
            <h2>Mimar Tutmak Zorunlu mu?</h2>
            <p>Türkiye'de yeni inşaat projelerinde mimari proje hazırlatmak yasal olarak <strong>zorunludur</strong>. İnşaat ruhsatı alabilmeniz için belediyeye sunmanız gereken mimari projeyi ancak yetkin bir mimar hazırlayabilir. Ancak her tadilat için mimar tutmak yasal zorunluluk değildir. İşte hangi durumlarda mimar gerektiği ve ne zaman gerekmediği:</p>

            <h3>Mimar Gerektiren Durumlar</h3>
            <ul>
                <li><strong>Yeni yapı inşaatı:</strong> Villa, müstakil ev veya herhangi bir yapının sıfırdan inşası</li>
                <li><strong>Esaslı tadilat:</strong> Taşıyıcı sisteme müdahale, kat ekleme, dış cephe değişikliği</li>
                <li><strong>Kullanım amacı değişikliği:</strong> Dükkanı eve, evi ofise çevirme gibi dönüşümler</li>
                <li><strong>Bağımsız bölüm sayısı değişikliği:</strong> Bir daireyi ikiye bölme veya iki daireyi birleştirme</li>
                <li><strong>Ruhsat gerektiren her proje:</strong> Belediye onayı gereken tüm yapısal değişiklikler</li>
            </ul>

            <h3>Mimar Gerektirmeyen Durumlar</h3>
            <ul>
                <li>Basit boya, badana işleri</li>
                <li>Mevcut seramiklerin değişimi (su tesisatına müdahale edilmeden)</li>
                <li>Duvar kağıdı uygulaması</li>
                <li>Mobilya ve dekorasyon değişiklikleri</li>
                <li>Bahçe duvarı, baca tamiri gibi basit onarımlar</li>
            </ul>

            <h3>Mimarın Projedeki Rolü Nedir?</h3>
            <p>Bir mimar sadece "güzel çizim yapan kişi" değildir. Mimarın projedeki katkıları:</p>
            <ul>
                <li><strong>İmar mevzuatı:</strong> Arsanızda yasal olarak ne yapılabileceğini analiz eder</li>
                <li><strong>Fonksiyonel tasarım:</strong> Yaşam alanlarını ihtiyaçlarınıza göre optimize eder</li>
                <li><strong>Maliyet kontrolü:</strong> Gereksiz harcamaları önleyecek çözümler sunar</li>
                <li><strong>Proje yönetimi:</strong> Mühendisler, müteahhit ve belediye arasındaki koordinasyonu sağlar</li>
                <li><strong>Yapı denetimi:</strong> İnşaat sürecinde projenin uygulanmasını takip eder</li>
            </ul>

            <h3>Mimar Ücreti Ne Kadardır? (2026)</h3>
            <p>Mimarlık hizmet bedeli, projenin büyüklüğüne ve kapsamına göre değişir. TMMOB Mimarlar Odası tarifesine göre:</p>
            <ul>
                <li><strong>Villa Projesi (150-300 m²):</strong> 150.000 – 400.000 TL</li>
                <li><strong>Tadilat Projesi:</strong> 50.000 – 150.000 TL</li>
                <li><strong>İç Mimari Tasarım:</strong> 80.000 – 250.000 TL</li>
            </ul>
            <p>Bu bedeller genellikle toplam inşaat maliyetinin <strong>%3-7'sine</strong> karşılık gelir ve doğru mimar seçimi, bu yatırımın misliyle geri dönmesini sağlar.</p>

            <h3>Doğru Mimarı Nasıl Bulursunuz?</h3>
            <ul>
                <li>Portföyünü ve daha önce tamamladığı projeleri inceleyin</li>
                <li>Referanslarını kontrol edin, mümkünse yapılmış projeleri yerinde görün</li>
                <li>Bütçenizi ve beklentilerinizi ilk görüşmede net olarak paylaşın</li>
                <li>Mimarlar Odası'na kayıtlı olduğundan emin olun</li>
            </ul>

            <blockquote>
                "İyi bir mimar, projenizin hem estetik hem fonksiyonel hem de yasal açıdan sorunsuz olmasını garanti eder. Yatırımınızı korumanın en akıllı yolu, doğru mimarla çalışmaktır." — <strong>Real Art Mimarlık</strong>
            </blockquote>
        `,
        date: "2026-02-01",
        author: "Real Art Mimarlık",
        image: "/images/blog/mimar-tutmak-gerekli-mi.webp",
        category: "Rehber",
        tags: ["Mimar Tutmak", "Mimarlık Hizmeti", "Proje Maliyeti", "Mimar Seçimi"],
        readTime: "8 dk"
    },
    {
        slug: "kat-irtifaki-kat-mulkiyeti-farki-nedir",
        title: "Kat İrtifakı ve Kat Mülkiyeti Arasındaki Fark Nedir? Tapuda Nelere Dikkat Etmelisiniz?",
        excerpt: "Daire alırken tapuda kat irtifakı mı yoksa kat mülkiyeti mi yazıyor? İkisi arasındaki farkı, risklerini ve geçiş sürecini anlaşılır bir dille açıklıyoruz.",
        content: `
            <h2>Kat İrtifakı Nedir?</h2>
            <p>Kat irtifakı, henüz <strong>tamamlanmamış veya inşaat halindeki</strong> bir yapının bağımsız bölümleri üzerinde kurulan bir tapu türüdür. Basitçe söylemek gerekirse, "Bu arsada bir bina yapılacak ve siz bu binanın şu dairesine sahip olacaksınız" anlamına gelir. Kat irtifakı tapusu, inşaat başlangıcında veya proje aşamasında düzenlenir.</p>

            <h3>Kat Mülkiyeti Nedir?</h3>
            <p>Kat mülkiyeti ise <strong>inşaatı tamamlanmış ve iskân belgesi (yapı kullanma izin belgesi) almış</strong> bir yapının bağımsız bölümleri için verilen kesin tapu türüdür. Bu, mülkün tam anlamıyla kullanıma hazır olduğunu ve tüm yasal süreçlerin tamamlandığını gösterir.</p>

            <h3>İkisi Arasındaki Temel Farklar</h3>
            <table>
                <thead>
                    <tr>
                        <th>Özellik</th>
                        <th>Kat İrtifakı</th>
                        <th>Kat Mülkiyeti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Yapı Durumu</td><td>İnşaat halinde veya proje aşamasında</td><td>Tamamlanmış ve iskânlı</td></tr>
                    <tr><td>İskân Belgesi</td><td>Yok</td><td>Var</td></tr>
                    <tr><td>Abonelik İşlemleri</td><td>Geçici abonelikler</td><td>Kalıcı bireysel abonelikler</td></tr>
                    <tr><td>Kredi Kullanımı</td><td>Bankalar zorlanabilir</td><td>Sorunsuz kredi imkânı</td></tr>
                    <tr><td>Satış Değeri</td><td>Daha düşük</td><td>Daha yüksek</td></tr>
                    <tr><td>Hukuki Güvence</td><td>Sınırlı</td><td>Tam güvence</td></tr>
                </tbody>
            </table>

            <h3>Kat İrtifakı Kat Mülkiyetine Nasıl Çevrilir?</h3>
            <p>Geçiş süreci şu adımları içerir:</p>
            <ul>
                <li><strong>1.</strong> İnşaat tamamlanır ve yapı kullanma izin belgesi (iskân) alınır</li>
                <li><strong>2.</strong> Belediyeden iskân belgesi Tapu Müdürlüğü'ne iletilir</li>
                <li><strong>3.</strong> Tapu Müdürlüğü, kat irtifakını otomatik olarak kat mülkiyetine çevirir</li>
            </ul>
            <p>2019 yılındaki mevzuat değişikliğiyle bu süreç büyük ölçüde kolaylaştırılmıştır.</p>

            <h3>Kat İrtifaklı Daire Alırken Dikkat Edilecekler</h3>
            <ul>
                <li><strong>İmar durumunu kontrol edin:</strong> Yapının imar planına uygun olup olmadığını araştırın</li>
                <li><strong>Müteahhitin geçmişini araştırın:</strong> Daha önce tamamladığı projeleri kontrol edin</li>
                <li><strong>İskân taahhüdü alın:</strong> Sözleşmede iskân belgesi alma süresinin belirtilmesini talep edin</li>
                <li><strong>Yapı denetim raporlarını inceleyin:</strong> İnşaatın denetlenip denetlenmediğini öğrenin</li>
                <li><strong>Kat mülkiyetine geçiş garantisi isteyin:</strong> Noterde düzenlenecek sözleşmeye bu maddeyi ekletin</li>
            </ul>

            <h3>Tadilat ve Kat İrtifakı İlişkisi</h3>
            <p>Kat irtifakı kurulmuş bir binada tadilat yapmak istiyorsanız, mimari projede değişiklik gerektiğinde <strong>tüm bağımsız bölüm maliklerinin yazılı izni</strong> zorunludur. Bu izin alınmadan düzenlenen tadilat ruhsatları geçersiz sayılabilir.</p>

            <blockquote>
                "Daire satın alırken tapu türünü mutlaka kontrol edin. Kat irtifakı ile kat mülkiyeti arasındaki fark, yatırımınızın güvenliğini doğrudan etkiler." — <strong>Real Art Mimarlık</strong>
            </blockquote>
        `,
        date: "2026-01-28",
        author: "Real Art Mimarlık",
        image: "/images/blog/kat-irtifaki-mulkiyeti.webp",
        category: "Hukuki Rehber",
        tags: ["Kat İrtifakı", "Kat Mülkiyeti", "Tapu", "Gayrimenkul Hukuku"],
        readTime: "7 dk"
    }
];
