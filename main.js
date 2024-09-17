import 'bootstrap/dist/css/bootstrap.css'

const iceCreamList = {
  'Vanília': 300,
  'Csokoládé': 350,
  'Eper': 400,
  'Mogyoró': 450
};

const passwordInput = document.getElementById('password');
const passwordCount = document.getElementById('passwordCount');
passwordInput.addEventListener('input', () => {
  const length = passwordInput.value.length;
  passwordCount.textContent = `${length} / 8`;
});

async function loadIceCreamList() {
  try {
      const iceCreamDropdown = document.getElementById('iceCreamDropdown');
      data.forEach(flavor => {
          const option = document.createElement('option');
          option.value = flavor.name;
          option.textContent = flavor.name;
          iceCreamDropdown.appendChild(option);
      });
  } catch (error) {
      console.error('Hiba a fagylalt lista betöltése közben:', error);
  }
}




const iceCreamInput = document.getElementById('iceCream');
const iceCreamDropdown = document.getElementById('iceCreamDropdown');
const messageDiv = document.getElementById('message');



iceCreamInput.addEventListener('input', () => {
  const value = iceCreamInput.value.trim();
  if (Object.keys(iceCreamList).includes(value)) {
      iceCreamInput.classList.add('valid');
      iceCreamInput.classList.remove('invalid');
      iceCreamDropdown.classList.add('hidden');
      messageDiv.textContent = `Ár: ${iceCreamList[value]} Ft`;
  } else {
      iceCreamInput.classList.add('invalid');
      iceCreamInput.classList.remove('valid');
      iceCreamDropdown.classList.remove('hidden');
      messageDiv.textContent = 'Beszerzés folyamatban';
  }
});


Object.keys(iceCreamList).forEach(flavor => {
  const option = document.createElement('option');
  option.value = flavor;
  option.textContent = flavor;
  iceCreamDropdown.appendChild(option);
});


function handleSubmit() {
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();
  const password = passwordInput.value;
  const iceCream = iceCreamInput.value.trim();

  if (name === '') {
      alert('A név mező nem lehet üres!');
      return;
  }

  if (password.length < 8) {
      alert('A jelszónak legalább 8 karakter hosszúnak kell lennie!');
      return;
  }

  event.preventDefault();
}
loadIceCreamList();

