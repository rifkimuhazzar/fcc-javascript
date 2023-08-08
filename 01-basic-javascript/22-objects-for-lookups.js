/* NOTE : - nilainnya harus diambil dahulu baru direturn.
          - jika langsung digabung dengan return maka nilainya tidak realtime, jadi saat called function nilainya tidak berubah kemudian setelah dicalled function baru nilainya direturn ke function.
          - tapi sepertinnya ini hanya untuk angka karena contoh di bawah menggunakan object bisa langsung digabung dengan return.
*/

// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    let lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    }
    result = lookup[val]; 
    // Only change code above this line
    return result
    // return result = lookup[val]; // seperti ini juga bisa
}
  
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("alpha"));