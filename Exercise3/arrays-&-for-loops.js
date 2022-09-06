var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "patates", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(fruitArray, mixedArray);

for(var fruit of fruitArray){
    if(fruit === "patates"){
        console.log("yiayias patates re oh my gawh")
    }
    else{
        console.log(fruit)
    }
    
}  