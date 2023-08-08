/* NOTE:
    - Nilai-nilainya akan ditambahkan setelah fungsi rekursif selesai, itulah sebab jika menggunakan push angkanya tidak menurun, jadi gunakan unshift untuk hasil sebaliknya.
    
   PENJELASAN KODE:    
    - setelah fungsi rekursif mencapai base case yaitu return [], kemudian akan dibuatkan array kosong pada variable myArr.

    - kemudian terus menjalakan rekursif sebelumnya satu per satu sambil memasukkan nilainya ke dalam array tadi hingga mencapai fungsi permukaan/awalnya.
*/

// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const myArr = countdown(n - 1);
      myArr.unshift(n);
      return myArr;
    }
}
// Only change code above this line
  
console.log(countdown(5));
console.log(countdown(0));
console.log(countdown(-5));