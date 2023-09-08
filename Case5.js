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
  dan pad Loop ini akan mengambil setiap elemen dalam array dan disimpan didalam variabel produk pada setiap iterasi.*/
  for (const produk of dataPenjualan) {
    /**
     * Pada setiap iterasi, variabel Keuntungan dihitung. Ini menghitung keuntungan dari penjualan produk tersebut dengan
     * mengambil selisih antara harga jual (hargaJual) dan harga beli (hargaBeli) kemudian mengalikannya dengan jumlah produk yang terjual
     * (totalTerjual). Ini menghasilkan keuntungan bersih dari penjualan produk tersebut.
     */

    const Keuntungan = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    //pada bagian Ini akan menjumlahkan keuntungan produk saat ini ke keuntungan total yang telah dihitung sebelumnya.
    totalKeuntungan += Keuntungan;

    /*selanjutnya pada bagian ini mengalihkan jumlah produk yang terjual (totalTerjual) dengan harga beli (hargaBeli) dan 
    menambahkannya ke modal total yang telah dihitung sebelumnya. */
    totalModal += produk.totalTerjual * produk.hargaBeli;

    /**
     * Ini adalah pernyataan if yang melakukan perbandingan. Ini memeriksa apakah produk.totalTerjual
     * lebih besar daripada produkTerlaris.totalTerjual
     */
    if (produk.totalTerjual > produkTerlaris.totalTerjual) {
      /**
       * Pada bagian ini, produkTerlaris akan diperbarui. Objek produkTerlaris akan diperbarui dengan informasi dari produk
       * yang saat ini sedang diiterasi, yaitu produk. Ini mencakup nama produk (namaProduk) dan jumlah produk yang terjual
       * (totalTerjual) dari produk yang saat ini lebih laris.
       */
      produkTerlaris = {
        namaProduk: produk.namaProduk,
        totalTerjual: produk.totalTerjual,
      };
    }

    /**
     * Ini adalah pernyataan if yang melakukan perbandingan. Ini memeriksa apakah produk.totalTerjual
     * lebih besar daripada produkTerlaris.totalTerjual
     */
    if (produk.totalTerjual > penulisTerlaris.totalTerjual) {
      /**
       * Pada bagian ini, penulisTerlaris akan diperbarui. Objek penulisTerlaris akan diperbarui dengan informasi dari penulis
       * yang saat ini sedang diiterasi, yaitu produk. Ini mencakup nama penulis (penulis) dan jumlah produk yang terjual
       * (totalTerjual) dari produk yang saat ini lebih laris.
       */
      penulisTerlaris = {
        penulis: produk.penulis,
        totalTerjual: produk.totalTerjual,
      };
    }
  }

  /*Pada bagian ini, presentase keuntungan dihitung. Ini mengambil nilai totalKeuntungan dan membaginya dengan totalModal untuk 
  menghitung presentase keuntungan. */
  const presentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";

  /**
   * mengembalikan sebuah objek. Objek ini berisi beberapa properti yang mewakili informasi terkait penjualan,
   * seperti total keuntungan, total modal, presentase keuntungan, penulis terlaris, dan produk buku terlaris.
   */
  return {
    /**
     * pada properti objek yang mengandung total keuntungan. toLocaleString() digunakan untuk memformat angka totalKeuntungan ke dalam
     * format mata uang dengan pemisah ribuan (dalam hal ini, tanda koma) dan menambahkan "Rp." di depannya.
     */
    "total keuntungan": `Rp. ${totalKeuntungan.toLocaleString()}`,
    /**
     * pada bagian properti lainnya yang mirip dengan sebelumnya, tetapi mengandung total modal.
     */
    "total modal": `Rp. ${totalModal.toLocaleString()}`,
    /**
     * pada bagian Properti ini berisi presentase keuntungan yang telah dihitung sebelumnya, dengan tanda persen (%) di akhirnya.
     */
    "presentase keuntungan": presentaseKeuntungan,
    /**
     * pada bagian Properti ini berisi nama penulis terlaris yang telah diidentifikasi dalam perhitungan sebelumnya.
     */
    "penulis terlaris": penulisTerlaris.penulis,
    /**
     * pada bagian Properti ini berisi nama produk terlaris yang telah diidentifikasi dalam perhitungan sebelumnya.
     */
    "produk buku terlaris": produkTerlaris.namaProduk,
  };
}

const dataPenjualanNovel = [
  {
    /**
     * Objek 1
     */
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    /**
     * Objek 2
     */
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    /**
     * Objek 3
     */
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    /**
     * Objek 4
     */
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
/** OUTPUT:
 * 'total keuntungan': 'Rp. 15,764,000',
  'total modal': 'Rp. 37,196,000',
  'presentase keuntungan': '42.38%',
  'penulis terlaris': 'Fiersa Besari',
  'produk buku terlaris': 'Garis Waktu'
 */
