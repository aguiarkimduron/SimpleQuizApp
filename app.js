const form = document.querySelector('form')
const correctAnswers = ['B', 'B', 'B', 'B']
const btn = document.querySelector('[clickme]')
const scroll = document.querySelector('[here]')
const scoreDisplay = document.querySelector('div.result')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    scrollTo({top: 0, behavior: 'smooth'})
    let score = 0
    let interval = 0
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    userAnswer.forEach((ans, index) => {
        if(ans === correctAnswers[index]) return score+=25
    })
    setTimeout(() => {
        scoreDisplay.classList.remove('d-none')
        const timer = setInterval(() => {
            scoreDisplay.querySelector('span').textContent = `${interval}%`
            if(interval === score) return clearInterval(timer)
            interval++
        },30)
    },500)
    form.submit.disabled = true
})


// --scroll to top--
//window.scrollTo({top: 0, behavior: 'smooth'})

// --timeout
// setTimeout(() => {
//     alert('hello timeout')
// }, 3000)
