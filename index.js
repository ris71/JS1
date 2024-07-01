//Write a simple Javacsript program to display"hello world" in the console
console.log("Hello world")
//Create a HTML file and include a Javascript file that diplays an alert with the message "Javascript is connected"
// window.alert("Javascript is connected")
//Write a javascript program that displays "Welcome to Javascript" in an alert box,writes "Hello,DOM!"to the HTML document and log "check the console" to the console.
document.write("hello");
console.log("check the console")
// Write a series of Javascript statements that declare a variable , assign it a value, and then change the value.
var x=5
 let y=7
 const z=9
document.write(x+"<br>");
document.write(y+"<br>");
document.write(z);
//Correct the syntax errrors in the following code snippet
{
let x=10;
if(x>5)
console.log("x is greater than 5")
}
//Add both single-line and multiple-line commnets to the following code:

// let a=5;
// let b=10;
// let c=a+b;
// console.log(c)
/*let a=5;
let b=10;
let c=a+b;
console.log(c)*/
//Declare variable to store your name,age and whether you are a student.
let studentInfo
studentInfo_name='tanzina',
studentInfo_age=24,
console.log(studentInfo_name);
console.log(studentInfo_age);
//Use 'Let' to declare a variable inside  a block scope and try toaccess it outside the block observe and explain the result.
let Y=5;
{
    let y=8;
    // console.log(y)
}
console.log(y);
//Use 'const' to declare a constant and try to change the value . Explain what happens.
const d=9;
 {
    const d=8;
//    console.log(d);
}
console.log(d);
//Write a program that usese different operator(*,/,+,-)to peform arithmatic operation on two numbers.
let v=6;
let u=9;
let w=v+u;
console.log(w);
//Create a simple calculator using prompt to take numbers from the user and alert their sum difference,product and quotient.
var f=Number(prompt("enter the first value"));
var e=Number(prompt("enter the second value"));
alert(f+e);
//Write a program that demonstrate the use of assignment operators("=","+=","-=","*=")
let o=5;
o+=6;
console.log(0);
//Declare variables of different data types (string,number,boolen,object,array)and log their types to the console.
m="7";
console.log(typeof(m));
l=7;
console.log(typeof(l));
k=false;
console.log(typeof(k));
p=["5"];
console.log(p);
//Write a function that takes two parameter and returns their sum. Then call the functions with different arguments and log the results.
let g=test(3,4);
console.log(g)
function test(a,b){
    
    return a+b;
}
//Create an object representing a student with properties like name,age,grade.Then log the student object to the console.
let person={
    firstName:"tanzina",
    lastName:"tabassum",
    grade:"A+",
    age:20
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.grade);

// All the topic covered from output to JS functions