"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Nasir", "Ajmair", "Kashif", "Haider", "Shahroze"];
let canNotAttend = "Kashif";
let newGuest = "Mubashir";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr) 
guestArr.map((list) => (console.log(`dear ${list}, you invited to dinner`)));
let guestBegin = "Nomi";
guestArr.unshift(guestBegin);
// console.log(guestArr)
let middleGuest = "Touqeer";
let middleIndex = guestArr.length / 4;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
guestArr.push("Hassan");
// console.log(guestArr)
guestArr.map((list) => (console.log(`DEAR,${list}, you are all invited for dinner`)));
