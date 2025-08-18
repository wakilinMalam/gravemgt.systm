document.getElementById('deceasedForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('lenth').value);
  const submissions = JSON.parse(localStorage.getItem('submissions'));
  submissions.push({
    id: Date.now(),
    fullName, height, weight,
    userId: localStorage.getItem('currentUser'),
    allocated: false
  });
  localStorage.setItem('submissions', JSON.stringify(submissions));
  document.getElementById('successMsg').style.display = 'block';
});

document.getElementById('allocForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('subId').value;
  const plot = document.getElementById('plot').value;
  const submissions = JSON.parse(localStorage.getItem('submissions'));
  const sub = submissions.find(s => s.id == id);
  if (sub) {
    sub.allocated = true;
    sub.plotNumber = plot;
    localStorage.setItem('submissions', JSON.stringify(submissions));
    alert(`Grave ${plot} allocated successfully!`);
  }
});