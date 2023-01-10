const input = document.querySelectorAll('input')
const [position, company, other] = input

const position_fill = document.querySelectorAll('.position')
const company_fill = document.querySelectorAll('.company')
const other_fill = document.querySelectorAll('.other')

const sub = document.querySelector('#sub')
const copy = document.querySelector('#copy')
const span = document.querySelectorAll('span')

const prompt = () => alert('Please make sure everything if filled out')

span.forEach(x => {
    x.addEventListener('click', (e) =>  {
        e.preventDefault()
        let val = e.target.parentElement.parentElement.firstElementChild
        navigator.clipboard
        .readText()
        .then((clipText => val.value = clipText))
    })
})

sub.addEventListener('click', (e) =>  {
    if (position.value === '') {
        return prompt()
    } else if (company.value === '') {
        return prompt()
    } else if (other.value === '') {
        return prompt()
    } else {
        position_fill.forEach(x => x.textContent = position.value)
        company_fill.forEach(x => x.textContent = company.value)
        other_fill.forEach(x => x.textContent = other.value)
    }
})
copy.addEventListener('click', () => {
    const cv = document.querySelector('#cv')
    navigator.clipboard.writeText(cv.innerText);
    alert('Text copied successfully')
})