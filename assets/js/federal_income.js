document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault(); 

    const taxableIncomeInput = parseFloat(document.getElementById("taxinc").value);
    const taxRateInput = parseFloat(document.getElementById("taxr").value) / 100;
    const taxCreditsInput = parseFloat(document.getElementById("taxc").value);
    const deductionsInput = parseFloat(document.getElementById("deductions").value);

    if (isNaN(taxableIncomeInput) || isNaN(taxRateInput) || isNaN(taxCreditsInput) || isNaN(deductionsInput)) {
        alert("Please enter valid inputs.");
        return;
    }

    const taxableAmount = taxableIncomeInput - deductionsInput;
    const taxOwed = (taxableAmount * taxRateInput) - taxCreditsInput;

    const totalTax = Math.max(0, taxOwed);

    document.querySelector("input[placeholder='Total']").value = totalTax.toFixed(2);

});