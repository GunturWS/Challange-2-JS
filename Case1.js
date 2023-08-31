
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

//
const kalimat1 = "jalan-jalan kerumah tindus adakah kardus";
const selectedText1 = "kardus";
const changedText1 = "seratus";

const kalimat2 = "cicak cicak di dinding diam diam merayap";
const selectedText2 = "dinding";
const changedText2 = "pohon";

console.log (ChangeWord("kardus", "seratus", kalimat1));
console.log(ChangeWord("dinding", "pohon", kalimat2));