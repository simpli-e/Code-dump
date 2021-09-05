function subMenu() {
    let hamBtn = document.querySelector('.btnHam')
    hamBtn.classList.toggle('show')


    const hideMEnu = document.querySelector('.hideMenu')
    hideMEnu.classList.toggle('showMenu')
}

const boxDiv = document.querySelectorAll('.box')

boxDiv.forEach((box, idx) => {
    box.addEventListener('click', function(e) {
        const y = e.clientY
        const x = e.clientX

        const btnTop = e.target.offsetTop
        const btnLeft = e.target.offsetLeft

        const Xinside = x - btnLeft
        var Yinside = y - btnTop

        if (y > btnTop) {
            Yinside = y - btnTop
        } else {
            Yinside = (btnTop - y) / 4
        }

        const circle = document.createElement('span')
        circle.classList.add('circles')

        circle.style.left = Xinside + 'px'

        circle.style.top = Yinside + 'px'

        this.appendChild(circle)


        setTimeout(() => circle.remove(), 1000)

        activeBox = idx

        console.log(activeBox)

    })
})

function rippleBTN(e) {


}