const searchFastLink = document.querySelector('.header-search__fast-link')

if (searchFastLink) {
    searchFastLink.addEventListener("click", (e) => {
        e.preventDefault()
        const searchInput = document.querySelector('.header-search__input')
        searchInput.value = searchFastLink.textContent
        searchFastLink.remove()
    })
}