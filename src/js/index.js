const inputBill = document.getElementById('bill')
const input5 = document.getElementById('0.05')
const input10 = document.getElementById('0.1')
const input15 = document.getElementById('0.15')
const input25 = document.getElementById('0.25')
const input50 = document.getElementById('0.5')
const inputCustom = document.getElementById('tip')
const inputPeople = document.getElementById('people')
const tipAmountPerson = document.querySelector('.tip-amount-person')
const total = document.querySelector('.total')
const btnReset = document.getElementById('reset')
const messageErrorBill = document.querySelector('.message-error-bill')
const messageErrorPeople = document.querySelector('.message-error-people')

btnReset.addEventListener('click', function () {
    event.preventDefault()
    if (input5.checked) {
        total.innerHTML = '$' + (inputBill.value / 1 + inputBill.value * input5.value) / inputPeople.value
        tipAmountPerson.innerHTML = '$' + (inputBill.value * input5.value) / inputPeople.value
    } else if (input10.checked) {
        total.innerHTML = '$' + (inputBill.value / 1 + inputBill.value * input10.value) / inputPeople.value
        tipAmountPerson.innerHTML = '$' + (inputBill.value * input10.value) / inputPeople.value
    } else if (input15.checked) {
        total.innerHTML = '$' + (inputBill.value / 1 + inputBill.value * input15.value) / inputPeople.value
        tipAmountPerson.innerHTML = '$' + (inputBill.value * input15.value) / inputPeople.value
    } else if (input25.checked) {
        total.innerHTML = '$' + (inputBill.value / 1 + inputBill.value * input25.value) / inputPeople.value
        tipAmountPerson.innerHTML = '$' + (inputBill.value * input25.value) / inputPeople.value
    } else if (input50.checked) {
        total.innerHTML = '$' + (inputBill.value / 1 + inputBill.value * input50.value) / inputPeople.value
        tipAmountPerson.innerHTML = '$' + (inputBill.value * input50.value) / inputPeople.value
    } else {
        total.innerHTML = '$' + (inputBill.value / 1 + inputBill.value * inputCustom.value/100) / inputPeople.value
        tipAmountPerson.innerHTML = '$' + (inputBill.value * inputCustom.value/100) / inputPeople.value
    }
    
    if (inputBill.value == "") {
        messageErrorBill.classList.remove('message-valid')
        messageErrorBill.classList.add('message-invalid')
        inputBill.classList.add('invalid')
        inputBill.classList.remove('valid')
    } else {
        messageErrorBill.classList.add('message-valid')
        messageErrorBill.classList.remove('message-invalid')
        inputBill.classList.remove('invalid')
        inputBill.classList.add('valid')
    }
    
    
    if (inputPeople.value == "") {
        messageErrorPeople.classList.remove('message-valid')
        messageErrorPeople.classList.add('message-invalid')
        inputPeople.classList.add('invalid')
        inputPeople.classList.remove('valid')
    } else {
        messageErrorPeople.classList.add('message-valid')
        messageErrorPeople.classList.remove('message-invalid')
        inputPeople.classList.remove('invalid')
        inputPeople.classList.add('valid')
    }
}
)
