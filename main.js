import { setLimit, getText } from "./functions.js"

const text = document.getElementById('text')
const limit = document.getElementById('limit')
const form = document.getElementById('form')

text.addEventListener('input', (evt) => setLimit(evt, limit))
form.addEventListener('submit', getText)