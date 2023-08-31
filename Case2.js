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

console.log(checkTypeNumber(10)); // Output: Angka 4 adalah angka genap
console.log(checkTypeNumber(3)); // Output: Angka 7 adalah angka ganjil
console.log(checkTypeNumber("3")); // Output: Angka 7 adalah angka ganjil
console.log(checkTypeNumber({})); // Output: Angka 4 adalah angka genap
console.log(checkTypeNumber([])); // Output: Angka 7 adalah angka ganjil
console.log(checkTypeNumber()); // Output: Angka 7 adalah angka ganjil
