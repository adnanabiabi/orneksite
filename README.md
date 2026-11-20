# SZAL Çalıştayı 2027 — Web Sitesi

Sabahattin Zaim Anadolu Lisesi (SZAL) Öğrenci Çalıştayı 2027 için özel olarak geliştirilmiş modern, tek sayfalık (single-page, smooth scroll), responsive ve çok sayfalı hissi veren resmi tanıtım ve başvuru web sitesi.

---

## 🌟 Proje Özellikleri

- **Renk Paleti & Tasarım:** `#03546A` (derin petrol mavisi), `#DEDEDE` (açık gri), yumuşak kart gölgeleri, cam efekti (glassmorphism), dalgalı SVG geçiş ayraçları.
- **Tipografi:** Google Fonts üzerinden **Outfit** (Başlıklar) ve **Inter** (Gövde), tam Türkçe karakter desteği.
- **Canlı Geri Sayım Sayacı:** 24 Nisan 2027 09:00 hedefine kilitlenmiş, canlı gün/saat/dakika/saniye sayacı (süre dolduğunda "Çalıştay Başladı!" durumu).
- **Akıllı Başvuru Kontrolü:** `content.js` dosyasındaki `applicationUrl` dolu olduğunda buton aktif olup forma yönlendirir; boş bırakıldığında otomatik olarak pasif "Başvurular Çok Yakında Açılıyor" moduna geçer.
- **Hiyerarşik Ekip Yapısı:**
  - **Genel Koordinatörler:** Zeynep Su Şahin, Bahar Nur Yeyrek (büyük, öne çıkan kartlar)
  - **Saha Ekip Direktörü:** Muhammed Adnan
  - **PR Ekip Direktörleri:** Zeynep Gülen, Hayal Yanar
- **İki Günlük İnteraktif Akış (Timeline):** 1. Gün ve 2. Gün sekme geçişi.
- **Erişilebilirlik:** Semantik HTML5, klavye navigasyonu (`Tab` halkaları, `Esc` ile mobil menü kapatma, skip link), `prefers-reduced-motion` desteği, WCAG AA renk kontrastı.
- **SEO & Sosyal Paylaşım:** Open Graph etiketleri, Twitter Cards, özel `favicon.svg` ve 1200x630 `og-image.svg`.
- **Sıfır Bağımlılık (Zero Dependencies):** Herhangi bir npm paketine ihtiyaç duymadan, doğrudan tarayıcıda veya yerel sunucuda anında çalışır.

---

## 🚀 Yerel Ortamda Çalıştırma

Projeyi bilgisayarınızda yerel olarak görüntülemek için aşağıdaki yöntemlerden birini kullanabilirsiniz:

### Yöntem 1: Python ile (Önerilen)
Komut satırını proje klasöründe açın ve şunu çalıştırın:
```bash
python -m http.server 8080
```
Ardından tarayıcınızdan `http://localhost:8080` adresine gidin.

### Yöntem 2: VS Code Live Server
Projeyi VS Code veya Cursor'da açın, `index.html` dosyasına sağ tıklayıp **"Open with Live Server"** seçeneğini seçin.

### Yöntem 3: Doğrudan Tarayıcıda Açma
Modern tarayıcıların ES modül güvenlik politikaları (CORS) nedeniyle yerel sunucu (Yöntem 1 veya 2) kullanılması tavsiye edilir.

---

## 📝 Düzenlenecek Yerler Listesi (TODO)

Web sitesindeki **tüm içerikler** tek bir dosyadan (`js/content.js`) yönetilmektedir. `content.js` dosyasını açıp aşağıdaki alanları kolayca güncelleyebilirsiniz:

| Alan / Değişken | Açıklama | Dosya Konumu |
| :--- | :--- | :--- |
| `meta.applicationUrl` | Google Forms / Typeform başvuru linkiniz. Boş bırakılırsa butonlar otomatik pasifleşir. | `js/content.js:30` |
| `meta.applicationDeadlineText` | Son başvuru tarihi metni (ör. "10 Nisan 2027, 23:59") | `js/content.js:31` |
| `meta.venueName` | Etkinlik mekanı adı (örn. İstanbul Sabahattin Zaim Üniversitesi veya Aydın Üniversitesi) | `js/content.js:24` |
| `meta.venueFullAddress` | Kampüs açık adresi ve navigasyon tarifi | `js/content.js:26` |
| `meta.googleMapsEmbedUrl` | Mekanın Google Haritalar iframe linki | `js/content.js:27` |
| `socialMedia.email` | Resmi iletişim e-posta adresi | `js/content.js:37` |
| `socialMedia.phone` | İletişim telefon numarası | `js/content.js:38` |
| `hero.slogan` | Ana başlığın altındaki slogan (3 alternatiften biri seçilebilir) | `js/content.js:58` |
| `about.paragraphs` | [SZAL AÇILIMI] ve vizyon açıklamaları | `js/content.js:71` |
| `schedule.days` | 1. Gün ve 2. Gün oturum saatleri, salonları ve açıklamaları | `js/content.js:108` |
| `speakers.isAnnounced` | Konuşmacılar duyurulduğunda `true` yapın | `js/content.js:218` |
| `team.*.photo` | Ekip üyelerinin fotoğrafları (`assets/team/` klasörüne ekleyip dosya yolunu yazın) | `js/content.js:264` |
| `sponsors` | Sponsor logoları eklendiğinde diziye nesne ekleyin, yoksa bölüm otomatik gizlenir | `js/content.js:381` |

---

## 🌐 Yayına Alma (Deploy) Kılavuzu

Proje statik mimaride geliştirildiği için Vercel, Netlify veya GitHub Pages üzerinde sıfır yapılandırmayla saniyeler içinde yayına alınabilir:

### Netlify ile Yayına Alma
1. [netlify.com](https://www.netlify.com) adresine giriş yapın.
2. `szal-calistay` klasörünü "Drag & Drop" alanına sürükleyip bırakın (veya GitHub reponuzu bağlayın).
3. `netlify.toml` dosyası hazır olduğu için derleme komutuna gerek kalmadan siteniz anında yayına girecektir.

### Vercel ile Yayına Alma
1. [vercel.com](https://www.vercel.com) adresinde "Add New Project" diyerek GitHub reponuzu bağlayın.
2. `vercel.json` otomatik tanınır, "Deploy" butonuna basın.

### GitHub Pages ile Yayına Alma
1. Kodları GitHub deponuza yükleyin.
2. Repository Ayarları > **Pages** menüsüne gidin.
3. Kaynak olarak `main` dalını (ve `/root` dizinini) seçip kaydedin.

---

## 📁 Proje Dizin Yapısı

```
szal-calistay/
├── index.html              # Tam semantik HTML5, Open Graph, Twitter Cards, Schema.org
├── css/
│   └── style.css           # Tasarım sistemi, CSS değişkenleri, responsive gridler, animasyonlar
├── js/
│   ├── content.js          # MERKEZİ İÇERİK DOSYASI (Tüm metinler, ekip, program burada)
│   ├── app.js              # Dinamik render motoru, countdown, sayaçlar, tablar, accordion
│   └── icons.js            # Lucide esintili saf SVG ikon kütüphanesi
├── assets/
│   ├── favicon.svg         # Özel SVG Favicon
│   └── og-image.svg        # Sosyal medya paylaşım kartı (1200x630)
├── netlify.toml            # Netlify önbellek ve güvenlik başlıkları
├── vercel.json             # Vercel yapılandırması
└── README.md               # Detaylı çalıştırma ve düzenleme rehberi
```

© 2027 SZAL Çalıştayı. Tüm hakları saklıdır.
