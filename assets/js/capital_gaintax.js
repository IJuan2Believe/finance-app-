document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault(); 

    const IncomeInput = parseFloat(document.getElementById("income").value);
    const taxRateInput = parseFloat(document.getElementById("taxr").value);
    const HoldingPeriodInput = parseFloat(document.getElementById("hp").value);

    if (isNaN(IncomeInput) || isNaN(taxRateInput) || isNaN(HoldingPeriodInput)) {
        alert("Please enter valid inputs.");
        return;
    }

    function capital_tax_gain ( tax_rate , income, holding_period) {
        if (holding_period <= 1 ) {
            if (income <= 11000){
        tax_rate = 0.10;
    } else if ( income >= 44725) {
        tax_rate = 0.12;
    }else if ( income >= 95375) {
        tax_rate = 0.22;
    }else if ( income >= 182100) {
        tax_rate = 0.24;
    }else if ( income >= 231250) {
        tax_rate = 0.32;
    }else if ( income >= 578125) {
        tax_rate = 0.35;
    }else tax_rate = 0.37
    
    total = income * tax_rate; 
    return total; 
        } else {
    
    if ( income >= 44625){
        tax_rate = 0.0; 
    } else if ( income >= 492300){
        tax_rate = 0.15;
    } else tax_rate = 0.20;
    
    total = income * tax_rate
    return total; 
    }
    
    }

    const taxableAmount = capital_tax_gain(taxRateInput, IncomeInput, HoldingPeriodInput);

    const totalTax = Math.max(0, taxableAmount);

    document.querySelector("input[placeholder='Total']").value = totalTax.toFixed(2);

});