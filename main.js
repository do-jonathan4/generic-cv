const navLinks = document.querySelectorAll('.nav a')
const formInput = document.querySelectorAll('#formInput button')
const copy = document.querySelector('#copy')
const submit = document.querySelector('#submit')

//copy function
const respPar = document.querySelector('#resp')
const devPar = document.querySelector('#dev')

const [position, company, other] = document.querySelectorAll('input')
let activeTab = ''

navLinks.forEach(x => {
    const h3 = document.querySelector('h3')
    const h1  = document.querySelector('section h1')
    const section = document.querySelector('section')

    x.addEventListener('click', () => {
        navLinks.forEach(y => y.classList.remove('active'))
        x.classList.add('active')
        activeTab = x.textContent
        if (x.textContent === 'Home') {
            section.classList.add('d-none')
            h3.classList.remove('d-none')
        }
        // make shorter
        if (x.textContent === 'Developer') {
            section.classList.remove('d-none')
            h3.classList.add('d-none')
            h1.textContent = x.textContent
            devPar.classList.remove('d-none')
            respPar.classList.add('d-none')
        }
        if (x.textContent === 'Respiratory') {
            section.classList.remove('d-none')
            h3.classList.add('d-none')
            h1.textContent = x.textContent
            devPar.classList.add('d-none')
            respPar.classList.remove('d-none')
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

submit.addEventListener('click', (e) =>  {
    const position_resp = document.querySelectorAll('#dev .position')
    const company_resp = document.querySelectorAll('#dev .company')
    const other_resp = document.querySelectorAll('#dev .other')
    const position_dev = document.querySelectorAll('#dev .position')
    const company_dev = document.querySelectorAll('#dev .company')
    const other_dev = document.querySelectorAll('#dev .other')

    if (activeTab === 'Developer') {
        position_dev.forEach(x => x.textContent = position.value)
        company_dev.forEach(x => x.textContent = company.value)
        other_dev.forEach(x => x.textContent = other.value)
    }
    if (activeTab === 'Respiratory') {
        position_resp.forEach(x => x.textContent = position.value)
        company_resp.forEach(x => x.textContent = company.value)
        other_resp.forEach(x => x.textContent = other.value)
    }
})