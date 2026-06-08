function number() {
    const input = document.getElementById("input").value;
    let number = parseInt(input);

    // if (number ==  4) {
    //     console.log("The number is even");

    // } else if (number == 7 ) {
    //     console.log("The number is odd");
    // } else {
    //     console.log("The number is  zero");
    // }
    const result =
        number === 0
            ? "Zero"
            : number % 2 === 0
              ? `${number} is even`
              : `${number} is odd`;

    console.log(result);
}

function cinema() {
    let age = Number(document.getElementById("cinemaInput").value);
    let price = 0;
    let ticketType = "";

    if (age < 12) {
        ticketType = "Child ticket";
        price = 5;
    } else if (age >= 12 && age <= 64) {
        ticketType = "Adult ticket";
        price = 15;
    } else {
        ticketType = "Senior ticket";
        price = 8;
    }

    if (age === 12) {
        price += 2;
    }

    console.log(`${ticketType}: $${price}`);
}

function submitDay() {
    const day = Number(document.getElementById("dayInput").value);
    let dayName = "";

    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day";
    }

    console.log(`The day is: ${dayName}`);
}
function DrivingAge() {
    let age = Number(document.getElementById("drivingAgeInput").value);

    let status =
        age >= 16
            ? age >= 18
                ? "Full licence"
                : "Learner licence"
            : "Too young to drive";

    console.log(status);
}

function Month() {
    let month = Number(document.getElementById("monthInput").value);

    let season = "";
    let tip = "";

    switch (month) {
        case 11:
        case 12:
        case 1:
        case 2:
        case 3:
        case 4:
            season = "Dry season";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            season = "Rainy season";
            break;
        default:
            season = "Invalid month";
    }
    if (season === "Dry season") {
        tip = "Stay hydrated!";
    } else if (season === "Rainy season") {
        tip = "Bring an umbrella!";
    }

    if (season !== "Invalid month") {
        console.log(`${season} - ${tip}`);
    } else {
        console.log(season);
    }
}

function Score() {
    let score = Number(document.getElementById("scoreInput").value);

    let Grade = "";

    if (score >= 90) {
        Grade = "A";
    } else if (score >= 80) {
        Grade = "B";
    } else if (score >= 70) {
        Grade = "C";
    } else if (score >= 60) {
        Grade = "D";
    } else {
        Grade = "F";
    }

    let result = Grade !== "F" ? "Pass" : "Fail";
    let honours = score >= 95 ? " - Honours" : "";

    let output =
        result === "Fail"
            ? `${Grade} - ${result}`
            : `${Grade} - ${result}${honours}`;

    console.log(output);
}

function compareAges() {
    let ageA = Number(document.getElementById("ageA").value);
    let ageB = Number(document.getElementById("ageB").value);

    let overallStatus =
        ageA === ageB
            ? "Same age!"
            : ageA > ageB
              ? "Person A is older"
              : "Person B is older";

    if (ageA !== ageB) {
        let difference = ageA > ageB ? ageA - ageB : ageB - ageA;
        console.log(`${overallStatus} by ${difference} years`);
    } else {
        console.log(overallStatus);
    }
}

function submitForm() {
    let userIn = document.getElementById("username").value;
    let passIn = document.getElementById("password").value;

    let correctUser = "Thannun";
    let correctPass = "123";

    if (userIn === correctUser && passIn === correctPass) {
        console.log("Welcome!");
    } else if (userIn === correctUser) {
        console.log("Wrong password");
    } else {
        console.log("User not found");
    }
}

function calculate() {
    let zone = Number(document.getElementById("zoneInput").value);
    let total = Number(document.getElementById("totalInput").value);

    let baseRate = 0;

    switch (zone) {
        case 1:
            baseRate = 2;
            break;
        case 2:
            baseRate = 5;
            break;
        case 3:
            baseRate = 15;
            break;
        default:
            console.log("Invalid zone selected");
            return;
    }

    let finalCost = total >= 100 ? "Free shipping!" : `Shipping: $${baseRate}`;

    console.log(finalCost);
}

function submitGrade() {
    let weight = Number(document.getElementById("weightInput").value);
    let heightCm = Number(document.getElementById("heightInput").value);
}
