document.addEventListener('DOMContentLoaded', () => {
  // hover animation / main image
  let mainVoodoo = document.querySelector('.block_image')
  mainVoodoo.addEventListener('mouseover', newMainHouse)
  mainVoodoo.addEventListener('touchstart', newMainHouse)
  mainVoodoo.addEventListener('mouseout', oldMainHouse)

  function newMainHouse() {
    document.getElementById('main_image').src =
      'images/coliving_main_colored.svg'
  }

  function oldMainHouse() {
    document.getElementById('main_image').src = 'images/coliving_main.svg'
  }

  // hover animation / house plan
  let altarImage = document.querySelector('#images')
  altarImage.addEventListener('mouseover', newAltarImage)
  altarImage.addEventListener('mouseout', oldAltarImage)

  function newAltarImage() {
    if (altar.checked) {
      document.getElementById('left_image').src = 'images/altar1_colored.svg'
      document.getElementById('middle_image').src = 'images/altar2_colored.svg'
      document.getElementById('right_image').src = 'images/altar3_colored.svg'
    }
  }

  function oldAltarImage() {
    if (altar.checked) {
      document.getElementById('left_image').src = 'images/altar1.svg'
      document.getElementById('middle_image').src = 'images/altar2.svg'
      document.getElementById('right_image').src = 'images/altar3.svg'
    }
  }

  // hover animation / book
  let firstPage = document.querySelector('#image_stack')
  firstPage.addEventListener('mouseover', newFirstPage)
  firstPage.addEventListener('mouseout', oldFirstPage)

  function newFirstPage() {
    document.getElementById('image1').src = 'images/page1.svg'
  }

  function oldFirstPage() {
    document.getElementById('image1').src = 'images/page1_green.svg'
  }

  // clickable house plan

  const radios = document.querySelectorAll('.radio')
  const leftImage = document.querySelector('#left_image')
  const middleImage = document.querySelector('#middle_image')
  const rightImage = document.querySelector('#right_image')

  radios.forEach((radio) => {
    radio.addEventListener('click', () => {
      const value = radio.getAttribute('value')
      leftImage.src = 'images/' + value + '1.svg'
      middleImage.src = 'images/' + value + '2.svg'
      rightImage.src = 'images/' + value + '3.svg'
    })
  })

  // changing the background of the house plan depending on the selected room

  let bedrooms = document.querySelectorAll('input[value="bedroom"]')
  let altar = document.querySelector('#altar')
  let library = document.querySelector('#library')
  let potionary = document.querySelector('#potionary')
  let divination = document.querySelector('#divination')
  let garden = document.querySelector('#garden')

  // first floor

  bedrooms.forEach((bedroom) => {
    bedroom.addEventListener('click', () => {
      if (bedroom.checked) {
        bedroomsSelected()
        thirdFloor()
        secondFloor()
      }
    })
  })

  altar.addEventListener('click', () => {
    if (altar.checked) {
      altarSelected()
      thirdFloor()
      secondFloor()
    }
  })

  function bedroomsSelected() {
    document.getElementById('first_floor').src = 'images/bedrooms_selected.svg'
  }

  function altarSelected() {
    document.getElementById('first_floor').src = 'images/altar_selected.svg'
  }

  function firstFloor() {
    document.getElementById('first_floor').src = 'images/first_floor.svg'
  }

  // second floor

  library.addEventListener('click', () => {
    if (library.checked) {
      librarySelected()
      thirdFloor()
      firstFloor()
    }
  })

  potionary.addEventListener('click', () => {
    if (potionary.checked) {
      potionarySelected()
      thirdFloor()
      firstFloor()
    }
  })

  divination.addEventListener('click', () => {
    if (divination.checked) {
      divinationSelected()
      thirdFloor()
      firstFloor()
    }
  })

  function librarySelected() {
    document.getElementById('second_floor').src = 'images/library_selected.svg'
  }

  function potionarySelected() {
    document.getElementById('second_floor').src =
      'images/potionary_selected.svg'
  }

  function divinationSelected() {
    document.getElementById('second_floor').src =
      'images/divination_selected.svg'
  }

  function secondFloor() {
    document.getElementById('second_floor').src = 'images/second_floor.svg'
  }

  // third floor

  garden.addEventListener('click', () => {
    if (garden.checked) {
      gardenSelected()
      firstFloor()
      secondFloor()
    }
  })

  function gardenSelected() {
    document.getElementById('third_floor').src = 'images/garden_selected.svg'
  }

  function thirdFloor() {
    document.getElementById('third_floor').src = 'images/third_floor.svg'
  }

  // book
  let image1 = document.querySelector('#image1')
  let image2 = document.querySelector('#image2')
  let image3 = document.querySelector('#image3')
  let image4 = document.querySelector('#image4')
  let image5 = document.querySelector('#image5')
  let image6 = document.querySelector('#image6')
  let image7 = document.querySelector('#image7')
  let image8 = document.querySelector('#image8')
  let image9 = document.querySelector('#image9')

  image1.addEventListener('click', () => {
    hideImage1()
  })

  image2.addEventListener('click', () => {
    hideImage2()
  })

  image3.addEventListener('click', () => {
    hideImage3()
  })

  image4.addEventListener('click', () => {
    hideImage4()
  })

  image5.addEventListener('click', () => {
    hideImage5()
  })

  image6.addEventListener('click', () => {
    hideImage6()
  })

  image7.addEventListener('click', () => {
    hideImage7()
  })

  image8.addEventListener('click', () => {
    hideImage8()
  })

  image9.addEventListener('click', () => {
    hideImage9()
  })

  function hideImage1() {
    image1.classList.add('move')
    setTimeout(() => {
      image1.style.display = 'none'
    }, 1000)
  }

  function hideImage2() {
    image2.classList.add('move')
    setTimeout(() => {
      image2.style.display = 'none'
    }, 1000)
  }

  function hideImage3() {
    image3.classList.add('move')
    setTimeout(() => {
      image3.style.display = 'none'
    }, 1000)
  }

  function hideImage4() {
    image4.classList.add('move')
    setTimeout(() => {
      image4.style.display = 'none'
    }, 1000)
  }

  function hideImage5() {
    image5.classList.add('move')
    setTimeout(() => {
      image5.style.display = 'none'
    }, 1000)
  }

  function hideImage6() {
    image6.classList.add('move')
    setTimeout(() => {
      image6.style.display = 'none'
    }, 1000)
  }

  function hideImage7() {
    image7.classList.add('move')
    setTimeout(() => {
      image7.style.display = 'none'
    }, 1000)
  }

  function hideImage8() {
    image8.classList.add('move')
    setTimeout(() => {
      image8.style.display = 'none'
    }, 1000)
  }

  function hideImage9() {
    image9.classList.add('move')
    setTimeout(() => {
      image9.style.display = 'none'
    }, 1000)
  }
})
