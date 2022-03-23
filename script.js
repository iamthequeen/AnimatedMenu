const hamburger = document.querySelector(".hamburger");

const orangeLayer = document.querySelector(".orange-layer")

const menu = document.querySelector(".menu")

const nav = document.querySelector("nav")

const body = document.querySelector("body")

const titleCapsOne = document.querySelectorAll(".title-caps")[0]

const titleCapsTwo = document.querySelectorAll(".title-caps")[1]

const titleCapsThree = document.querySelectorAll(".title-caps")[2]


// Big links
const bigLinkOne = document.querySelectorAll(".big-link")[0]

const bigLinkTwo = document.querySelectorAll(".big-link")[1]

const bigLinkThree = document.querySelectorAll(".big-link")[2]

// Small links
const smallLinkOne = document.querySelectorAll(".small-link")[0]

const smallLinkTwo = document.querySelectorAll(".small-link")[1]

const smallLinkThree = document.querySelectorAll(".small-link")[2]

// Small columns

const questions = document.querySelector(".questions")

const connect = document.querySelector(".connect")



hamburger.addEventListener("click", function() {

    hamburger.classList.toggle("is-active")

    menu.classList.toggle("active")

    orangeLayer.classList.toggle("active")

    titleCapsOne.classList.toggle("full-opacity-and-down")

    titleCapsTwo.classList.toggle("full-opacity-and-down")

    titleCapsThree.classList.toggle("full-opacity-and-down")

    bigLinkOne.classList.toggle("full-opacity-and-down")
  
    bigLinkTwo.classList.toggle("full-opacity-and-down")

    bigLinkThree.classList.toggle("full-opacity-and-down")

    smallLinkOne.classList.toggle("full-opacity-and-down")
  
    smallLinkTwo.classList.toggle("full-opacity-and-down")

    smallLinkThree.classList.toggle("full-opacity-and-down")
  
    questions.classList.toggle("full-opacity-and-down")
  
    connect.classList.toggle("full-opacity-and-down")

    body.classList.toggle("hidden")

}) 