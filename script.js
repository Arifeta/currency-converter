 const convert = document.getElementById('convert');
 // Predefined exchange rates
 const rates = {
    USD: { USD: 1, EUR: 0.93, GBP: 0.76, BIRR: 105 },
    EUR: { USD: 1.08, EUR: 1, GBP: 0.82, BIRR: 123.56 },
    GBP: { USD: 1.32, EUR: 1.22, GBP: 1, BIRR: 134.5 },
    BIRR: {USD: 105, EUR: 123.56, GBP: 134.5, BIRR: 1}
};


function convertCurrency() {
    const fromCurrency = document.getElementById('from_currency').value;
    const toCurrency = document.getElementById('to_currency').value;
    const amount = parseFloat(document.getElementById('input_currency').value);

    if (!fromCurrency || !toCurrency || isNaN(amount)) {
        alert('Please enter a valid amount and select currencies.');
        return;
    }

    const rate = rates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById('output_currency').value = convertedAmount.toFixed(2);
}

convert.addEventListener('click', convertCurrency);