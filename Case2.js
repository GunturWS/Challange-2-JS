function checkTypeNumber(givenNumber) {
  if (typeof givenNumber === "undefined") {
    return "Dimana Parameternya";
  }

  if (typeof givenNumber !== "number") {
    return "parameter " + " error: tipe data tidak ada";
  }

  if (givenNumber % 2 === 0) {
    return "Angka " + givenNumber + " adalah angka genap";
  } else {
    return "Angka " + givenNumber + " adalah angka ganjil";
  }
}

// Contoh penggunaan

console.log(checkTypeNumber(2)); // Output: Angka 2 adalah angka genap
console.log(checkTypeNumber(9)); // Output: Angka 9 adalah angka ganjil
console.log(checkTypeNumber("3")); // parameter error: tipe data tidak ada
console.log(checkTypeNumber({})); // parameter error: tipe data tidak ada
console.log(checkTypeNumber([])); // parameter error: tipe data tidak ada
console.log(checkTypeNumber()); // Output: dimana parameternya
