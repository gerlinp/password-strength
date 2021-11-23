const password = document.querySelector('#password')
const background = document.querySelector('.background')

password.addEventListener('keydown', () => {
    background.style.filter = `blur(${20 - (password.value.length * 2)}px`
})