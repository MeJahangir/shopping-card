document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const priviouseNumber = parseInt(caseNumberString);

    const newNumber = priviouseNumber + 2;
    caseNumberField.value = newNumber;

});