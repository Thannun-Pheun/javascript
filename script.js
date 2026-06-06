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
