var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var elButton = document.querySelector(".btn")


var UserName = [
    "Salom",
    "qalay"
]

var input = elInput.value.trim()

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    var input = elInput.value.trim()

    UserName.unshift(input)

})

console.log(UserName);