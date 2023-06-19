let cards = document.getElementsByClassName('link-img')

for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.addEventListener('mouseover', function (event) {
        event.target.firstElementChild.style.opacity = 1
        event.target.firstElementChild.addEventListener('mouseover', function (event2) {
            event2.target.style.opacity = 1
        })
    })

    card.addEventListener('mouseout', function (event) {
        event.target.firstElementChild.style.opacity = 0
        event.target.firstElementChild.addEventListener('mouseout', function (event2) {
            event2.target.style.opacity = 0
        })
    })
}