// task 1-----------------------------------------------
function one() {
    let numberOfStudents = 17;

    if (numberOfStudents > 20) {
        console.log("classroom too small\n")
    } else {
        console.log("classroom size acceptable\n")
    }
}
one();


// task 2-----------------------------------------------
function two() {
    let numberOfHouses = 5;

    if (numberOfHouses > 2) {
        console.log("you need to sell more houses\n")
    } else {
        console.log("seems reasonable\n")
    }
}
two();


// task 3-----------------------------------------------
function three() {
    let bill = 20;

    if (bill > 15) {
        console.log("we should split the bill\n")
    } else {
        console.log("I'll get the bill this time\n")
    }
}
three();

// task 4-----------------------------------------------
function four() {
    let studentsGrade = 88;
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

    console.log(message + "\n");
}
four();

// task 5-----------------------------------------------
function five() {
    //example 1 - Are you speeding?
    let driverSpeed = 45;
    if (driverSpeed > 60) {
        console.log("You are getting a ticket on the highway\n")
    } else if (driverSpeed > 35) {
        console.log("You're getting a ticket on a main road\n")
    } else {
        console.log("You're probably not getting a speeding ticket\n")
    }

    //example 2 - Check a userName-----------------------------------------------
    let userName = "Johnny SilverHand";

    if (userName.toLocaleLowerCase == userName.toLocaleLowerCase) {
        console.log("You Probably play CyberPunk :)\n")
    }


    //example 3 - Livin' In America...------------------------------------------- 

    let age = 25;
    let location = "America"

    if (age < 18 && location != "Europe") {
        console.log("You can drive, but no drinking or smoking\n")
    }
    if (age >= 18
        && age < 21
        && location != "Europe"
    ) {
        console.log("You can drive, you can smoke, but you can't drink!\n")
    } else if (age >=21 ) {
        console.log("You can drive, you can smoke, and you can drink... \njust not all at the same time")
    }

}
five();
