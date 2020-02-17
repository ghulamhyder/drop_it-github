function myfunc(arr,func){
while(!func(arr[0])){
    arr.shift();
}
return arr;

}
console.log(myfunc([1,2,3,4],function(n){return n>=3}));