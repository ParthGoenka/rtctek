//basics
// console.log("hello")
// function add(num1,num2)
// {
//     return num1 + num2
// }
// console.log(add(10,20))


// this keyword
// const person = {
//     myn : "abc",
// myname : function ()
// {
//     myn = "dbc"
//     nm = this.myn
//     console.log(nm)
// },
// }
// person.myname()


// class inheritance using extends and super keyword
// class person{
//     constructor(fname,lname)
//     {
//         this.fname = fname
//         this.lname = lname
//     }
//     say()
//     {
//         return this.fname+this.lname
//     }
// }
// //const p1 = new person()
// class sup extends person{
//     constructor(fname,lname)
//     {
//         super(fname,lname)
//         this.isSup = true
//     }
//     fightCrime()
//     {
//         return this.say()
//     }
// }
// const batman = new sup("de","fg")
// console.log(batman.fightCrime())
// console.log(batman.say())



//call by value
//  let hi="abc";
//  let bye=hi;
//  console.log(hi);
//  hi="a";
//  console.log(bye);
//  console.log(hi);


//call by reference
//  let obj = {
//     greet:"hello"
//  }
//  let b = obj;
//  obj.greet = "hi";
//  console.log(b);
//  console.log(obj);

//Pre and post
// let counter = 1;
// let a = counter++;
// console.log(counter);
// let counter = 1;
// let a = counter++;
// console.log(a);
// let counter = 1;
// let a = ++counter;
// console.log(a);


//Comma
// let a = (1+2+3,4);
// console.log(a);


//Tricky outputs
// console.log(null+1);
// console.log(undefined+1);



//multiple ternary
// let age = 4;
// let s =  (age>48) ? "ab" : (age>35) ? "bc" : (age>25) ? "cd" : "yz" ;
// console.log(s);


//nullish
// let user ;
// console.log(user ?? "anonymous");


//if to switch
// let a = 111;
// switch(a)
// {
//     case(1):
//     console.log("smaller");
//     break;
//     case(2):
//     console.log("almost");
//     break;
//     case(3):
//     console.log("exact");
//     break;
//     default:
//     console.log("larger");
// }

// function isprime(num)
// {
//     let count=0;
//     if(num==0 || num==1)
//     {
//         return false;
//     }
//     for(let i=2;i<=num/2;i++)
//     {
//         if(num%i==0)
//         {
//             count++;
//         }
//     }
//     if(count>0)
//     {
//         return false;
//     }
//     return true;
// }
// console.log(isprime(111));



// sorted nature of key 
// let codes = {
//     "22" : "ax",
//     "1" : "dc",
//     "24" : "sc",
//     "3": "ed"
// }

// for(code in codes)
// {
//     console.log(code);
//     console.log(codes[code]);
// }

//cloning
// let user = {
//     name: "parth",
//     age:20
// }
// let clone={
// }
// for(key in user)
// {
//     clone[key]=user[key];
// }
// user.name= "part";
// console.log(clone);

//Object assign
// let nw={
//     name: "Parth"
// }
// let age1 = {age:20};
// let city1 = {city:"noida"};
// Object.assign(nw, age1, city1);
// console.log(nw);

// let fast = function(){
//     console.log("abc");
// }
// let fast1 = () => {
//     console.log("aaa");
// }
// function fast2()
// {
//     console.log("aa");
// }
// fast1();
// fast2();
// fast();


// Strings
// let s = "hkrwfrjkg";
// console.log(s.length);
// let x = new String("hkrwfrjkg");
// console.log(x == s);
// console.log(s.charAt(5));
// console.log(s.charCodeAt(2));
// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-7);
// let part1 = text.substr(7,2);
// console.log(part1);
// let text1 = "      Hello World!      ";
// console.log(text1.trim());
// let text = "Hello world!";
// console.log(text.repeat(2));
// let text = "Please visit Microsoft!";
// console.log(text.replace("Microsoft", "W3Schools"));
// let text = "Please  where locate occurs!";
// console.log(text.search("locate"));
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
// let price = 10;
// let VAT = 0.25;
// console.log(`Total: ${(price * (1 + VAT)).toFixed(2)}`);


//shallow copy
// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("Employee=> ", employee);
// let newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

//deep copy
// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("=========Deep Copy========");
// let newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);



// number methods
// let x = 9.656;
// console.log(x.toFixed(3));
// console.log(x.toPrecision(3));
// console.log(x.valueOf());

//Array Methods
// let cars = ["abc","bcd", "def", "efg"];
// for(let i=0;i<cars.length;i++)
// {
//     console.log(cars[i]);
// }
// console.log(Array.isArray(cars));
// console.log((cars instanceof Array));

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value + "<br>";
// }
// console.log(txt);
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum);

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18);
// console.log(Array.from("ABCDEFG"));

// const cars = ["Saab", "Volvo", "BMW"]
// cars[0] = "Toyota";
// cars.push("Audi");
// cars.pop();
// cars.sort(function(a, b){return a - b});//will not work on alphabets
// console.log(cars);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);


//hoisting
// var x = 5; 

// console.log(x+y);
// let y=7;




//promise
//  new Promise((succ, rej) => {

//      setTimeout(greet = () => {
//         console.log("abc");
//          rej();
//      },5000);
//  }).then(function(){
//     console.log("resolved");
//  }).catch(function(){
//     console.log("rejected");
//  });
 


// async function greet()
// {
//     let promise = new Promise((res,rej) => {
//         setTimeout(() =>
//             res("hello"),1000
//         )
        
//     });
//     let result = await promise;
//         console.log(result);
//         console.log("abc");
// }
// greet();