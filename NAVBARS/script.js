function subMenu() {
    let hamBtn = document.querySelector('.btnHam')
    hamBtn.classList.toggle('show')


    const hideMEnu = document.querySelector('.hideMenu')
    hideMEnu.classList.toggle('showMenu')
}
//KNOCK CODE
const boxDiv = document.querySelectorAll('.box')
const nob = boxDiv.length; // number of boxes
var pass = []; // array for passcode

var tapcheck = [1, 1, 4, 2, 3, 3]

boxDiv.forEach((box, idx) => {
    box.addEventListener('click', function(e) {
        if (pass.length == nob + 2) pass = []; // restart after 4 inputs
        pass.push(e.target.dataset.val);


        var tgt = pass
        if (pass.length == nob + 2 && tapcheck.toString() == tgt.toString()) { alert('Correct Password') }

        console.log(tgt.toString().valueOf())
        const y = e.clientY
        const x = e.clientX

        const btnTop = e.target.offsetTop
        const btnLeft = e.target.offsetLeft

        const Xinside = x - btnLeft
        var Yinside = y - btnTop
        const circle = document.createElement('span')
        circle.classList.add('circles')

        circle.style.left = Xinside + 'px'

        circle.style.top = Yinside + 'px'

        this.appendChild(circle)


        setTimeout(() => circle.remove(), 1000)

    })
})


function rippleBTN(e) {


}