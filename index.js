let homeTeam = document.getElementById("home-score")
let guestTeam = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add1PointH() {
    homeScore += 1
    homeTeam.textContent = homeScore
}

function add2PointH() {
    homeScore += 2
    homeTeam.textContent = homeScore
}

function add3PointH() {
    homeScore += 3
    homeTeam.textContent = homeScore
}

function add1PointG() {
    guestScore += 1
    guestTeam.textContent = guestScore
}

function add2PointG() {
    guestScore += 2
    guestTeam.textContent = guestScore
}

function add3PointG() {
    guestScore += 3
    guestTeam.textContent = guestScore
}