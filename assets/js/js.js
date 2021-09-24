var i = 1;
function reset() {
  document.getElementById("reset").reset();
}

document.querySelector('form').onsubmit = function () {
  const username = document.querySelector('#floatingInput').value;
  const password = document.querySelector('#floatingPassword').value;

  if (i == 5) {
    const submit = document.querySelector('#submit');
    alert('Connection Error');
    submit.disabled = true;
    return false;

  } else {
    if (username == "admin" && password == "1234") {
      window.location.href = 'index.html';
      return false;

    } else {
      alert('Username or Password is incorrect. Please try again, ' + String(5 - i) + ' time left.');
      reset();
      i++;
      return false;
    }
  }
}