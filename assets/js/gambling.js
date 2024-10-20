document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault(); 

    const IncomeInput = parseFloat(document.getElementById("income").value);

    if (isNaN(IncomeInput)) {
        alert("Please enter valid inputs.");
        return;
    }

    const taxableAmount = IncomeInput * 0.24;

    const totalTax = Math.max(0, taxableAmount);

    document.querySelector("input[placeholder='Total']").value = totalTax.toFixed(2);

});