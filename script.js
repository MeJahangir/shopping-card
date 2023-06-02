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