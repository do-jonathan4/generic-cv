const input = document.querySelectorAll('input')
const [position, company, other] = input

const position_fill = document.querySelectorAll('.position')
const company_fill = document.querySelectorAll('.company')
const other_fill = document.querySelectorAll('.other')

const sub = document.querySelector('#sub')
const copy = document.querySelector('#copy')
const btn = document.querySelector('#btn')

const prompt = () => alert('Please make sure everything if filled out')

btn.addEventListener('click', (e) =>  {
    e.preventDefault()
    console.log(e.target.parentNode.firstElementChild)
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