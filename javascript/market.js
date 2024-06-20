document.addEventListener('DOMContentLoaded', () => {
  // вкл/выкл всех цветных изображений
  let checkbox = document.getElementById('checkbox')

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      newMainVoodoo(),
        newYouthBottle(),
        newLoveBottle(),
        newIntelligenceBottle(),
        newPaloSanto(),
        newVoodoo(),
        newRecord(),
        newBook(),
        newPestle(),
        newBag()
    } else {
      oldMainVoodoo(),
        oldYouthBottle(),
        oldLoveBottle(),
        oldIntelligenceBottle(),
        oldPaloSanto(),
        oldVoodoo(),
        oldRecord(),
        oldBook(),
        oldPestle(),
        oldBag()
    }
  })

  // анимация главного изображения
  let mainVoodoo = document.querySelector('.block_image')
  mainVoodoo.addEventListener('mouseover', newMainVoodoo)
  mainVoodoo.addEventListener('touchstart', newMainVoodoo)
  mainVoodoo.addEventListener('mouseout', oldMainVoodoo)

  function newMainVoodoo() {
    document.getElementById('main_image').src = 'images/main_voodoo_colored.svg'
  }

  function oldMainVoodoo() {
    document.getElementById('main_image').src = 'images/main_voodoo.png'
  }

  // анимация первого ряда изображений
  let youthBottle = document.querySelector('#youth_bottle')
  youthBottle.addEventListener('mouseover', newYouthBottle)
  youthBottle.addEventListener('mouseout', oldYouthBottle)

  function newYouthBottle() {
    document.getElementById('youth_bottle').src =
      'images/youth_bottle_colored.svg'
  }

  function oldYouthBottle() {
    document.getElementById('youth_bottle').src = 'images/youth_bottle.svg'
  }

  let loveBottle = document.querySelector('#love_bottle')
  loveBottle.addEventListener('mouseover', newLoveBottle)
  loveBottle.addEventListener('mouseout', oldLoveBottle)

  function newLoveBottle() {
    document.getElementById('love_bottle').src =
      'images/love_bottle_colored.svg'
  }

  function oldLoveBottle() {
    document.getElementById('love_bottle').src = 'images/love_bottle.svg'
  }

  let intelligenceBottle = document.querySelector('#intelligence_bottle')
  intelligenceBottle.addEventListener('mouseover', newIntelligenceBottle)
  intelligenceBottle.addEventListener('mouseout', oldIntelligenceBottle)

  function newIntelligenceBottle() {
    document.getElementById('intelligence_bottle').src =
      'images/intelligence_bottle_colored.svg'
  }

  function oldIntelligenceBottle() {
    document.getElementById('intelligence_bottle').src =
      'images/intelligence_bottle.svg'
  }

  // анимация второго ряда изображений
  let paloSanto = document.querySelector('#palo_santo')
  paloSanto.addEventListener('mouseover', newPaloSanto)
  paloSanto.addEventListener('mouseout', oldPaloSanto)

  function newPaloSanto() {
    document.getElementById('palo_santo').src = 'images/palo_santo_colored.svg'
  }

  function oldPaloSanto() {
    document.getElementById('palo_santo').src = 'images/palo_santo.svg'
  }

  let voodoo = document.querySelector('#voodoo')
  voodoo.addEventListener('mouseover', newVoodoo)
  voodoo.addEventListener('mouseout', oldVoodoo)

  function newVoodoo() {
    document.getElementById('voodoo').src = 'images/voodoo_colored.svg'
  }

  function oldVoodoo() {
    document.getElementById('voodoo').src = 'images/voodoo.svg'
  }

  let record = document.querySelector('#record')
  record.addEventListener('mouseover', newRecord)
  record.addEventListener('mouseout', oldRecord)

  function newRecord() {
    document.getElementById('record').src = 'images/music_record_colored.svg'
  }

  function oldRecord() {
    document.getElementById('record').src = 'images/music_record.svg'
  }

  // анимация третьего ряда изображений
  let book = document.querySelector('#book')
  book.addEventListener('mouseover', newBook)
  book.addEventListener('mouseout', oldBook)

  function newBook() {
    document.getElementById('book').src = 'images/book_colored.svg'
  }

  function oldBook() {
    document.getElementById('book').src = 'images/book.svg'
  }

  let pestle = document.querySelector('#pestle')
  pestle.addEventListener('mouseover', newPestle)
  pestle.addEventListener('mouseout', oldPestle)

  function newPestle() {
    document.getElementById('pestle').src = 'images/pestle_colored.svg'
  }

  function oldPestle() {
    document.getElementById('pestle').src = 'images/pestle.svg'
  }

  let bag = document.querySelector('#bag')
  bag.addEventListener('mouseover', newBag)
  bag.addEventListener('mouseout', oldBag)

  function newBag() {
    document.getElementById('bag').src = 'images/bag_colored.svg'
  }

  function oldBag() {
    document.getElementById('bag').src = 'images/bag.svg'
  }
})
