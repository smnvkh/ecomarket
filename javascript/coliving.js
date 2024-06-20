document.addEventListener('DOMContentLoaded', () => {
  // кликабельная схема здания
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

  //   изменение фона схемы в зависимости от выбранной комнаты

  let bedrooms = document.querySelectorAll('input[value="bedroom"]')
  let altar = document.querySelector('#altar')
  let library = document.querySelector('#library')
  let potionary = document.querySelector('#potionary')
  let divination = document.querySelector('#divination')
  let garden = document.querySelector('#garden')

  // первый этаж

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

  // второй этаж

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

  // третий этаж

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
})
