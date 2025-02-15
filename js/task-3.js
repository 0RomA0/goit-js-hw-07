const textInput = document.querySelector("#name-input");

const spanText = document.querySelector("#name-output");


textInput.addEventListener("input", (event) => {
    const insetText = event.currentTarget.value.trim();
    spanText.textContent = insetText || "Anonymous";
});