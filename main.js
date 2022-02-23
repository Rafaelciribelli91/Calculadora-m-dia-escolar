const studentName = document.getElementById("studentName").value
const subjects = document.getElementById("subjects").value
const calc = document.getElementsByTagName("button")
const result = document.getElementById("result")

function calcMedia() {
    const proofone = document.getElementById("proofone").value
    const prooftwo = document.getElementById("prooftwo").value
    const proofthree = document.getElementById("proofthree").value
    const prooffour = document.getElementById("prooffour").value    

    if(proofone !== "" && prooftwo !== "" && proofthree !== "" && prooffour !== "") {

    let calcaverage = ((parseInt(proofone) + parseInt(prooftwo) + parseInt(proofthree) + parseInt(prooffour)) / (4))

    let condição = ""

    if(calcaverage < 70) {
        condição = "reprovado"
    } else {
        condição = "aprovado"
    } 
    
    result.textContent = "Sua média é " + calcaverage + ". Você está " + condição

    } else {
        result.textContent = "Preencha todos os campos"
    }
}
calcular.addEventListener("click", calcMedia())