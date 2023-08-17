document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const priviousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = priviousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
})


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const priviouseNumber = parseInt(caseNumberString);

    const newNumber = priviouseNumber + 2;
    caseNumberField.value = newNumber;

});


// test
function Name() {
    console.log("md jahangir alam");
}
Name();

// test
function myFunction(a, b) {
    return a*b;
}
const jahangir = myFunction(10, 20);
console.log(jahangir);  

function alam(params) {
    
}
// object

const car = {
    Name: "Discovery",
    Model: 400,
    weight: "1000kg",
    Color: "red",
    Start: function () {
        console.log("Car is started");
    },
    Drive: function () {
        console.log('Car is Driving')
    },
    Stop: function () {
        console.log("Car is stoped");
    }
};
console.log(car.weight);


