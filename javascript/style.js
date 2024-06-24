document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav_menu')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active'), scroll()
  })

  document.querySelectorAll('.nav_link').forEach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active')
      navMenu.classList.remove('active')
    })
  )

  //   function scroll() {
  //     if (navMenu.classList.contains('active')) {
  //       document.body.style.overflow = 'hidden'
  //     } else {
  //       document.body.style.overflow = 'visible'
  //     }
  //   }
})
