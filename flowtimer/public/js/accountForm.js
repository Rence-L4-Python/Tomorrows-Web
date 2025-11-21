// provided login form code
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    
    const data = await response.json();
    if (response.ok) {
        alert('Login successful!');
        // Redirect to another page or perform any other actions
    } else {
        document.getElementById('errorMessage').textContent = data.error;
    }

    if (data.success){
      window.location.href = "/flowtimer";
    }
})

// function onSuccess(googleUser){
//     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
// }
// function onFailure(error){
//     gapi.signin2.render('my-signin2', {
//         'scope': 'profile-email',
//         'width': 240,
//         'height': 50,
//         'longtitle': true,
//         'onsuccess': onSuccess,
//         'onfailure': onFailure
//     });
// }