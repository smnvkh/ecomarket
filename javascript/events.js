document.addEventListener('DOMContentLoaded', () => {
  // анимация первого ряда изображений
  let firstRow = document.querySelector('#first_row')
  firstRow.addEventListener('mouseover', newFirstRow)
  firstRow.addEventListener('mouseout', oldFirstRow)

  function newFirstRow() {
    document.getElementById('wave').src = 'images/wave_colored.svg'
    document.getElementById('stream').src = 'images/stream_colored.svg'
    document.getElementById('forest').src = 'images/forest_colored.svg'
    document.getElementById('rain').src = 'images/rain_colored.svg'
    document.getElementById('wave_double').src = 'images/wave_colored.svg'
    document.getElementById('stream_double').src = 'images/stream_colored.svg'
    document.getElementById('forest_double').src = 'images/forest_colored.svg'
    document.getElementById('rain_double').src = 'images/rain_colored.svg'
  }

  function oldFirstRow() {
    document.getElementById('wave').src = 'images/wave.svg'
    document.getElementById('stream').src = 'images/stream.svg'
    document.getElementById('forest').src = 'images/forest.svg'
    document.getElementById('rain').src = 'images/rain.svg'
    document.getElementById('wave_double').src = 'images/wave.svg'
    document.getElementById('stream_double').src = 'images/stream.svg'
    document.getElementById('forest_double').src = 'images/forest.svg'
    document.getElementById('rain_double').src = 'images/rain.svg'
  }

  // анимация второго ряда изображений
  let secondRow = document.querySelector('#second_row')
  secondRow.addEventListener('mouseover', newSecondRow)
  secondRow.addEventListener('mouseout', oldSecondRow)

  function newSecondRow() {
    document.getElementById('gem1').src = 'images/gem1_colored.svg'
    document.getElementById('gem2').src = 'images/gem2_colored.svg'
    document.getElementById('gem3').src = 'images/gem3_colored.svg'
    document.getElementById('gem4').src = 'images/gem4_colored.svg'
    document.getElementById('gem5').src = 'images/gem5_colored.svg'
    document.getElementById('gem1_double').src = 'images/gem1_colored.svg'
    document.getElementById('gem2_double').src = 'images/gem2_colored.svg'
    document.getElementById('gem3_double').src = 'images/gem3_colored.svg'
    document.getElementById('gem4_double').src = 'images/gem4_colored.svg'
    document.getElementById('gem5_double').src = 'images/gem5_colored.svg'
  }

  function oldSecondRow() {
    document.getElementById('gem1').src = 'images/gem1.svg'
    document.getElementById('gem2').src = 'images/gem2.svg'
    document.getElementById('gem3').src = 'images/gem3.svg'
    document.getElementById('gem4').src = 'images/gem4.svg'
    document.getElementById('gem5').src = 'images/gem5.svg'
    document.getElementById('gem1_double').src = 'images/gem1.svg'
    document.getElementById('gem2_double').src = 'images/gem2.svg'
    document.getElementById('gem3_double').src = 'images/gem3.svg'
    document.getElementById('gem4_double').src = 'images/gem4.svg'
    document.getElementById('gem5_double').src = 'images/gem5.svg'
  }

  // анимация третьего ряда изображений
  let thirdRow = document.querySelector('#third_row')
  thirdRow.addEventListener('mouseover', newThirdRow)
  thirdRow.addEventListener('mouseout', oldThirdRow)

  function newThirdRow() {
    document.getElementById('conjure1').src = 'images/conjure1_colored.svg'
    document.getElementById('conjure2').src = 'images/conjure2_colored.svg'
    document.getElementById('conjure3').src = 'images/conjure3_colored.svg'
    document.getElementById('conjure4').src = 'images/conjure4_colored.svg'
    document.getElementById('conjure1_double').src =
      'images/conjure1_colored.svg'
    document.getElementById('conjure2_double').src =
      'images/conjure2_colored.svg'
    document.getElementById('conjure3_double').src =
      'images/conjure3_colored.svg'
    document.getElementById('conjure4_double').src =
      'images/conjure4_colored.svg'
  }

  function oldThirdRow() {
    document.getElementById('conjure1').src = 'images/conjure1.svg'
    document.getElementById('conjure2').src = 'images/conjure2.svg'
    document.getElementById('conjure3').src = 'images/conjure3.svg'
    document.getElementById('conjure4').src = 'images/conjure4.svg'
    document.getElementById('conjure1_double').src = 'images/conjure1.svg'
    document.getElementById('conjure2_double').src = 'images/conjure2.svg'
    document.getElementById('conjure3_double').src = 'images/conjure3.svg'
    document.getElementById('conjure4_double').src = 'images/conjure4.svg'
  }
})
