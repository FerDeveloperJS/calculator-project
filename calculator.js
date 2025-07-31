const formCalculatorButtons = document.querySelector("form")
formCalculatorButtons.addEventListener("submit", (event) => {
    event.preventDefault()

    let submitButton = event.submitter

    let valueSubmitButton = submitButton.value
    
    let screen = document.querySelector(".screen")

    let currentValueScreen = screen.innerText

    screen.innerText = currentValueScreen + valueSubmitButton
})