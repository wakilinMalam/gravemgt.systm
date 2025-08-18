document.getElementById('remForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const time = document.getElementById('rTime').value;
  const note = document.getElementById('note').value;
  const freq = document.getElementById('freq').value;
  const reminders = JSON.parse(localStorage.getItem('reminders'));
  reminders.push({ time, note, freq });
  localStorage.setItem('reminders', JSON.stringify(reminders));
  loadReminders();
  this.reset();
});

function loadReminders() {
  const list = document.getElementById('reminders');
  if (!list) return;
  list.innerHTML = '';
  JSON.parse(localStorage.getItem('reminders') || '[]').forEach(r => {
    const li = document.createElement('li');
    li.innerHTML = `${r.time}: ${r.note} (${r.freq}) <button onclick="deleteR('${r.time}')">🗑️</button>`;
    list.appendChild(li);
  });
}

function deleteR(time) {
  const reminders = JSON.parse(localStorage.getItem('reminders')).filter(r => r.time !== time);
  localStorage.setItem('reminders', JSON.stringify(reminders));
  loadReminders();
}

loadReminders();