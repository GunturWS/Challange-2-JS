/*Ini adalah awal dari deklarasi fungsi getAngkaTerbesarKedua yang membutuhkan satu argumen, yaitu arr,
yang akan digunakan untuk menemukan angka terbesar kedua dalam sebuah array. */
function getAngkaTerbesarKedua(arr) {

  /*Ini adalah sebuah pernyataan kondisional (if statement) yang digunakan untuk melakukan pengecekan terhadap argumen arr
  dan bagian pertama dari kondisi. Ini digunakan untuk memeriksa apakah arr adalah sebuah array. serta memeriksa apakah panjang (jumlah elemen) dari arr kurang dari 2 */
  if (!Array.isArray(arr) || arr.length < 2) {

    /*Ini adalah blok kode yang akan dieksekusi jika salah satu atau kedua bagian dari kondisi di atas bernilai true.*/
    return "ERROR: Input harus berupa array dengan panjang minimal 2";
  }

  /*pada bagian ini kita menggunakan new set(arr) untuk membuat objek set dari array dengan menggunakan spread operator [...] 
  setelah mendapatkan array yang berisi elemen unik, kita menggunakan metode .sort() untuk mengurutkan dari yang terbesar menjadi terkecil.*/
  const sortedUnique = [...new Set(arr)].sort((a, b) => b - a);

  /*pada bagian soredunique variable yang berisi array diurutkan secara descending dan tidak memiliki elemen duplikat yaitu array input 'arr'.*/
  return sortedUnique[1];
}
//pada bagian const dataAngka. kita diapstikan telah membuat sebuah variable bernama 'dataAngka' yang berisi array angka-angka yang ditentukan
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

//pada console.log ini kita akan melakukan pencetakan ke konsol dan memanggil dataAngka agar mengeluarkan output "8"
console.log(getAngkaTerbesarKedua(dataAngka));
// EXPECTED OUTPUT : 8

//pada console.log ini kita akan melakukan pencetakan ke konsol dan memanggil 0 agar mengeluarkan output "ERROR: Input harus berupa array dengan panjang minimal 2"
console.log(getAngkaTerbesarKedua(0));
// EXPECTED OUTPUT: "ERROR: Input harus berupa array dengan panjang minimal 2"

//pada console.log ini kita akan melakukan pencetakan ke konsol dan memanggil 0 agar mengeluarkan output "ERROR: Input harus berupa array dengan panjang minimal 2"
console.log(getAngkaTerbesarKedua());
// EXPECTED OUTPUT: "ERROR: Input harus berupa array dengan panjang minimal 2"
