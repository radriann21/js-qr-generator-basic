import QrCreator from "qr-creator"

export function setLimit(evt, limit) {
  let number = evt.target.value.length
  if (number <= 500) {
    limit.innerText = number
  }
}

export function getText(evt) {
  evt.preventDefault()
  const text = document.getElementById('text').value
  QrCreator.render({
    text,
    radius: 0.5, 
    ecLevel: 'H',
    fill: '#536DFE',
    background: null,
    size: 210
  }, document.getElementById('qr'))
}