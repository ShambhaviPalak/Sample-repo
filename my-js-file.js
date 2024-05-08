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
var a=0;
do {
  console.log("hey");
}while(a>0) ;
