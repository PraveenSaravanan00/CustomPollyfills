const arr=[1,67,3,4,5,6,7]

//simulate the broswer comability
Array.prototype.forEach=null;

if(!Array.prototype.forEach){
//polyfills

Array.prototype.forEach=function(callback){
for(let val in this){
callback(this[val],val,this)
}
}

}

arr.forEach((ele,index,array)=>{
console.log(ele,index)
console.log("array",array)
})

const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  Array.prototype.Mymap = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
          res.push(callback(this[i], i, this));
    }
    return res;
  };

const output2 = arr2.Mymap((ele, index, arr) => {
  console.log(ele, index, arr);
  return ele<5?ele:"";
});
console.log("output", output2);


const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  Array.prototype.myFilter = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
          res.push(callback(this[i], i, this));
      }
    }
    return res;
  };


const output3 = arr3.myFilter((ele, index, arr) => {
  console.log(ele, index, arr);
  return ele<5?ele:"";
});
console.log("output", output3);
