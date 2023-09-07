/*Ini adalah deklarasi sebuah fungsi bernama checkTypeNumber yang menerima satu parameter bernama givenNumber. 
Fungsi ini akan digunakan untuk memeriksa tipe data dan kegenapan/keganjilan dari angka yang diberikan.*/
function checkTypeNumber(givenNumber) {
  /* Ini adalah pernyataan kondisional pertama yang memeriksa apakah parameter 'givenNumber' memiliki nilai atau apakah itu undefined.
  Jika parameter tidak diberikan (undefined), maka fungsi akan mengembalikan string "Dimana Parameternya".*/
  if (typeof givenNumber === "undefined") {
    return "Dimana Parameternya";
  }

  // Ini adalah pernyataan kondisional kedua yang memeriksa apakah tipe data dari givenNumber tidak sama dengan "number".
  // Jika tipe datanya bukan angka (number), maka fungsi akan mengembalikan string "parameter error: tipe data tidak ada".
  if (typeof givenNumber !== "number") {
    return "parameter " + " error: tipe data tidak ada";
  }

  // Ini adalah pernyataan kondisional ketiga yang memeriksa apakah angka yang diberikan (givenNumber) adalah angka genap.
  // Jika kondisi ini terpenuhi (angka tersebut habis dibagi 2), maka fungsi akan mengembalikan string "Angka " + givenNumber + " adalah angka genap".
  if (givenNumber % 2 === 0) {
    return "Angka " + givenNumber + " adalah angka genap";
    // Bagian ini berhubungan dengan pernyataan kondisional ketiga. Jika angka tidak genap (artinya, ganjil), maka bagian ini akan dieksekusi.
  } else {
    // Pernyataan return ini akan mengembalikan string yang menyatakan bahwa angka yang diberikan (givenNumber) adalah angka ganjil.
    return "Angka " + givenNumber + " adalah angka ganjil";
  }
}

// checkTypeNumber ini digunakan untuk memeriksa tipe data dan kegenapan/keganjilan angka yang diberikan ke dalamnya.
console.log(checkTypeNumber(2)); // Output: Angka 2 adalah angka genap
console.log(checkTypeNumber(9)); // Output: Angka 9 adalah angka ganjil
console.log(checkTypeNumber("3")); // parameter error: tipe data tidak ada
console.log(checkTypeNumber({})); // parametecr error: tipe data tidak ada
console.log(checkTypeNumber([])); // parameter error: tipe data tidak ada
console.log(checkTypeNumber()); // Output: dimana parameternya
