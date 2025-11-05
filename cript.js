const lista = document.querySelector('.lista')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    lista.classList.toggle("ativo")
})