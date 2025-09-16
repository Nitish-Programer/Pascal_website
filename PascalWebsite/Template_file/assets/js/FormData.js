const form = document.getElementById('customForm');
const loader = document.getElementById('loader');

// ✅ Page load होते ही loader hide kar do
window.addEventListener("load", function() {
  loader.style.display = "none";
});

form.addEventListener('submit', function(e){
  e.preventDefault();

  // Show loader
  loader.style.display = 'block';

  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbyA04xAnzanijWtBU1wQ4rl1FKKgbXtecGDtWlLPfd8FVKAqk1ajq1Nhv658ZruCRjoEg/exec", { 
    method: "POST",
    body: data
  })
  .then(res => res.json())
  .then(res => {
    loader.style.display = 'none'; // hide loader
    form.reset();

    // Show success toast
    const toastEl = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  })
  .catch(err => {
    loader.style.display = 'none'; // hide loader
    console.error(err);

    // Show error toast
    const toastEl = document.getElementById('errorToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  });
});
