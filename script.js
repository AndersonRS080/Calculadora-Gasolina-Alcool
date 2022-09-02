function calcular(event) {
  event.preventDefault()

  let alcoolInput = document.getElementById('alcool').value
  let gasolinalInput = document.getElementById('gasolina').value
  let contentResult = document.getElementById('content-result')
  let textResult = document.getElementById('text-result')
  let gasolinaSpan = document.getElementById('gasolina-result')
  let alcoolSpan = document.getElementById('alcool-result')

  let claculo = alcoolInput / gasolinalInput

  if (claculo < 0.7) {
    textResult.innerHTML = 'Conpensa usar Álcool'
  } else {
    textResult.innerHTML = 'Compensa usar Gasolina'
  }

  gasolinaSpan.innerHTML = `Gasolina R$ ${gasolinalInput}`
  alcoolSpan.innerHTML = `Ácool R$ ${alcoolInput}`

  contentResult.classList.remove('hide')
}
