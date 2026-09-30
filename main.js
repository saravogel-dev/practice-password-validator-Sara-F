const readlineSync = require('readline-sync');
let acceptablePass = false;

do {
  console.log("Your password should be at least eight characters, including one uppercase letter and one number.");
  const password = readlineSync.question('Enter a password: ');
  const acceptableLength = password.length >= 8;

  let includesUpperCase = false;
  let includesNumber = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= 'A' && char <= 'Z') {
      includesUpperCase = true;
    }
    if (char >= '0' && char <= '9') {
      includesNumber = true;
    }
  }

  if (includesUpperCase && includesNumber && acceptableLength) {
    acceptablePass = true;
    console.log("You have successfully created a new password.");
  } else {
    console.log("Your password does not meet the requirements.");
  }
} while (!acceptablePass);