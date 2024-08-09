function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  
  btn.addEventListener('click', (event) => {
    // text.classList.toggle('hidden'); не проходит автоматическую проверку, хотя класс в css есть

    text.toggleAttribute('hidden');
  });
}
