const element = document.querySelectorAll('.main')




const observer = new IntersectionObserver((e) => {

    e.forEach((en) => {
        console.log(en)
        if (en.isIntersecting) {
            en.target.classList.add('show')

        } else {
            en.target.classList.remove('show')
        }
    })
}, { threshold: .1 }
)

element.forEach((el) => observer.observe(el)) 