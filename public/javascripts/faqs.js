document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq__button");

    faqButtons.forEach((button,i) => {
        button.addEventListener("click", () => {
            const faqAnswer = document.querySelector(`.faq__answer-${i}`);
            faqAnswer.classList.toggle("hidden");
            const buttonText = button.querySelector("span");
            buttonText.textContent = buttonText.textContent === "+" ? "-" : "+";
        });
    });
});