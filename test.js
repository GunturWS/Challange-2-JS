const dataPenjualanNovel = [
  // Data penjualan dengan perbaikan
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 13, // Ubah totalTerjual agar lebih kecil dari sisa stok
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002942", // Ubah ID agar unik
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkTerlaris = { namaProduk: "", totalTerjual: 0 };
  let penulisTerlaris = { penulis: "", totalTerjual: 0 };

  for (const produk of dataPenjualan) {
    const keuntungan = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    totalKeuntungan += keuntungan;
    totalModal += produk.hargaBeli * produk.totalTerjual;

    if (produk.totalTerjual > produkTerlaris.totalTerjual) {
      produkTerlaris = {
        namaProduk: produk.namaProduk,
        totalTerjual: produk.totalTerjual,
      };
    }

    if (produk.totalTerjual > penulisTerlaris.totalTerjual) {
      penulisTerlaris = {
        penulis: produk.penulis,
        totalTerjual: produk.totalTerjual,
      };
    }
  }

  const presentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";

  return {
    "total keuntungan": `Rp. ${totalKeuntungan.toLocaleString()}`,
    "total modal": `Rp. ${totalModal.toLocaleString()}`,
    "presentase keuntungan": presentaseKeuntungan,
    "produk buku terlaris": produkTerlaris.namaProduk,
    "penulis terlaris": penulisTerlaris.penulis,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
