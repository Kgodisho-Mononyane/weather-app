(function submit() {
  const submitBtn = document.querySelector("#submit-btn");

  submitBtn.addEventListener("click", () => {
    alert("submit clicked");
  });
})();

function displayInfo(/*city, temperature, conditions*/) {
  const main = document.querySelector("main");

  const contentContainer = createElement("div");
  contentContainer.setAttribute("id", "content-container");
  main.appendChild(contentContainer);
}
