document.addEventListener('DOMContentLoaded', () => {
  // анимация первого ряда изображений
  let firstRow = document.querySelector('#first_row')
  firstRow.addEventListener('mouseover', newFirstRow)
  firstRow.addEventListener('mouseout', oldFirstRow)

  function newFirstRow() {
    document.getElementById('wave').src = 'images/wave_colored.png'
    document.getElementById('stream').src = 'images/stream_colored.png'
    document.getElementById('forest').src = 'images/forest_colored.png'
    document.getElementById('rain').src = 'images/rain_colored.png'
    document.getElementById('wave_double').src = 'images/wave_colored.png'
    document.getElementById('stream_double').src = 'images/stream_colored.png'
    document.getElementById('forest_double').src = 'images/forest_colored.png'
    document.getElementById('rain_double').src = 'images/rain_colored.png'
  }

  function oldFirstRow() {
    document.getElementById('wave').src = 'images/wave.png'
    document.getElementById('stream').src = 'images/stream.png'
    document.getElementById('forest').src = 'images/forest.png'
    document.getElementById('rain').src = 'images/rain.png'
    document.getElementById('wave_double').src = 'images/wave.png'
    document.getElementById('stream_double').src = 'images/stream.png'
    document.getElementById('forest_double').src = 'images/forest.png'
    document.getElementById('rain_double').src = 'images/rain.png'
  }

  // анимация второго ряда изображений
  let secondRow = document.querySelector('#second_row')
  secondRow.addEventListener('mouseover', newSecondRow)
  secondRow.addEventListener('mouseout', oldSecondRow)

  function newSecondRow() {
    document.getElementById('gem1').src = 'images/gem1_colored.png'
    document.getElementById('gem2').src = 'images/gem2_colored.png'
    document.getElementById('gem3').src = 'images/gem3_colored.png'
    document.getElementById('gem4').src = 'images/gem4_colored.png'
    document.getElementById('gem5').src = 'images/gem5_colored.png'
    document.getElementById('gem1_double').src = 'images/gem1_colored.png'
    document.getElementById('gem2_double').src = 'images/gem2_colored.png'
    document.getElementById('gem3_double').src = 'images/gem3_colored.png'
    document.getElementById('gem4_double').src = 'images/gem4_colored.png'
    document.getElementById('gem5_double').src = 'images/gem5_colored.png'
  }

  function oldSecondRow() {
    document.getElementById('gem1').src = 'images/gem1.png'
    document.getElementById('gem2').src = 'images/gem2.png'
    document.getElementById('gem3').src = 'images/gem3.png'
    document.getElementById('gem4').src = 'images/gem4.png'
    document.getElementById('gem5').src = 'images/gem5.png'
    document.getElementById('gem1_double').src = 'images/gem1.png'
    document.getElementById('gem2_double').src = 'images/gem2.png'
    document.getElementById('gem3_double').src = 'images/gem3.png'
    document.getElementById('gem4_double').src = 'images/gem4.png'
    document.getElementById('gem5_double').src = 'images/gem5.png'
  }

  // анимация третьего ряда изображений
  let thirdRow = document.querySelector('#third_row')
  thirdRow.addEventListener('mouseover', newThirdRow)
  thirdRow.addEventListener('mouseout', oldThirdRow)

  function newThirdRow() {
    document.getElementById('conjure1').src = 'images/conjure1_colored.png'
    document.getElementById('conjure2').src = 'images/conjure2_colored.png'
    document.getElementById('conjure3').src = 'images/conjure3_colored.png'
    document.getElementById('conjure4').src = 'images/conjure4_colored.png'
    document.getElementById('conjure1_double').src =
      'images/conjure1_colored.png'
    document.getElementById('conjure2_double').src =
      'images/conjure2_colored.png'
    document.getElementById('conjure3_double').src =
      'images/conjure3_colored.png'
    document.getElementById('conjure4_double').src =
      'images/conjure4_colored.png'
  }

  function oldThirdRow() {
    document.getElementById('conjure1').src = 'images/conjure1.png'
    document.getElementById('conjure2').src = 'images/conjure2.png'
    document.getElementById('conjure3').src = 'images/conjure3.png'
    document.getElementById('conjure4').src = 'images/conjure4.png'
    document.getElementById('conjure1_double').src = 'images/conjure1.png'
    document.getElementById('conjure2_double').src = 'images/conjure2.png'
    document.getElementById('conjure3_double').src = 'images/conjure3.png'
    document.getElementById('conjure4_double').src = 'images/conjure4.png'
  }
})
