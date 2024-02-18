// Stack (Primitive) 
let myEmail = "Alephs692@gmail.com";
let myNewemail = myEmail
myNewemail = "Aleph.node@gmail.com"
console.log(myEmail);
console.log(myNewemail);               
/* The main contant remain same 
   only myNewemail is changes not the original one this. In short stack give copys,no change in original content.
   Example of stack memory allocation  */


// Heap (Non-Primitive)

let userOne = {
    email : "Rohit@google.com",
    age : 26
}

let userTwo = userOne;

userTwo.email = "rohit@gmail.com"
console.log(userOne);
console.log(userTwo);

/* 
userOne is change when userTwo assign new value.
but in previous example of Stack the original value is not change.
This tell Heap work on refrence and stack work on copys. In short Heap gives reference it will the orignial value.
*/