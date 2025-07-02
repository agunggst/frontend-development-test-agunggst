# Tes Frontend Developer - PSN

Project ini adalah aplikasi frontend berbasis **Next.js (App Router)** yang dikembangkan sebagai bagian dari technical test untuk posisi Frontend Developer. Aplikasi ini menampilkan daftar komentar dari [JSONPlaceholder API](https://jsonplaceholder.typicode.com/comments), dan menyediakan fitur login, pencarian, hapus, pagination, serta form tambah komentar.

---

## Demo

🌐 [Link Deploy](https://frontend-development-test-agunggst.vercel.app/)

---

## Tujuan

- ✅ Menyediakan halaman **login** dengan validasi
- ✅ Menampilkan **dashboard** berisi daftar komentar dengan pagination & search
- ✅ Menambahkan komentar melalui halaman **/dashboard/create-comment**
- ✅ Menghapus komentar dari daftar
- ✅ UI responsive untuk **desktop dan mobile**
- ✅ Menggunakan PrimeReact (table & pagination) + Tailwind untuk tampilan profesional
- ✅ State management dengan **Zustand**

---

## Teknologi yang Digunakan

| Layer         | Teknologi                         |
|---------------|-----------------------------------|
| Framework     | [Next.js 15 (App Router)](https://nextjs.org/) |
| UI Komponen   | [PrimeReact](https://primereact.org/) |
| Styling       | [Tailwind CSS](https://tailwindcss.com/) |
| State Global  | [Zustand](https://zustand.pmnd.rs/) |
| HTTP Client   | [Axios](https://axios-http.com/) |
| Icon          | [React Icons](https://react-icons.github.io/react-icons/) |
| Sumber Data   | [JSONPlaceholder](https://jsonplaceholder.typicode.com/comments) |

---

## Cara Menjalankan Secara Lokal

### 1. Clone repository

```bash
git clone https://github.com/agunggst/frontend-development-test-agunggst.git
cd frontend-development-test-agunggst
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Buka browser dan akses `http://localhost:3000`.

---

## 📌 Catatan

* Login **tidak terhubung ke backend**, hanya simulasi validasi lokal.
* Data komentar **tidak tersimpan secara permanen**, karena JSONPlaceholder bersifat read-only.
* Aplikasi ini dibuat dengan struktur dan gaya kode yang mudah dikembangkan lebih lanjut.

---