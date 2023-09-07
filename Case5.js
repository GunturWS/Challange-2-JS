function getInfoPenjualan(dataPenjualan) {
  //totalKeuntungan digunakan untuk menyimpan total keuntungan dari semua penjualan. Awalnya, variabel ini diinisialisasi dengan nilai 0.
  let totalKeuntungan = 0;

  //totalModal digunakan untuk menyimpan total modal dari semua produk yang dijual. Awalnya, variabel ini diinisialisasi dengan nilai 0.
  let totalModal = 0;

  //penulisTerlaris digunakan untuk menyimpan informasi tentang penulis dengan jumlah produk terbanyak yang terjual. objek ini digunakan untuk 2 properti yaitu penulis dan total terjual
  let penulisTerlaris = { Penulis: "", totalTerjual: 0 };

  // produkTerlaris digunakan untuk menyimpan informasi tentang produk dengan jumlah terbanyak yang terjual. objek ini digunakan untuk 2 properti yaitu namaProduk dan  totalTerjual.
  let produkTerlaris = { NamaProduk: "", totalTerjual: 0 };

  /* yang digunakan untuk mengiterasi melalui setiap elemen dalam array dataPenjualan.
  Loop ini akan mengambil setiap elemen dalam array dan menyimpannya dalam variabel produk pada setiap iterasi.*/
  for (const produk of dataPenjualan) {
    const Keuntungan = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    totalKeuntungan += Keuntungan;
    totalModal += produk.totalTerjual * produk.hargaBeli;

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
    "penulis terlaris": penulisTerlaris.penulis,
    "produk buku terlaris": produkTerlaris.namaProduk,
  };
}

const dataPenjualanNovel = [
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
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

console.log(getInfoPenjualan(dataPenjualanNovel));
