interface History {
  penanya: string;
  pertanyaan: string;
  uuid: string;
}

const histories = [
  {
    penanya: "Pak Boni",
    pertanyaan: "Bagaimana cara melakukan refund?",
    uuid: "123e4567-e89b-12d3-a456-426614174000",
  },
  {
    penanya: "Ibu Siti",
    pertanyaan: "Apa saja persyaratan untuk mengajukan klaim garansi?",
    uuid: "123e4567-e89b-12d3-a456-426614174001",
  },
  {
    penanya: "Pak Andi",
    pertanyaan: "Apakah produk ini tersedia dalam ukuran yang lebih besar?",
    uuid: "123e4567-e89b-12d3-a456-426614174002",
  },
  {
    penanya: "Ibu Lina",
    pertanyaan: "Berapa lama waktu pengiriman ke luar kota?",
    uuid: "123e4567-e89b-12d3-a456-426614174003",
  },
  {
    penanya: "Pak Budi",
    pertanyaan:
      "Bisakah saya mendapatkan diskon jika membeli dalam jumlah banyak?",
    uuid: "123e4567-e89b-12d3-a456-426614174004",
  },
  {
    penanya: "Ibu Rina",
    pertanyaan: "Apakah ada layanan purna jual untuk produk ini?",
    uuid: "123e4567-e89b-12d3-a456-426614174005",
  },
  {
    penanya: "Pak Tono",
    pertanyaan: "Bagaimana cara mendaftar untuk menjadi anggota?",
    uuid: "123e4567-e89b-12d3-a456-426614174006",
  },
  {
    penanya: "Ibu Maya",
    pertanyaan:
      "Bisakah saya mengganti alamat pengiriman setelah melakukan pemesanan?",
    uuid: "123e4567-e89b-12d3-a456-426614174007",
  },
  {
    penanya: "Pak Deni",
    pertanyaan: "Apakah ada panduan pengguna untuk produk ini?",
    uuid: "123e4567-e89b-12d3-a456-426614174008",
  },
  {
    penanya: "Ibu Nia",
    pertanyaan: "Apakah produk ini tersedia dalam warna lain?",
    uuid: "123e4567-e89b-12d3-a456-426614174009",
  },
];

export { histories };
export type { History };
