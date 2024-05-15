function typeScript2<T extends any[],U extends object>(item1:T,item2:U){
   let arr = [item1,item2]
   console.log(arr.reverse());
}
typeScript2([1,2,3],{name :"duy anh"})