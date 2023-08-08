let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
    // JIKA RETURN MAKA KODE BERHENTI
    // KEDUA KODE DI BAWAH BISA
    // return count + = count + 1;
    // return count += 1;

    // KODE DIBAWAH TIDAK REALTIME ATAU TUNGGU DIPANGGIL LAGI BARU NILAINYA BERUBAH
    // return count++;

  } else if (card >= 7 && card <= 9) {
    count;
  } else if (card == 10 || card == "J" || card == "K" || card == "Q" || card == "A") {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold"
  }

  return "Change Me";
  // Only change code above this line
}

console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc("K")); 
console.log(cc("A")); 
console.log(cc(10)); 
console.log(cc("10")); 