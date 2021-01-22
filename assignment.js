
function kilometerToMete(miles){
    var meters =miles*1000;
    return meters;
}
var fiveKilo = kilometerToMete(5);
console.log(fiveKilo);

// 2 no question

function budgetCalculator() {
    var watch = 5*50;
    var mobile =6*100;
    var leptop =2*500;
    total =watch + mobile+ leptop;
    return total;
  }
  var result = budgetCalculator(2);
  console.log(result);




// thid question 

function hotelCost(days){
var cost = 0;
if (days<=10){
    cost = days *100;
}
else if(days <=20){
    var firstCost = 10*100;
    var remaining = days - 10;
    var secondCost= days * 80;
    cost = firstCost + secondCost;
}
else{
    var firstCost =10*100;
    var secondCost = 10*80
    var remaining = days - 20;
    var thirdCost = remaining *50;
    cost = firstCost + secondCost + thirdCost;
}
return cost;
}
var totalCost = hotelCost(20);
console.log(totalCost);



// // 4th question
var megaFriend = ["abubakerAdiyan", "ayat", "nurahamod", "arafat"];
var count = 0;
var longest;
for (var i=0; i<megaFriend.length; i++){
    if(megaFriend[i].length>count){
        var count=megaFriend[i].length;
        longest = megaFriend[i];
    }
}
console.log(longest);
