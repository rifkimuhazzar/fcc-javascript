/* NOTE:
    - Nilai-nilainya akan ditambahkan setelah fungsi rekursif selesai.
    
   PENJELASAN KODE:    
    - setelah fungsi rekursif mencapai base case misal return 0, kemudian 0 akan ditambahkan dengan fungsi rekursif sebelumnya yaitu 10.
    
    - kemudian terus ditambahkan dengan fungsi rekursif sebelumnya satu per satu, contoh setelah 0+10 kemudian 10+20, 30+30, 60+40, lalu sampai difungsi permukaan/awalnya dengan return 100+50 ke called functionnya.
*/

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}
console.log(sum([10, 20, 30, 40, 50], 5));

// LATIHAN
function sum2(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return sum2(arr, n - 1) * arr[n - 1];
    }
}
console.log(sum2([1, 2, 3, 4, 5], 5));