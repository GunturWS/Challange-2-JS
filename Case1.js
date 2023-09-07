function ChangeWord(selectedText, changedText, text) {
  // kondisi pertama dalam fungsi. Ini memeriksa apakah selectedText kosong.
  // Jika ya, fungsi akan memberikan pesan error seperti  "selectedText tidak boleh kosong".
  if (selectedText === "") {
    return "selectedText, tidak boleh kosong";
  }

  //kondisi kedua dalam fungsi. Ini menggunakan metode indexOf untuk memeriksa apakah selectedText ada dalam text.
  //Jika selectedText tidak ditemukan dalam text, fungsi akan memberikan pesan error seperti "selected tidak ditemukan dalam teks".
  if (text.indexOf(selectedText) === -1) {
    return "selected tidak ditemukan dalam teks";
  }

  //metode split berfungsi memecah text menjadi bagian-bagian berdasarkan selectedText
  //metode join berfungsi menggabungkan kembali bagian-bagian tersebut dengan changedText sebagai pengganti setiap kemunculan selectedText
  const newText = text.split(selectedText).join(changedText);
  return newText;
}

//Di sini, kita mendefinisikan variabel kalimat1 yang berisi string dengan kalimat pertama.
const kalimat1 = "jalan-jalan kerumah tindus adakah kardus";
//Variabel selectedText1 digunakan untuk menyimpan teks yang akan digantikan dalam kalimat pertama.
const selectedText1 = "kardus";
//Variabel changedText1 digunakan untuk menyimpan teks baru yang akan menggantikan teks yang ada dalam selectedText1.
const changedText1 = "seratus";

//Mirip dengan kalimat1, di sini kita mendefinisikan variabel kalimat2 yang berisi string dengan kalimat kedua.
const kalimat2 = "cicak cicak di dinding diam diam merayap";
//Variabel selectedText2 digunakan untuk menyimpan teks yang akan digantikan dalam kalimat kedua.
const selectedText2 = "dinding";
//Variabel changedText2 digunakan untuk menyimpan teks baru yang akan menggantikan teks yang ada dalam selectedText2.
const changedText2 = "pohon";

console.log(ChangeWord("kardus", "seratus", kalimat1)); //Output: "cicak cicak di pohon diam diam merayap"
console.log(ChangeWord("dinding", "pohon", kalimat2)); //Output: "cicak cicak di pohon diam diam merayap"
