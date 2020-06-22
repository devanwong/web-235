   /*
============================================
; Title:  roland-assignment-4-1.js
; Author: Jonathan Roland
; Date:   18 June 2020
; Modified By: Devan Wong
; Description: A program utilizing an array with at least two errors.
;===========================================
*/

//changed the === to 1 =
//changed the "()" to "[]"
var testArray = ["this","is","a","test","array"];
var output = "";
//created a let variable and changed it to 0
for(let i = 0; i < testArray.length; i++){
    output += testArray[i] + " ";
}
//pout "this is a test array"
console.log(output);
