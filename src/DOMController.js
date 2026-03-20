(function submit() {
  const form = document.querySelector("#address-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit clicked. It works");
  });
})();
