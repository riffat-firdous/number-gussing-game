#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("\n \t Wellcome to code with Riffat Firdous - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Numner Limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation ! you guess a coreect number.");
}
else {
    console.log("Sorry you are guess a wrong number");
}
