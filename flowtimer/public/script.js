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
    });
    
    const data = await response.json();
    if (response.ok) {
        alert('Login successful!');
        // Redirect to another page or perform any other actions
    } else {
        document.getElementById('errorMessage').textContent = data.error;
    }
});

  const list = document.getElementById('dropdownlist');

  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
      // Remove old selection
      list.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('selected');
      });

      // Mark the clicked one
      e.target.classList.add('selected');

      // Move it to the top
      list.insertBefore(e.target, list.firstChild);
    }
  });