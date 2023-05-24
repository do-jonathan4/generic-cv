const navLinks = document.querySelectorAll('.nav a')
const section = document.querySelector('section')
const formInput = document.querySelectorAll('#formInput button')
const copy = document.querySelector('#copy')

navLinks.forEach(x => {
    const h3 = document.querySelector('h3')
    const h1  = document.querySelector('section h1')
    x.addEventListener('click', () => {
        navLinks.forEach(y => y.classList.remove('active'))
        x.classList.add('active')
        if (x.textContent === 'Home') {
            section.classList.add('d-none')
            h3.classList.remove('d-none')
        }
        if (x.textContent === 'Developer') {
            section.classList.remove('d-none')
            h3.classList.add('d-none')
            h1.textContent = x.textContent
        }
        if (x.textContent === 'Respiratory') {
            section.classList.remove('d-none')
            h3.classList.add('d-none')
            h1.textContent = x.textContent
        }
    })
})

copy.addEventListener('click', () => {
    const cv = document.querySelector('#cv')
    // navigator.clipboard.writeText(cv.innerText);
    alert('Text copied successfully')
})

formInput.forEach(x => {
    x.addEventListener('click', (e) =>  {
        let val = e.target.parentElement.parentElement.firstElementChild
        navigator.clipboard
        .readText()
        .then((clipText => val.value = clipText))
    })
})