/*console.log("Hello, this code is from my html file");*/
/*
multi
line
commets
*/
/* var can be changed but const cannot*/
/*const name="Shambhavi";
const year=2021;
const okay=true;
console.log(name);
console.log(year);
console.log(okay);*/
/*var one=1;
var two=2.2;
console.log(one);
console.log(two);*/
/*var num = [1,2,3,4,100,"Palak"];
console.log(num[1]);*/
/*var obj = {
  //key : value pairs
  name : "Shambhavi",
  id : 20,
  test : ["fail","pass","fail"],
  "full name": "Shambhavi Palak",
  exam : {
    mids :"pass",
    ends : "pass"
  }
}
console.log(obj.exam.mids);
console.log(obj.test[2]);
console.log(obj["full name"]);*/
//conditional statements
//if else
//switch

//IF ELSE

/*if(condition) {
  code1
}
else {
  code2
}*/
/*var myNum1=20;
var myNum2=50;
if (myNum1>myNum2) {
  console.log("1st num is greater");
}
else {
  console.log("2nd num is greater");
}*/
/*if(condition) {
  stat1
}
else if(condition2) {
  stat2
}
else if.....
else{
  last stat
}*/
/*var a=0;
if(a>0) {
  console.log("Positive");
}
else if(a>0) {
  console.log("Negative");
}
else {
  console.log("It is zero");
}*/
/*var a=0;
if(a>0) {
  if(a>0) {
  console.log("+ve");
}
else {
  console.log("zero");
}
}
else {
  console.log("-ve");
}*/

//SwITCH

/*var num1=20;
var num2=50;
switch (num1>num2) {
  case true:
    console.log("Hey this is from 1st case");
    break;

  case false:
  console.log("Hey this is from 2nd case");
  break;

  default:
  console.log("Nthng");

}*/

//OPERATORS
//arithmetic, logical,assignment,comparision

//arithmetic -> + - / * %
/*4/2 -> 2
4%2 ->0

a=a+5
a+=5*/
/*var a="2";
var b=2;
//==(values)
//===(values and datatype)
if(a===b) {
  console.log("They are both exactly same");
}
else {
  console.log("Not same");
}*/

//LOGICAL OPERATORS
//&&
/* var a=0;
if (a!=0&&a>0) {
  console.log("a is +ve");
}
else {
  console.log("nthng");
}*/
/*var a=1;
if (a===0||a>0) {
  console.log("a is +ve");
}
else {
  console.log("nthng");
}*/
/*var a=1;//!+ve=0, !0=+ve
if (!a) {
  console.log("a is +ve");
}
else {
  console.log("nthng");
}*/

//TERNARY OPERATOR
/*condition ? statement true : statement false*/
/*const mymarks=20;
mymarks>30 ? console.log("passed") : console.log("fail");*/
/*var a=0;
var b=0;
var c=0;
b=a++;//postfix
c=++a;//prefix
console.log({a,b,c});*/


//LOOPS
//FOR LOOP,WHILE LOOP,DOWHILE LOOP

//for (initialisation;condition checking;increment/decrement){
//code
//}

/*for(var num=0;num<=100;num++) {
  if (num%5===0)
console.log(num);
}*/
/*var num=0;
while (num<=100) {
  if(num%5===0) {
    console.log(num);
  }
  num++;
}*/
/*var num=0;
do {
  if(num%5===0) {
    console.log(num);
  }
  num++;
}while(num<=100);*/
/*var a=0;
do {
  console.log("hey");
}while(a>0) ;*/

//FUNCTIONS

/*const items = {
  food: 1000,
  drinks: 2000,
};
var cart = 0;//HOISTING
function addToCart(parameter) {//parameter
  cart+= parameter;
}
addToCart(items.food);//argument
addToCart(items.drinks);
console.log("cart:",cart);
*/

/*const items = {
  food: 1000,
  drinks: 2000,
};
cart = 0;
function addToCart(item) {
  return cart+item;
}
function addCartValue(item) {
  cart=addToCart(item);
}

 addCartValue(items.food);
 console.log("cart:",cart);
 var cart;*/

//ARROW FUNCTION
/* const items = {
   food: 1000,
   drinks: 2000,
};
 cart = 0;
 var addToCart=(item)=> {
   return cart+item;
 }
 var addCartValue=(item)=> {
   cart=addToCart(item);
 }

  addCartValue(items.food);
  console.log("cart:",cart);
  var cart;
*/

/*myFunction();
function myFunction(){
 console.log("Hello World!");
}*/

/*const myFunction=()=>console.log("Hello World!");
myFunction();*/

//this
/*const OurObject= {
  name: "this keyword",
  getThis: function()  {//()=>{
    console.log(this);
  }
};
OurObject.getThis();
*/
/*function getThis() {
console.log(this);
}
const arrowGetThis=()=> {
  console.log(this);
};
arrowGetThis();
*/

//ARRAYS

/*var myArray=[1,2,3,4,5,6];
console.log(myArray);
myArray.push(7);//add at last
console.log(myArray);
myArray.pop();//remove from last
console.log(myArray);
myArray.unshift(0);//add to front
console.log(myArray);
myArray.shift();//remove from front
console.log(myArray);
*/

/*var num=1;
function printNum() {
  console.log(num);
  num++;
  if(num<=10) {
    printNum();
  }
  else {
    console.log("Hello");
    return;
  }
}
printNum();
*/

/*const myArray=[1,2,3,4,5];
myArray[0];*/
//D structuring
/*function getArray() {
  return [1,2];
}
const [x,y,z]=getArray();
console.log(x);
console.log(y);
console.log(z);
*/

/*var myArray=[1,2,3];
const newArray=myArray.map((e) => (e+1));//modify the element
console.log(newArray);
console.log(myArray);*/

/*var myArray=[10,20,50];
const newArray=myArray.filter(//checks if condition satisfied
  e => e<50
);
console.log(newArray);
console.log(myArray);
*/

//ES 6
/*function hello (name="world") {
  console.log("hello "+name);
}
hello("Shambhavi");
*/

//TEMPLATE LITERALS
/*console.log("Apple\nBanana\nGrapes\nMango");
console.log("-----------------------------------");
console.log(  `
  Apple
  Banana
  Grapes
  Mango
  `);
*/

//SCOPING
/*function outer() {
  var name1="xyz";
  let name2="pqr";
function inner() {
  let name2="ppqqrr";
  console.log(name2);
}
inner();
//console.log(name1);
console.log(name2);
}
outer();
*/

//ASYNCHRONOUS JS
//PROMISES
//ASYNC AWAIT

/*console.log(fetch("https://jsonplaceholder.typicode.com/").then((result)=>
console.log(result))
);*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((data) => console.log(data));//at the time only once can be fetched
console.log("-----------------------------------------------");
const getData = async () => {
  const result = await fetch ("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  console.log(data);
};
getData();
