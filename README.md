# Note Application

NoteFlow, öğrencilerin ders notlarını, günlük görevlerini ve akademik programlarını tek bir merkezden yönetebilmesi için tasarlanmış, **Samsung Notes** tasarım dilinden ve minimalist arayüzünden ilham alan modern bir web uygulamasıdır. 

Bu proje, modern frontend geliştirme pratikleri, bileşen bazlı mimari ve kullanıcı dostu arayüz tasarımı ilkeleri doğrultusunda geliştirilmiştir.

---

## Canlı Demo 
* **Canlı Uygulama Linki:** https://neon-tulumba-87493f.netlify.app/
---

## Fonksiyonel Gereksinimler

* **Dinamik Dashboard:** Tek bir ekrandan tüm süreci yönetmeyi sağlayan Takvim, To-Do List ve Sticky Notes (Yapışkan Notlar) entegrasyonu.
* **Akıllı Klasörleme Sistemi:** Notları karmaşadan uzak tutmak, derslere veya konulara göre kategorize etmek için hızlı erişilebilir tek seviyeli klasör yapısı.
* **Samsung UI/UX Tasarım Dili:** Geniş kart tasarımları, gözü yormayan yumuşak renk paletleri, geniş yuvarlatılmış köşeler (`rounded-3xl`) ve ferah whitespace kullanımı.
* **Tam CRUD Operasyonları:**
  * **Ekleme (Create):** Dinamik modallar aracılığıyla yeni klasörler ve zengin içerikli notlar oluşturma.
  * **Listeleme (Read):** Notların ve görevlerin Tailwind grid yapısıyla responsive olarak listelenmesi; kategorilere göre dinamik filtreleme.
  * **Güncelleme (Update):** Oluşturulan notların içeriklerini, başlıklarını veya klasör bağlamlarını anlık olarak düzenleyebilme.
  * **Silme (Delete):** Güvenli silme mekanizmaları ile süresi geçmiş notları, görevleri veya klasörleri sistemden kaldırma.
* **Gelişmiş Responsive Yapı:** Mobil, tablet ve masaüstü ekran boyutları için tamamen optimize edilmiş pürüzsüz CSS Grid ve Flexbox mimarisi.
* **Sürükle-Bırak Altyapısı:** Notların klasörler arasında taşınabilmesini destekleyen `@dnd-kit` entegrasyon hazırlığı.

---

## Kullanılan Teknolojiler ve Kütüphaneler

* **Framework:** React 19 (En güncel kararlı sürüm)
* **Build Tool:** Vite (Hızlı ve optimize geliştirme ortamı)
* **Styling:** Tailwind CSS v4 (Yeni nesil utility-first CSS frameworkü)
* **Icons:** Lucide React (Minimalist ve modern ikon seti)
* **Language:** TypeScript (Tip güvenliği ve kurumsal kod kalitesi)

---

## Proje Yapısı 

Yönergede belirtilen mimari standartlara uygun olarak kurgulanan klasör yapısı şu şekildedir:

```text
src/
├── assets/         # Görseller, logolar ve statik kaynaklar
├── components/     # UI Bileşenleri (Calendar, FolderCard, NoteEditor, Sidebar, TodoList vb.)
├── context/        # Global State yönetimi ve Context API katmanı
├── data/           # Mock veri setleri ve başlangıç konfigürasyonları
├── hooks/          # Özel (Custom) React hook tanımlamaları
├── Interfaces/     # TypeScript arayüz tanımlamaları (Klasör, Not ve Görev modelleri)
├── pages/          # Sayfa bileşenleri ve ana görünümler (Dashboard)
├── App.css         # Uygulamaya özel stil özelleştirmeleri
├── App.tsx         # Ana uygulama bileşeni ve layout kurgusu
├── index.css       # Tailwind v4 importları ve global temel stiller
└── main.tsx        # React giriş noktası
