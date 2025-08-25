const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

input.addEventListener("input", () => {
    const outputValue = input.value.trim()
    
    if(outputValue === ""){
        output.textContent = "Anonymous"
    } 
    output.textContent = outputValue
})
