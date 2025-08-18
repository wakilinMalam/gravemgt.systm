document.getElementById('loginForm').onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find(u => u.email === email && u.password === pass);
  if (user) {
    localStorage.setItem('currentUser', email);
    localStorage.setItem('userName', user.name);
    window.location.href = 'dashboard.html';
  } else alert('Invalid credentials');
};

document.getElementById('registerForm').onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPassword').value;
  const users = JSON.parse(localStorage.getItem('users'));
  if (users.find(u => u.email === email)) {
    alert('Email exists');
    return;
  }
  users.push({ name, email, password: pass });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registered!');
  showLogin();
};

function showRegister() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
}
function showLogin() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}