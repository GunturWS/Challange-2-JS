/*Ini adalah deklarasi sebuah fungsi bernama hitungTotalPenjualan yang menerima satu parameter bernama dataPenjualan.
Parameter ini adalah sebuah array yang berisi data penjualan. */
function hitungTotalPenjualan(dataPenjualan) {
  // Variabel totalPenjualan dideklarasikan dan diinisialisasi dengan nilai 0. Variabel ini akan digunakan untuk mengakumulasi total penjualan.
  let totalPenjualan = 0;

  // for digunakan untuk iterasi melalui setiap elemen dalam array 'dataPenjualan'.
  // Variable i dideklarasikan dan diinisialisasi dengan nilai 0 sebagai indeks awal.
  // Loop akan terus berjalan selama i < datapenjualan.length dan Setiap kali loop selesai satu iterasi, nilai i akan bertambah satu.
  for (let i = 0; i < dataPenjualan.length; i++) {
    totalPenjualan += dataPenjualan[i].totalTerjual;
  }

  /*Setelah loop selesai berjalan dan total penjualan telah dihitung, 
  fungsi ini akan mengembalikan nilai dari totalPenjualan yang merupakan total penjualan dari seluruh data penjualan yang ada dalam array. */
  return totalPenjualan;
}

/*deklarasi sebuah array yang bernama dataPenjualanGuntur. 
Array ini berisi beberapa objek yang mewakili data penjualan produk-produk yang terkait dengan penjual yang bernama "Guntur". */
const dataPenjualanGuntur = [
  {
    //Objek 1
    namaProduct: "Nike Blazer Low '77 Vintage",
    hargaSatuan: 1299000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 20,
  },
  {
    //Objek 2
    namaProduct: "New Balance 2002R Men's Sneaker Shoes - Grey",
    hargaSatuan: 2299000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 30,
  },
  {
    //Objek 3
    namaProduct: "YEEZY BOOST 350 V2 - Black",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 5354650,
    totalTerjual: 40,
  },
  {
    //Objek 4
    namaProduct: "Nike Air Force 1 '07 - white",
    hargaSatuan: 1549000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 50,
  },
];

// Ketika Function tersebut dipanggil dengan variable dataPenjualanGuntur
console.log(hitungTotalPenjualan(dataPenjualanGuntur)); // Output : 140
