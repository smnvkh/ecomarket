document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.querySelectorAll('.card-container')
  const nxtBtn = document.querySelectorAll('.nxt-btn')
  const preBtn = document.querySelectorAll('.pre-btn')

  cardContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect()
    let containerWidth = containerDimensions.width

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth
    })

    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth
    })
  })
})
