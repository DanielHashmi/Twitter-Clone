// Swipeing From Left To Right
if (window.innerWidth <= 380) {
    let startX, startY;
    document.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
    })

    document.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX
        let endY = e.changedTouches[0].clientY
        let deltaX = endX - startX
        let deltaY = Math.abs(endY - startY)

        if (deltaX > 100 && deltaY < 200) {
            document.querySelector('.first').classList.remove("opacity-0")

        }
        else if (deltaX < -70 && deltaY < 50) {
            document.querySelector('.first').classList.add("opacity-0")
        }

    })
}
let forYou = document.querySelector(".navBtn1")
let following = document.querySelector(".navBtn2")
let followSec = document.querySelector(".Main2")
let MainSec = document.querySelector(".Main")

forYou.addEventListener('click', () => {
    forYou.classList.add("border-sky-600")
    forYou.classList.add("border-b-4")
    following.classList.remove("border-sky-600")
    following.classList.remove("border-b-4")

    following.classList.add("text-gray-500")
    forYou.classList.remove("text-gray-500")

    followSec.style.display = "none"
    MainSec.style.display = "block"
})
following.addEventListener('click', () => {
    forYou.classList.remove("border-sky-600")
    forYou.classList.remove("border-b-4")
    following.classList.add("border-sky-600")
    following.classList.add("border-b-4")

    following.classList.remove("text-gray-500")
    forYou.classList.add("text-gray-500")

    followSec.style.display = "block"
    MainSec.style.display = "none"
})