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
    } else {
        document.getElementById('errorMessage').textContent = data.error;
    }

    if (data.success){
      window.location.href = "/flowtimer";
    }
})