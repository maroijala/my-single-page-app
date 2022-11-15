const main = document.querySelectorAll('.main')
const main2 = document.querySelectorAll('.main2')
const punch = document.querySelectorAll('.onepunch')


const observer = new IntersectionObserver((e) => {

    e.forEach((en) => {

        if (en.isIntersecting) {
            en.target.classList.add('show')

        } else {
            en.target.classList.remove('show')
        }
    })
}, { threshold: .1 }
)

main.forEach((el) => observer.observe(el))
main2.forEach((el) => observer.observe(el))
punch.forEach((el) => observer.observe(el))