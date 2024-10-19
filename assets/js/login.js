document.addEventListener("DOMContentLoaded", () => {
    const loginFormHandler = async (event) => {
      event.preventDefault();
  
      const username = document.querySelector("#username-login").value.trim();
      const password = document.querySelector("#password-login").value.trim();
  
      if (username && password) {
        try {

          const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
          });
  
          if (response.ok) {

            window.location.href = "/dashboard";
          } else {
          
            const errorData = await response.json();
            alert(`Login fallido: ${errorData.message}`);
          }
        } catch (error) {
       
          alert(`Connection error: ${error.message}`);
        }
      } else {
        alert("Please, write your username and password.");
      }
    };

    const loginForm = document.querySelector(".login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", loginFormHandler);
    }
  });