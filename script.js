const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
  } else {
    alert('Thanks, your message has been sent!');
    form.reset();
  }
});



