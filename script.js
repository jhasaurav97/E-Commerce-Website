document.addEventListener("DOMContentLoaded", function() {
  // Load header
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));

  // Load footer
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
});



// Login Page Script
const email1 = "admin@admin.com";
const password1 = "123456";

function loginSuccess() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email1 === email && password1 === password){
        alert("Login successful");
    }else{
        alert("Incorrect email or password");
    }
}