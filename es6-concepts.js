// using var, let, const

// var - can be redeclared and can be assigned
// let - cannot be redeclared but can be reassigned
// const - cannot be redeclared and cannot be reassigned

// var - global scope, supports hoisting
// let and const - block scope, doesnt support hoisting

// In term of Function scope -> var, let and const

// LET and CONST -> ES6 Concepts

// spread and rest of operators (...)

// let users = ["Priya", "Arjun", "Lakshmi", "Arvind", "John"];

// let newUsers = ["Abdul", "Akshaya", "Preeti"];

// console.log(users[2]);

// // let newUser = "Peter";

// // users[5] = newUser;

// // users.push(newUser);

// // users.splice(users.length - 1, 0, newUser);

// // let updatedUsers = [...users, newUser];

// // ["Priya", "Arjun", "Lakshmi", "Arvind", "John", newUser];
// // let updatedUsers = ["Priya", "Arjun", "Lakshmi", "Arvind", "John", "Peter"];

// // let updatedUsers = [...users, ...newUsers];
// // console.log("Updated Users: ", updatedUsers);

// let userDetails = {
//   name: "Preeti",
//   age: "20",
//   city: "Mumbai",
//   email: "preeti@gmail.com",
//   mobileNumber: "+91 1234567890",
// };

// userDetails.address = "#10, First Avenue, Mumbai - 12345";

// userDetails = { ...userDetails, bloodGroup: "O+ve" };

// let professionalDetails = {
//   designation: "Software Engineer",
//   company: "Google India",
//   experience: "1 yr",
//   domain: "Full Stack Development",
// };

// let updatedUserDetails = { ...userDetails, ...professionalDetails };

// // console.log("User Details: ", userDetails);
// // console.log("Updated User Details: ", updatedUserDetails);

// // // REST OPERATOR (...)

// // function myFunc(param) {
// //   console.log("Param: ", param);
// // }

// // myFunc("Hello");
// // myFunc("Hello", "Hi", "Good Evening");

// // function myFuncWithRestOperator(...param) {
// //   console.log("Param: ", param);
// // }

// // myFuncWithRestOperator("Hello");
// // myFuncWithRestOperator("Hello", "Hi", "Good Evening");

// console.log("Updated User Details: ", updatedUserDetails);

// // To access each key/value pair we can use dot operator or []

// // Destructuring the obj

// let userName = updatedUserDetails.name;

// let { city, email, name, ...restOfObj } = updatedUserDetails;

// console.log("Destructured");
// console.log(name);
// console.log(city);
// console.log(email);
// console.log("Rest of Object: ", restOfObj);

// // let users = ["Priya", "Arjun", "Lakshmi", "Arvind", "John"];

// let userName1 = users[0];

// // Destructuring the array

// console.log("Destructuring the Arr");
// let [user2, user3, user1, user4, user5, ...restOfUsers] = users;

// console.log("user 1: ", user1);
// console.log("user 2: ", user2);
// console.log("user 3: ", user3);
// console.log("Rest of User: ", restOfUsers);

// Object Property Shorthand (key is same as the variable name)

// let userName = "Kumar";
// let userEmail = "kumar@gmail.com";
// let userCity = "Delhi";
// let userAddress = "#7, First Avenue, New Delhi - 12345";

// let userProfile = {
//   name: userName,
//   email: userEmail,
//   city: userCity,
//   address: userAddress,
// };

// let brand = "Hyundai";
// let model = "i20";
// let variant = "Sportz";
// let color = "White";

// // let carDetails = {
// //   brand: brand,
// //   model: model,
// //   variant: variant,
// //   color: color,
// // };

// // Object Property Shorthand
// let carDetails = {
//   brand,
//   model,
//   variant,
//   color,
// };

// // for example
// // let carDetails = { brand };
// // instead of
// // let carDetails = { brand : brand };

// console.log("User: ", userProfile);

// console.log("Car: ", carDetails);

// Template Literals or String Literals

// let userName = "Priya";

// let emailContent =
//   "Thanks for applying for the position of Software Engineer. We will get back to you if your profile gets shortlisted.";

// //concatenation -> appending
// let message = "Dear " + userName + ", " + emailContent;
// let messageUsingLiterals = `Dear ${userName}, ${emailContent}`;

// console.log(message);
// console.log(messageUsingLiterals);

// let allUsers = ["John", "Michael", "Preeti", "Deepika", "Arjun"];

// allUsers.forEach((user) => {
//   console.log(`Dear ${user}`);

//   console.log(emailContent);

//   console.log(`Regards,
// The HR Team
//   `);
// });

const myFunc = () => {
  console.log("Hello World");
};

myFunc();

(() => {
  console.log("Anonymous Arrow function");
})();

(function () {
  console.log("Anonymous normal function");
})();
