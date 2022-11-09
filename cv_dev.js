const input = document.querySelectorAll('input')
const [position, company, languages, comValue] = input

const position_fill = document.querySelectorAll('.position')
const company_fill = document.querySelectorAll('.company')
const languages_fill = document.querySelectorAll('.languages')
const comValue_fill = document.querySelectorAll('.comValue')

const sub = document.querySelector('#sub')
const copy = document.querySelector('#copy')


const prompt = () => alert('Please make sure everything if filled out')

sub.addEventListener('click', (e) =>  {
    if (position.value === '') {
        return prompt()
    } else if (company.value === '') {
        return prompt()
    } else if (languages.value === '') {
        return prompt()
    } else if (comValue.value === '') {
        return prompt()
    } else {
        position_fill.forEach(x => x.textContent = position.value)
        company_fill.forEach(x => x.textContent = company.value)
        languages_fill.forEach(x => x.textContent = languages.value)
        comValue_fill.forEach(x => x.textContent = comValue.value)
    }
})
copy.addEventListener('click', () => {
    const cv = document.querySelector('#cv')
    navigator.clipboard.writeText(cv.textContent);
    alert('Text copied successfully')
})