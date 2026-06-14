# Note Application

NoteFlow, öğrencilerin ders notlarını, günlük görevlerini ve akademik programlarını tek bir merkezden yönetebilmesi için tasarlanmış, **Samsung Notes** tasarım dilinden ve minimalist arayüzünden ilham alan modern bir web uygulamasıdır. 

Bu proje, modern frontend geliştirme pratikleri, bileşen bazlı mimari ve kullanıcı dostu arayüz tasarımı ilkeleri doğrultusunda geliştirilmiştir.
Projeyi incelemek için giriş yapmak yerine "Continue as Guest" butonu ile giriş yapabilirsiniz.
---

## Canlı Demo 
* **Canlı Uygulama Linki:** https://neon-tulumba-87493f.netlify.app/
---

## Fonksiyonel Gereksinimler

* **Dinamik Dashboard:** Tek bir ekrandan tüm süreci yönetmeyi sağlayan Takvim, To-Do List ve Sticky Notes entegrasyonu.
* **Akıllı Klasörleme Sistemi:** Notları derslere veya konulara göre kategorize etmek için hızlı erişilebilir tek seviyeli klasör yapısı.
* **UI/UX Tasarım Dili:** Geniş kart tasarımları, gözü yormayan yumuşak renk paletleri, geniş yuvarlatılmış köşeler (`rounded-3xl`) ve ferah whitespace kullanımı.
* **Tam CRUD Operasyonları:**
  * **Ekleme:** Dinamik modallar aracılığıyla yeni klasörler ve zengin içerikli notlar oluşturma.
  * **Listeleme:** Notların ve görevlerin Tailwind grid yapısıyla responsive olarak listelenmesi; kategorilere göre dinamik filtreleme.
  * **Güncelleme:** Oluşturulan notların içeriklerini, başlıklarını veya klasör bağlamlarını anlık olarak düzenleyebilme.
  * **Silme:** Güvenli silme mekanizmaları ile süresi geçmiş notları, görevleri veya klasörleri sistemden kaldırma.
* **Gelişmiş Responsive Yapı:** Mobil, tablet ve masaüstü ekran boyutları için tamamen optimize edilmiş pürüzsüz CSS Grid ve Flexbox mimarisi.
* **Sürükle-Bırak Altyapısı:** Notların klasörler arasında taşınabilmesini destekleyen `@dnd-kit` entegrasyon hazırlığı.

---

## Kullanılan Teknolojiler ve Kütüphaneler

* **Framework:** React 19 
* **Build Tool:** Vite 
* **Styling:** Tailwind CSS 
* **Language:** TypeScript 

---

## Proje Yapısı 

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
