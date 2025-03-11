const myOBserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    }else {
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

console.log(elements)

elements.forEach((element) => myOBserver.observe(element))