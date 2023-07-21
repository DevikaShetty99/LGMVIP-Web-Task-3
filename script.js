function clearForm() {
    document.getElementById('registrationForm').reset();
  }
  
  document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(function (checkbox) {
      return checkbox.value;
    });
  
    var output = document.getElementById('output');
    output.innerHTML += '<p><strong>Name:</strong> ' + name + '</p>' +
      '<p><strong>Email:</strong> ' + email + '</p>' +
      '<p><strong>Phone Number:</strong> ' + phone + '</p>' +
      '<p><strong>Location:</strong> ' + location + '</p>' +
      '<p><strong>Age:</strong> ' + age + '</p>' +
      '<p><strong>Gender:</strong> ' + gender + '</p>' +
      '<p><strong>Interests:</strong> ' + interests.join(', ') + '</p>' +
      '<hr>';
  
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('location').value = '';
    document.getElementById('age').value = '';
    document.getElementById('male').checked = true; // Assuming "Male" is the default gender
    document.getElementById('history').checked = false;
    document.getElementById('technology').checked = false;
    document.getElementById('geography').checked = false;
  });
  