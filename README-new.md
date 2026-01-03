# 💒 Undangan Pernikahan Digital - Sari & Budi

Website undangan pernikahan modern & elegan yang dibuat dengan React (Vite) + Tailwind CSS.

## ✨ Fitur

- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern & Elegan** - Desain minimalis dengan tema hijau & emas
- ⏰ **Real-time Countdown** - Hitung mundur ke hari pernikahan
- 📝 **RSVP Form** - Form konfirmasi kehadiran tamu
- 🖼️ **Gallery** - Galeri foto dengan lightbox
- 🎵 **Background Music** - Musik latar dengan kontrol play/pause
- 💳 **Digital Gift** - Amplop digital dengan copy-to-clipboard
- ⚡ **Smooth Animations** - Animasi halus (fade/slide)

## 🏗️ Struktur Proyek

```
undangan-pernikahan/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing page dengan nama mempelai
│   │   ├── Couple.jsx        # Profil mempelai pria & wanita
│   │   ├── Event.jsx         # Detail acara akad & resepsi
│   │   ├── Countdown.jsx     # Countdown timer real-time
│   │   ├── Gallery.jsx       # Galeri foto dengan lightbox
│   │   ├── RSVP.jsx          # Form konfirmasi kehadiran
│   │   ├── Gift.jsx          # Informasi hadiah & rekening
│   │   ├── Footer.jsx        # Footer dengan info tambahan
│   │   └── MusicPlayer.jsx   # Pemutar musik latar
│   ├── App.jsx               # Komponen utama
│   ├── main.jsx              # Entry point aplikasi
│   └── index.css             # Global styles dengan Tailwind
├── public/
├── index.html                # HTML template
├── tailwind.config.js        # Konfigurasi Tailwind CSS
├── postcss.config.js         # Konfigurasi PostCSS
├── vite.config.js            # Konfigurasi Vite
└── package.json
```

## 🎨 Tema & Desain

- **Tema**: Modern/Minimalis
- **Warna Utama**: Sage Green & Gold
- **Font**:
  - Playfair Display (serif, untuk heading)
  - Dancing Script (script, untuk nama)
  - Inter (sans-serif, untuk body text)

## 📱 Komponen Halaman

### 1. Hero Section

- Nama mempelai dengan typography elegan
- Tanggal pernikahan
- Tombol "Buka Undangan" dengan animasi
- Background dengan elemen dekoratif

### 2. Couple Section

- Profil mempelai dengan foto placeholder
- Informasi keluarga
- Quote/bio singkat masing-masing
- Ayat Al-Quran tentang pernikahan

### 3. Event Section

- Detail acad nikah & resepsi
- Lokasi dengan integrasi Google Maps
- Catatan penting untuk tamu
- Design card yang menarik

### 4. Countdown Section

- Real-time countdown dengan format Hari:Jam:Menit:Detik
- Background gradient yang elegan
- Call-to-action ke RSVP

### 5. Gallery Section

- Grid layout responsif
- Lightbox untuk view detail foto
- Kategori Pre-wedding & Engagement
- Placeholder images dengan proper ratio

### 6. RSVP Section

- Form lengkap (nama, email, phone, kehadiran)
- Validasi input
- Success state dengan animasi
- Radio button custom untuk pilihan kehadiran

### 7. Gift Section

- Digital envelope concept
- Multiple payment options (Bank & E-Wallet)
- Copy-to-clipboard functionality
- Islamic prayer/blessing

### 8. Footer

- Social media links
- Wedding hashtag
- Quick navigation
- Copyright & Quranic verse

### 9. Music Player

- Floating player dengan toggle play/pause
- Volume control (preset 30%)
- Elegant design dengan backdrop blur
- Auto-hide initially, shows after 2 seconds

## 🚀 Cara Menjalankan

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Jalankan development server**

   ```bash
   npm run dev
   ```

3. **Buka browser**

   ```
   http://localhost:5173
   ```

4. **Build untuk production**
   ```bash
   npm run build
   ```

## 🎯 Tailwind Utility Classes

### Custom Colors

- `sage-50` hingga `sage-900` - Warna hijau sage
- `gold-50` hingga `gold-900` - Warna emas

### Custom Components

- `.btn-primary` - Tombol utama dengan gradient emas
- `.btn-secondary` - Tombol sekunder dengan border sage
- `.section-container` - Container responsif untuk sections
- `.heading-primary` - Style heading utama
- `.heading-secondary` - Style heading sekunder
- `.text-elegant` - Style text dengan warna sage

### Custom Animations

- `animate-fade-in` - Fade in animation
- `animate-slide-up` - Slide up animation
- `animate-float` - Floating animation untuk elemen dekoratif

## 📞 Customization

Untuk mengcustomize website ini:

1. **Ganti data mempelai** di komponen `Hero.jsx` dan `Couple.jsx`
2. **Update tanggal & lokasi** di `Event.jsx` dan `Countdown.jsx`
3. **Ganti foto** di `Gallery.jsx` (gunakan URL foto real)
4. **Update rekening** di `Gift.jsx`
5. **Ganti musik** di `MusicPlayer.jsx` (gunakan file audio real)
6. **Sesuaikan warna** di `tailwind.config.js`

## 🔧 Dependencies

- **React 19.2.0** - UI Framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## 📝 Notes

- Website ini menggunakan **placeholder images** dari via.placeholder.com
- Musik menggunakan **sample audio**, ganti dengan file musik wedding yang sebenarnya
- Form RSVP hanya simulasi, integrate dengan backend untuk production
- Google Maps link menggunakan search API, bisa diganti dengan embedded map

## 🌟 Developed by

Website undangan pernikahan ini dibuat dengan penuh cinta menggunakan teknologi modern untuk memberikan pengalaman terbaik bagi tamu undangan.

---

**Selamat menempuh hidup baru! 💕**
