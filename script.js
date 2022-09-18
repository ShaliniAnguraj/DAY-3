//1.JSON iterate over all for loops (for, for in, for of, forEach):
var arr=[{"name":"shalini",
          "age" :"23",
          "gender": "female",
          "phoneno":"9883478377"
          },
          {
          "name"  :"anu",
          "age"   :"24",
          "gender":"female",
          "phoneno" : "9876435733"
          }];
 //for loop         
for(var i=0;i<arr.length;i++){
console.log(arr[i]);
}
//for in loop
for( var n in arr){
    console.log(arr[n].name); 
    //console.log(arr[n].age)
   }
