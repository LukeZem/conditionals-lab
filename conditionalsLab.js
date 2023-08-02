//task 1
function one() {
    let numberOfStudents = 17;

    if (numberOfStudents > 20) {
        console.log("classroom too small")
    } else {
        console.log("classroom size acceptable")
    }
}

//task 2
function two() {
    let numberOfHouses = 5;

    if (numberOfHouses > 2) {
        console.log("you need to sell more houses")
    } else {
        console.log("seems reasonable")
    }
}

// task 3
function three() {
    let bill = 20;

    if (bill > 15) {
        console.log("we should split the bill")
    } else {
        console.log("I'll get the bill this time")
    }
}

//task 4
function four() {
    let studentsGrade;
    let message;

    if (studentsGrade <= 55) {
        message = "Not to good";
    } else if (studentsGrade <= 60 && studentsGrade > 55) {
        message = "ehhhhh";
    } else if (studentsGrade <= 70 && studentsGrade > 60) {
        message = "Keep trying";
    } else if (studentsGrade <= 80 && studentsGrade > 70) {
        message = "Nice!";
    } else if (studentsGrade <= 90 && studentsGrade > 80) {
        message = "Doing good!";
    } else {
        message = "over 90! Great!";
    }

    console.log(message);
}

//task 5
function five() {
    //example 1 - Are you speeding?
    let driverSpeed;
    if (driverSpeed > 60){
        console.log("You are getting a ticket on the highway")
    } else if (driverSpeed > 35) {
        console.log("You're getting a ticket on a main road")
    } else {
        console.log("You're probably not getting a speeding ticket")
    }

    //example 2 - Check a userName
    let userName = "Johnny SilverHand";

    if(userName.toLocaleLowerCase == userName.toLocaleLowerCase) {
        console.log("You Probably play CyberPunk :)")
    }
    

    //example 3 - 
}