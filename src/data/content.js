/**
 * SZAL ÇALIŞTAYI 2027 — MERKEZİ İÇERİK YAPILANDIRMASI (CONTENT CONFIG)
 * 
 * Bu dosya web sitesindeki TÜM metinleri, konuşmacıları, ekip üyelerini,
 * program akışını, SSS ve başvuru bağlantılarını içerir.
 * 
 * Değiştirmek istediğiniz yerleri aşağıdaki nesnelerden kolayca güncelleyebilirsiniz.
 * Değiştirilmesi tavsiye edilen yerler `// TODO:` yorumlarıyla işaretlenmiştir.
 */

const siteContent = {
  // 1. GENEL ETKİNLİK BİLGİLERİ
  meta: {
    title: "SZAL Çalıştayı 2027 | Sabahattin Zaim Anadolu Lisesi",
    description: "Sabahattin Zaim Anadolu Lisesi öğrenci çalıştayı 24-25 Nisan 2027 tarihlerinde genç liderleri, ilham verici oturumları ve interaktif atölyeleri bir araya getiriyor. Hemen başvur!",
    author: "SZAL Çalıştayı Organizasyon Ekibi",
    lang: "tr",
    eventDateRange: "24-25 Nisan 2027",
    // Canlı geri sayım hedef tarihi (ISO-8601: YYYY-MM-DDTHH:mm:ss+03:00)
    countdownTarget: "2027-04-24T09:00:00+03:00",
    
    // MEKAN YAPILANDIRMASI
    // NOT: Prompt özetinde "İstanbul Aydın Üniversitesi" belirtilmiş, detaylarda "Sabahattin Zaim Üniversitesi" geçmektedir.
    // Varsayılan olarak İstanbul Aydın Üniversitesi seçilmiştir. Alternatif için aşağıdaki satırları değiştirebilirsiniz.
    venueName: "İstanbul Aydın Üniversitesi", // TODO: İhtiyaca göre "İstanbul Sabahattin Zaim Üniversitesi" olarak değiştirebilirsiniz
    venueShortLocation: "Florya Yerleşkesi, Küçükçekmece / İstanbul",
    venueFullAddress: "Beşyol Mah. İnönü Cad. No:38, 34295 Küçükçekmece / İstanbul", // TODO: Kampüs adresini teyit ediniz
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.666992224095!2d28.79633887652391!3d40.98877397135327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa395b058c49d%3A0xc6640c3029f649e!2zxLBzdGFuYnVsIEF5ZMSxbiDDnG5pdmVyc2l0ZXNp!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str",
    
    // Alternatif Mekan Bilgileri (Gerektiğinde yukarıya yapıştırabilirsiniz):
    // venueName: "İstanbul Sabahattin Zaim Üniversitesi",
    // venueShortLocation: "Halkalı Kampüsü, Küçükçekmece / İstanbul",
    // venueFullAddress: "Halkalı Merkez Mahallesi, Halkalı Caddesi No:2, 34303 Küçükçekmece / İstanbul",
    // googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8778647716174!2d28.77708517652702!3d41.03889147134639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa447df17c763%3A0x633513364f4ec88a!2zxLBzdGFuYnVsIFNhYmFoYXR0aW4gWmFpbSDDnG5pdmVyc2l0ZXNp!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str",
    
    // BAŞVURU FORMU BAĞLANTISI
    // TODO: Google Forms / Typeform linkinizi buraya ekleyin.
    // Eğer bağlantı boş string ("") bırakılırsa, sitedeki tüm başvuru butonları otomatik olarak "Başvurular Yakında Açılıyor" olarak pasif görünür.
    applicationUrl: "", // Örnek: "https://forms.gle/szalcalistay2027"
    applicationDeadlineText: "Son Başvuru Tarihi: 10 Nisan 2027, 23:59", // TODO: Son başvuru tarihini güncelleyin
  },

  // 2. SOSYAL MEDYA BAĞLANTILARI
  socialMedia: {
    instagram: "https://www.instagram.com/szalcalistay/",
    tiktok: "https://www.tiktok.com/@szalcalistay",
    email: "iletisim@szalcalistay.org", // TODO: Resmi iletişim e-posta adresinizi giriniz
    phone: "+90 (212) 692 96 00", // TODO: İletişim telefon numarası
  },

  // 3. NAVBAR MENÜ BAĞLANTILARI
  navLinks: [
    { label: "Hakkında", href: "#hakkinda" },
    { label: "Program", href: "#program" },
    { label: "Konuşmacılar", href: "#konusmacilar" },
    { label: "Ekibimiz", href: "#ekibimiz" },
    { label: "Mekan", href: "#mekan" },
    { label: "SSS", href: "#sss" },
  ],

  // 4. HERO BÖLÜMÜ
  hero: {
    badge: "Lise Öğrenci Çalıştayı 2027",
    mainTitle: "SZAL Çalıştayı 2027",
    
    // Slogan alternatifleri (1. alternatif varsayılan olarak seçilmiştir)
    // Alternatif 1: "Geleceğin Liderleri, Bugünün Fikirleriyle Buluşuyor."
    // Alternatif 2: "Fikirlerin Eyleme, Hayallerin Geleceğe Dönüştüğü İki Gün."
    // Alternatif 3: "Lise Sıralarından Yarının Dünyasına: İlham, Deneyim, Vizyon."
    slogan: "Geleceğin Liderleri, Bugünün Fikirleriyle Buluşuyor.", // TODO: Dilediğiniz alternatifle değiştirebilirsiniz
    
    description: "Sabahattin Zaim Anadolu Lisesi bünyesinde lise öğrencilerini, alanında öncü akademisyenleri, genç girişimcileri ve uzmanları interaktif panellerde buluşturan ilham verici vizyon çalıştayı.",
    
    ctaPrimary: "Hemen Başvur",
    ctaSecondary: "Programı Gör",
    countdownTitle: "Etkinliğe Kalan Süre",
    countdownEndedText: "Çalıştay Başladı!",
    socialFollowText: "Bizi Takip Edin",
  },

  // 5. HAKKINDA VE SAYISAL GÖSTERGELER
  about: {
    sectionTag: "Çalıştay Vizyonu",
    title: "Yarının Dünyasını Bugünden Birlikte Şekillendiriyoruz",
    // TODO: [SZAL AÇILIMI] ve konsept detaylarını ihtiyacınıza göre güncelleyin.
    paragraphs: [
      "SZAL Çalıştayı ([SZAL AÇILIMI: Sabahattin Zaim Anadolu Lisesi] Öğrenci Çalıştayı), lise öğrencilerine yalnızca teorik bilgiler sunmakla kalmayıp; onları sorgulayan, çözüm üreten, teknoloji ve toplumsal dönüşümü yakından takip eden proaktif bireyler haline getirmeyi amaçlayan kapsamlı bir gençlik zirvesidir.",
      "İki gün boyunca sürecek bu yoğun programda; alanında uzman konuklarla paneller, çözüm odaklı yuvarlak masa atölyeleri ve Türkiye'nin dört bir yanından gelen akranlarla networking fırsatları seni bekliyor. // TODO: [KONSEPT BİLGİSİ]"
    ],
    // Rakamlarla Çalıştay (İstatistik Kartları)
    stats: [
      { id: "stat-1", number: 2, suffix: "", label: "Dolu Dolu Gün", desc: "Kesintisiz oturum ve atölyeler" },
      { id: "stat-2", number: 350, suffix: "+", label: "Lise Katılımcısı", desc: "Farklı liselerden aktif gençler" },
      { id: "stat-3", number: 10, suffix: "+", label: "Oturum & Atölye", desc: "İnteraktif fikir maratonları" },
      { id: "stat-4", number: 12, suffix: "+", label: "Konuk Konuşmacı", desc: "Akademi ve sektör öncüleri" }
    ],
    // Neden Katılmalısın?
    whyJoin: [
      {
        icon: "users",
        title: "Güçlü Akran Ağı (Networking)",
        description: "Benzer vizyona sahip yüzlerce lise öğrencisiyle tanış, kalıcı dostluklar ve ortak proje bağları kur."
      },
      {
        icon: "lightbulb",
        title: "Uygulamalı Atölye Deneyimi",
        description: "Sadece dinleyici kalma; yuvarlak masa tartışmalarında fikirlerini savun, sonuç bildirgesine imzanı at."
      },
      {
        icon: "award",
        title: "Resmi Katılım Sertifikası",
        description: "Çalıştayın tüm oturumlarını tamamlayan her katılımcıya kariyer portfolyosuna değer katan resmi katılım belgesi verilir."
      },
      {
        icon: "compass",
        title: "Kariyer & Vizyon İlhamı",
        description: "Üniversite hayatından iş dünyasına, teknolojiden sosyal bilimlere uzanan kariyer basamaklarını ilk elden dinle."
      }
    ]
  },

  // 6. PROGRAM AKIŞI (İKİ GÜNLÜK TAKVİM)
  schedule: {
    sectionTag: "Etkinlik Takvimi",
    title: "İki Günlük İlham Dolu Akış",
    description: "Her oturum, katılımcıların merak duygusunu ve analitik düşünme yeteneğini besleyecek şekilde özenle yapılandırıldı.",
    days: [
      {
        dayId: "day-1",
        label: "1. Gün · 24 Nisan 2027",
        date: "24 Nisan 2027, Cumartesi",
        theme: "Fikir, Teknoloji ve Gelecek Tasarımı",
        events: [
          {
            time: "09:00 - 10:00",
            title: "Kayıt & Karşılama İkramı",
            description: "Girişte katılımcı yaka kartlarının dağıtılması, workshop çantalarının takdimi ve sabah kahvesi.",
            location: "Ana Fuaye Alanı",
            category: "Kayıt"
          },
          {
            time: "10:00 - 10:45",
            title: "Açılış Seremonisi & Protokol Konuşmaları",
            description: "SZAL Okul Yönetimi, Genel Koordinatörler açılış konuşması ve çalıştay manifestosunun okunması.",
            location: "Büyük Amfi A",
            category: "Açılış"
          },
          {
            time: "11:00 - 12:30",
            title: "Ana Panel: Yapay Zeka Çağında İnsan ve Eğitim",
            description: "Yapay zekanın eğitim, meslekler ve etik üzerindeki etkilerinin akademisyen ve sektör uzmanlarıyla tartışılması.",
            location: "Büyük Amfi A",
            category: "Panel"
          },
          {
            time: "12:30 - 13:45",
            title: "Öğle Yemeği & Akran Networking",
            description: "Katılımcılar için organize edilen öğle yemeği ve serbest tanışma aralığı.",
            location: "Üniversite Yemekhanesi & Bahçe",
            category: "Mola"
          },
          {
            time: "14:00 - 15:45",
            title: "Eşzamanlı Atölyeler (Komite Oturumları)",
            description: "Teknoloji, Hukuk, Çevre & Sürdürülebilirlik ve Girişimcilik masalarında sorun analizi ve çözüm üretimi.",
            location: "Çalıştay Salonları 1-4",
            category: "Atölye"
          },
          {
            time: "16:00 - 17:00",
            title: "1. Gün Değerlendirmesi & İlham Konuşması",
            description: "Günün öne çıkan fikirlerinin sunumu ve sürpriz genç girişimci konuk oturumu.",
            location: "Büyük Amfi A",
            category: "Kapanış"
          }
        ]
      },
      {
        dayId: "day-2",
        label: "2. Gün · 25 Nisan 2027",
        date: "25 Nisan 2027, Pazar",
        theme: "Eylem, Çözüm ve Sonuç Bildirgesi",
        events: [
          {
            time: "09:30 - 10:00",
            title: "Güne Merhaba & Dinamik Isınma",
            description: "İkinci güne başlangıç kahvesi ve komite gruplarının toplanması.",
            location: "Ana Fuaye Alanı",
            category: "Kayıt"
          },
          {
            time: "10:00 - 12:00",
            title: "Komite Bildirge Yazım Oturumu",
            description: "Birinci gün üretilen çözüm önerilerinin resmi sonuç bildirgesi taslağına dönüştürülmesi.",
            location: "Çalıştay Salonları 1-4",
            category: "Atölye"
          },
          {
            time: "12:00 - 13:15",
            title: "Öğle Arası & Kampüs Turu",
            description: "Yemek ikramı ve üniversite kampüs olanaklarının tanıtımı.",
            location: "Kampüs Meydanı",
            category: "Mola"
          },
          {
            time: "13:30 - 15:30",
            title: "Genel Kurul: Komite Sunumları ve Oylama",
            description: "Her komitenin sonuç bildirgesini tüm katılımcılara sunması, açık soru-cevap ve oylama süreci.",
            location: "Büyük Amfi A",
            category: "Genel Kurul"
          },
          {
            time: "15:45 - 17:00",
            title: "Kapanış Töreni, Sertifika Dağıtımı & Toplu Fotoğraf",
            description: "Teşekkür konuşmaları, resmi katılım sertifikalarının takdimi ve hatıra fotoğrafı çekimi.",
            location: "Büyük Amfi A",
            category: "Kapanış"
          }
        ]
      }
    ]
  },

  // 7. KONUŞMACILAR
  speakers: {
    sectionTag: "İlham Verenler",
    title: "Konuşmacılar & Panelistler",
    description: "Deneyimleri, başarıları ve vizyonlarıyla genç zihinlere rehberlik edecek değerli konuklarımız.",
    // Eğer henüz konuşmacılar kesinleşmediyse 'isAnnounced: false' yapılabilir.
    // Şablon hem açıklanmış konuşmacıları hem de "Çok Yakında" kartlarını destekler.
    isAnnounced: false, // TODO: Konuşmacılar duyurulduğunda 'true' yapınız
    announcementNotice: "Değerli akademisyen, girişimci ve liderlerden oluşan konuşmacı kadromuz çok yakında duyurulacaktır. Takipte kalın!",
    list: [
      {
        id: "speaker-1",
        name: "Yakında Açıklanacak",
        role: "Ana Konuşmacı",
        company: "Akademi & Bilim Dünyası",
        tag: "Yapay Zeka & Gelecek",
        photo: "" // TODO: assets/speakers/speaker1.webp görsel yolunu ekleyin
      },
      {
        id: "speaker-2",
        name: "Yakında Açıklanacak",
        role: "Panelist",
        company: "Teknoloji Girişimi",
        tag: "Girişimcilik",
        photo: ""
      },
      {
        id: "speaker-3",
        name: "Yakında Açıklanacak",
        role: "Panelist",
        company: "Sosyal İnovasyon Lideri",
        tag: "Sürdürülebilirlik",
        photo: ""
      },
      {
        id: "speaker-4",
        name: "Yakında Açıklanacak",
        role: "Atölye Yürütücüsü",
        company: "Hukuk & Etik Çalışmaları",
        tag: "Dijital Haklar",
        photo: ""
      }
    ]
  },

  // 8. EKİBİMİZ (HİYERARŞİK ORGANİZASYON ŞEMASI)
  team: {
    sectionTag: "Organizasyonun Arkasındakiler",
    title: "Çalıştay Ekibimiz",
    description: "Aylardır titizlikle çalışan, çalıştayın her anını sizin için en verimli hale getiren genç ve dinamik kadro.",
    
    // Genel Koordinatörler (Büyük, prestijli öne çıkan kartlar)
    generalCoordinators: [
      {
        id: "gk-1",
        name: "Zeynep Su Şahin",
        role: "Genel Koordinatör",
        department: "SZAL Çalıştayı Liderliği",
        bio: "Çalıştayın genel stratejisi, akademik oturum planlaması ve kurumsal vizyonunun yürütücüsü.",
        photo: "", // TODO: Eğer fotoğraf varsa 'assets/team/zeynep-su-sahin.webp' ekleyin
        initials: "ZS"
      },
      {
        id: "gk-2",
        name: "Bahar Nur Yeyrek",
        role: "Genel Koordinatör",
        department: "SZAL Çalıştayı Liderliği",
        bio: "Organizasyonel operasyonlar, kurumsal ilişkiler ve ekip koordinasyonundan sorumlu lider.",
        photo: "", // TODO: Fotoğraf dosya yolu
        initials: "BN"
      }
    ],

    // Direktörler (Eşit ve dengeli kartlar)
    directors: [
      {
        id: "dir-1",
        name: "Muhammed Adnan",
        role: "Saha Ekip Direktörü",
        department: "Saha Operasyonu & Lojistik",
        bio: "Etkinlik mekanı koordinasyonu, katılımcı akışı, teknik altyapı ve saha güvenliği yönetimi.",
        photo: "", // TODO: Fotoğraf dosya yolu
        initials: "MA"
      },
      {
        id: "dir-2",
        name: "Zeynep Gülen",
        role: "PR Ekip Direktörü",
        department: "Basın, İletişim & Sosyal Medya",
        bio: "Kurumsal iletişim stratejileri, sponsorluk ilişkileri ve medya görünürlüğünün yürütülmesi.",
        photo: "", // TODO: Fotoğraf dosya yolu
        initials: "ZG"
      },
      {
        id: "dir-3",
        name: "Hayal Yanar",
        role: "PR Ekip Direktörü",
        department: "Tanıtım, Tasarım & Sosyal Medya",
        bio: "Görsel kimlik tasarımı, dijital içerik üretimi ve sosyal medya etkileşiminin yönetimi.",
        photo: "", // TODO: Fotoğraf dosya yolu
        initials: "HY"
      }
    ]
  },

  // 9. BAŞVURU BÖLÜMÜ (CTA BANNER)
  application: {
    sectionTag: "Katılım Şansı",
    title: "Çalıştaya Katılmak İçin Başvur", // TODO: İhtiyaca göre "Geleceğin Bir Parçası Olmaya Hazır Mısın?" yapabilirsiniz
    description: "SZAL Çalıştayı 2027 kontenjanları sınırlıdır. Erken başvuru yaparak bu eşsiz deneyimde yerini garanti altına alabilirsin.",
    stepsNotice: "Başvuru formunu doldurduktan sonra değerlendirme sonuçları kayıtlı e-posta adresine iletilecektir.",
    buttonActiveText: "Hemen Başvur",
    buttonDisabledText: "Başvurular Yakında Açılıyor",
  },

  // 10. MEKAN VE ULAŞIM
  venue: {
    sectionTag: "Konum & Ulaşım",
    title: "Etkinlik Alanı ve Kolay Ulaşım",
    description: "Çalıştayımız, İstanbul'un modern ve merkezi yerleşkelerinden birinde gerçekleştirilecektir. // TODO: Kampüs detaylarını teyit ediniz",
    transportOptions: [
      {
        icon: "train",
        title: "Metrobüs & Raylı Sistem",
        description: "Metrobüs Beşyol Durağı doğrudan kampüsün önünde yer almaktadır. Ayrıca Marmaray Florya durağından aktarma sağlanabilir. // TODO: Güzergah detayı"
      },
      {
        icon: "bus",
        title: "İETT & Toplu Taşıma",
        description: "Küçükçekmece, Bakırköy, Avcılar ve Yenibosna yönünden hareket eden tüm E-5 aksı otobüsleriyle kampüs durağında inebilirsiniz."
      },
      {
        icon: "car",
        title: "Özel Araç & Otopark",
        description: "D-100 (E-5) Karayolu Florya yan yol üzerinden doğrudan giriş mevcuttur. Kampüs içerisinde katılımcılara özel otopark imkanı sağlanmaktadır."
      },
      {
        icon: "map-pin",
        title: "Yerleşke Girişi & Karşılama",
        description: "Ana nizamiye kapısından giriş yaparak kayıt masası ve amfilere yönlendiren SZAL Çalıştayı tabelalarını takip edebilirsiniz."
      }
    ]
  },

  // 11. SIKÇA SORULAN SORULAR (SSS)
  faq: {
    sectionTag: "Merak Edilenler",
    title: "Sıkça Sorulan Sorular",
    description: "Çalıştaya dair kafandaki soru işaretlerine hızlı yanıtlar bulabilirsin.",
    items: [
      {
        question: "Çalıştaya kimler başvurabilir?",
        answer: "SZAL Çalıştayı 2027, Türkiye genelindeki tüm resmi ve özel liselerde (9, 10, 11 ve 12. sınıf) öğrenim gören tüm lise öğrencilerine açıktır."
      },
      {
        question: "Etkinliğe katılım ücretli mi?",
        answer: "Hayır. SZAL Çalıştayı tamamen ücretsiz bir gençlik etkinliğidir. Katılımcılardan herhangi bir başvuru veya katılım bedeli talep edilmez."
      },
      {
        question: "Başvuru süreci nasıl işliyor ve sonuçlar ne zaman açıklanacak?",
        answer: "Web sitemizdeki başvuru formunu eksiksiz doldurmanız gerekmektedir. Başvurular organizasyon komitesi tarafından motivasyon ve ilgi alanlarına göre değerlendirilerek sonuçlar e-posta ile bildirilecektir."
      },
      {
        question: "Katılım sertifikası verilecek mi?",
        answer: "Evet! İki gün süresince oturumların en az %80'ine katılım sağlayan tüm öğrencilere Sabahattin Zaim Anadolu Lisesi ve Üniversite onaylı resmi 'Katılım Sertifikası' takdim edilecektir."
      },
      {
        question: "Yemek ve ikramlar karşılanıyor mu?",
        answer: "Evet, iki gün boyunca öğle yemekleri, kahve molaları, su ve atıştırmalık ikramları çalıştay organizasyonu tarafından ücretsiz olarak sağlanacaktır."
      },
      {
        question: "Konaklama ve şehirlerarası ulaşım sağlanıyor mu?",
        answer: "Şehir dışından katılacak öğrenciler için konaklama ve yol giderleri katılımcının kendisine aittir. Ancak kampüse ulaşım için en uygun güzergah rehberi ekibimizce paylaşılacaktır."
      },
      {
        question: "Çalıştay günü yanımda ne getirmeliyim?",
        answer: "Öğrenci kimlik kartınız, not almak için dilerseniz dizüstü bilgisayarınız veya tabletiniz ve çalışmaya olan motivasyonunuzu getirmeniz yeterlidir. Workshop bloknot ve kalemleri tarafımızca hediye edilecektir."
      },
      {
        question: "Kıyafet kuralı (Dress Code) var mı?",
        answer: "Katılımcıların çalıştayın kurumsal ve genç havasına uygun olarak 'Smart Casual' (şık günlük) kıyafet tercih etmeleri önerilir."
      }
    ]
  },

  // 12. SPONSORLAR & DESTEKÇİLER (Opsiyonel: Dizi boş bırakılırsa bölüm gizlenir)
  sponsors: [
    // { name: "Örnek Destekçi Kurum", logo: "assets/sponsors/sponsor1.svg" }
  ],

  // 13. DUYURULAR / HABERLER (Gelecekte ekleme için hazır yapı)
  announcements: []
};

// Hem file:// doğrudan açılışlarda hem de modül ortamlarında tam uyum
if (typeof window !== 'undefined') {
  window.siteContent = siteContent;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { siteContent };
}
