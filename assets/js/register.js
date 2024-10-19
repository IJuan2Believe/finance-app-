document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const income = document.getElementById("income").value;
    const taxr = document.getElementById("taxr").value;

    const userData = {
        name,
        dob,
        password,
        income,
        taxr
    };

    try {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            alert("You ahve registered succesfully");
            window.location.href = "/login"; 
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error with your account");
    }

});