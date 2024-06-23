document.addEventListener('DOMContentLoaded', () => {
  const rightBlock = document.querySelector('#right_block')
  rightBlock.addEventListener('mouseover', rightBlockVisible)

  function rightBlockVisible() {
    document.addEventListener('mousemove', function move(e) {
      const mushrooms = document.createElement('span')
      const x = e.offsetX
      const y = e.offsetY

      mushrooms.style.left = x + 'px'
      mushrooms.style.top = y + 'px'

      const size = Math.random() * 10
      mushrooms.style.width = 8 + size + 'vw'
      mushrooms.style.height = 8 + size + 'vw'

      rightBlock.appendChild(mushrooms)

      setTimeout(function () {
        mushrooms.remove()
      }, 3000)

      rightBlock.addEventListener('mouseout', rightBlockInvisible)

      function rightBlockInvisible() {
        document.removeEventListener('mousemove', move)
      }
    })
  }
})
