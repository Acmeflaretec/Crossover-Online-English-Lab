const scriptURL = 'https://script.google.com/macros/s/AKfycbw3p_oGszD9TmJ_Cosm83rrtjDu7sGzi2OZy7onDS65k7K12CosqOw81k018CrAUYO7/exec'
const form = document.forms['contactForm']  // Corrected form name to match 'id' in HTML

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert("Thank you! Your form is submitted successfully.")
      window.location.reload()
    })
    .catch(error => console.error('Error!', error.message))
})
