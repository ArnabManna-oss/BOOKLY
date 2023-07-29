document.getElementById('signupButton').style.display = 'none';
document.getElementById('loginButton').style.display = 'none';

// code for the log out button
document.querySelector('#logOut').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the sign-up button
    document.getElementById('logOut').style.display = 'none';
    document.getElementById('loginButton').style.display = 'inline-block';
    document.getElementById('signupButton').style.display = 'inline-block';
    setTimeout(() => {
        alert("Logout Successful");
    }, 100)

    document.getElementById('logOut').querySelector('form').reset();
});

