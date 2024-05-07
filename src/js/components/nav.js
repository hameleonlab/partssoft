const dropdowns = document.querySelectorAll('.header-nav__item_dropdown')

if (dropdowns) {
  dropdowns.forEach((dropdown) => {
    dropdown.querySelector('a').addEventListener("click", (e) => {
      e.preventDefault()
    })
    dropdown.addEventListener("click", (e) => {
      const isOpen = dropdown.classList.contains('open')
      closeAllDropdowns()
      if (!isOpen) dropdown.classList.add('open')
      e.stopPropagation()
    })
  })

  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('open')
    })
  }

  document.addEventListener("click", (e) => {
    closeAllDropdowns()
  })
}




function fixedHeader() {
  const scrollToHeader = 54;
  const headerBottom = document.querySelector('.header__bottom')
  if (window.pageYOffset > scrollToHeader) {
    headerBottom.classList.add('sticky')
    headerBottom.previousElementSibling.classList.add('margin-bottom')
  } else {
    headerBottom.classList.remove('sticky')
    headerBottom.previousElementSibling.classList.remove('margin-bottom')
  }
}

document.addEventListener("scroll", () => fixedHeader())

fixedHeader()



const burger = document.querySelector('.header__burger')

if (burger) {
  burger.onclick = function() {
    let mainMenu = document.querySelector('.header__nav');
    let body = document.querySelector('body');
    mainMenu.classList.toggle('open');
    body.classList.toggle('lock');
    window.scrollTo(0,0)
  } 
}