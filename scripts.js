let homeScore = 0
let guestScore = 0
document.getElementById("home-score") = homeScore
document.getAnimations("guest-score") = guestScore

function addHome(num) {
    homeScore += num
    document.getElementById("home-score").innerText = homeScore
}

function addGuest(num) {
    guestScore += num
    document.getElementById("guest-score").innerText = guestScore
}