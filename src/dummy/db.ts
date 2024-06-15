interface History {
  penanya: string;
  date: string;
  uuid: string;
}

const histories = [
  {
    penanya: "Pak Boni",
    date: "2024-06-15T11:50:05.000Z",
    uuid: "123e4567-e89b-12d3-a456-426614174000",
  },
  {
    penanya: "Ibu Siti",
    date: "2024-06-15T11:50:05.000Z",
    uuid: "123e4567-e89b-12d3-a456-426614174001",
  },
  {
    penanya: "Pak Andi",
    date: "2024-06-15T11:50:05.000Z",
    uuid: "123e4567-e89b-12d3-a456-426614174002",
  },
  {
    penanya: "Ibu Lina",
    date: "2024-06-15T11:50:05.000Z",
    uuid: "123e4567-e89b-12d3-a456-426614174003",
  },
  {
    penanya: "Pak Budi",
    date: "2024-06-15T11:50:05.000Z",
    uuid: "123e4567-e89b-12d3-a456-426614174004",
  },
];

const chat_history_example = [
  {
    uuid: "",
    content:
      "Halo! Terima kasih telah menghubungi layanan pelanggan. Bisa Anda jelaskan lebih lanjut mengenai masalah yang Anda alami dengan pesanan Anda? Saya siap membantu Anda.",
    role: "user",
    createdAt: "2024-06-15T11:50:05.000Z",
    id: "A1B2C3D",
    functions: [],
  },
  {
    uuid: "",
    id: "U7J4K9L",
    role: "assistant",
    content: "Halo, saya ada masalah dengan pesanan saya.",
    createdAt: "2024-06-15T11:50:00.000Z",
    functions: [
      {
        type: "sentiment",
        result: "concerned",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Mohon maaf atas ketidaknyamanannya. Bisa Anda berikan nomor pesanan atau detail lain yang terkait agar saya dapat mengecek status pengiriman pesanan Anda?",
    role: "user",
    createdAt: "2024-06-15T11:51:05.000Z",
    id: "J4K5L6M",
    functions: [],
  },
  {
    uuid: "",
    id: "E8F9G0H",
    role: "assistant",
    content:
      "Pesanan saya belum tiba, padahal sudah lewat 3 hari dari estimasi pengiriman.",
    createdAt: "2024-06-15T11:51:00.000Z",
    functions: [
      {
        type: "sentiment",
        result: "frustrated",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Terima kasih atas informasinya. Saya akan memeriksa status pesanan Anda. Mohon tunggu sebentar.",
    role: "user",
    createdAt: "2024-06-15T11:52:05.000Z",
    id: "R1S2T3U",
    functions: [],
  },
  {
    uuid: "",
    id: "N7O8P9Q",
    role: "assistant",
    content: "Nomor pesanan saya adalah 123456789.",
    createdAt: "2024-06-15T11:52:00.000Z",
    functions: [
      {
        type: "translate",
        result: "My order number is 123456789.",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Setelah saya periksa, pesanan Anda sedang dalam proses pengiriman dan diperkirakan akan tiba dalam 1-2 hari ke depan. Terima kasih atas kesabarannya.",
    role: "user",
    createdAt: "2024-06-15T11:53:00.000Z",
    id: "V4W5X6Y",
    functions: [],
  },
  {
    uuid: "",
    id: "Z7X8Y9W",
    role: "assistant",
    content:
      "Baik, terima kasih banyak atas bantuannya. Apakah saya bisa melacak pesanan saya?",
    createdAt: "2024-06-15T11:54:00.000Z",
    functions: [
      {
        type: "sentiment",
        result: "neutral",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Tentu, Anda bisa melacak pesanan Anda menggunakan nomor resi yang telah dikirimkan ke email Anda. Apakah Anda sudah menerima email konfirmasi pengiriman?",
    role: "user",
    createdAt: "2024-06-15T11:54:05.000Z",
    id: "Y1Z2A3B",
    functions: [],
  },
  {
    uuid: "",
    id: "P1Q2R3S",
    role: "assistant",
    content: "Ya, saya sudah menerima email tersebut.",
    createdAt: "2024-06-15T11:55:00.000Z",
    functions: [
      {
        type: "translate",
        result: "Yes, I have received the email.",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Bagus, di email tersebut terdapat nomor resi yang bisa Anda gunakan untuk melacak status pengiriman melalui situs jasa pengiriman yang kami gunakan. Jika ada masalah saat melacak, beritahu saya.",
    role: "user",
    createdAt: "2024-06-15T11:55:05.000Z",
    id: "T4U5V6W",
    functions: [],
  },
  {
    uuid: "",
    id: "X7Y8Z9A",
    role: "assistant",
    content:
      "Baik, terima kasih. Saya akan coba melacaknya sekarang. Satu lagi, apakah ada kemungkinan pesanan saya hilang?",
    createdAt: "2024-06-15T11:56:00.000Z",
    functions: [
      {
        type: "sentiment",
        result: "concerned",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Kemungkinan pesanan hilang sangat kecil, namun jika pesanan Anda tidak tiba dalam 2 hari ke depan, silakan hubungi kami kembali dan kami akan melakukan penyelidikan lebih lanjut dengan pihak jasa pengiriman.",
    role: "user",
    createdAt: "2024-06-15T11:56:05.000Z",
    id: "B1C2D3E",
    functions: [],
  },
  {
    uuid: "",
    id: "F1G2H3I",
    role: "assistant",
    content: "Baik, saya mengerti. Terima kasih atas informasinya.",
    createdAt: "2024-06-15T11:57:00.000Z",
    functions: [
      {
        type: "sentiment",
        result: "relieved",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Sama-sama! Jika ada pertanyaan lain atau membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami. Selamat beraktivitas!",
    role: "user",
    createdAt: "2024-06-15T11:57:05.000Z",
    id: "J1K2L3M",
    functions: [],
  },
  {
    uuid: "",
    id: "N7O8P9Q2",
    role: "assistant",
    content:
      "Saya ada pertanyaan lagi. Apakah produk yang saya pesan bisa dikembalikan jika tidak sesuai?",
    createdAt: "2024-06-15T11:58:00.000Z",
    functions: [
      {
        type: "recommend",
        result: "Yes, the product can be returned within 7 days.",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Tentu, Anda bisa mengembalikan produk dalam waktu 7 hari setelah diterima jika tidak sesuai. Pastikan produk dalam kondisi baik dan kemasan asli. Anda bisa menghubungi kami untuk panduan lebih lanjut.",
    role: "user",
    createdAt: "2024-06-15T11:58:05.000Z",
    id: "R1S2T3U2",
    functions: [],
  },
  {
    uuid: "",
    id: "U1V2W3X",
    role: "assistant",
    content:
      "Terima kasih. Saya akan menghubungi lagi jika ada masalah. Selamat siang.",
    createdAt: "2024-06-15T11:59:00.000Z",
    functions: [
      {
        type: "sentiment",
        result: "satisfied",
      },
    ],
  },
  {
    uuid: "",
    content:
      "Selamat siang! Terima kasih telah menghubungi layanan pelanggan. Semoga hari Anda menyenangkan.",
    role: "user",
    createdAt: "2024-06-15T11:59:05.000Z",
    id: "Y1Z2A3B2",
    functions: [],
  },
];

export { histories, chat_history_example };
export type { History };
