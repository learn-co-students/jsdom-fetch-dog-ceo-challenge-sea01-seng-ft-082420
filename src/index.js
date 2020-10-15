console.log('%c HI', 'color: firebrick');
let dogBreeds  = []
document.addEventListener("DOMContentLoaded", () => {
    loadImages();
    loadBreeds();
});
    
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())

    .then(results => {
        results.message.forEach(image => addImages(image))
    })

}

function addImages(dogPicUrl) {
    let container = document.querySelector("#dog-image-container")
    let image = document.createElement("img")
    image.src = dogPicUrl
    image.style.width=35
    image.style.height=35
    container.appendChild(image)
}

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())

    .then(results => { 
        dogBreeds = Object.keys(results.message)
        selectBreed()
        addBreeds(dogBreeds)
    })
}

function addBreeds(dogBreeds) {
    let ul = document.querySelector("#dog-breeds")
    ul.innerHTML = ''
    // ul.textContent = dogBreeds
    dogBreeds.forEach( breed => {
        let li = document.createElement("li")
        li.textContent = breed
        li.id = breed
        li.style.cursor = "pointer"
        ul.appendChild(li)
        li.addEventListener("click",changeColor)
    })
}

function changeColor(e) {
    // e.fontcolor("green")
    e.target.style.color = "green"
}

function filterBreed(letter) {
    let filtered = dogBreeds.filter(breed => breed.startsWith(letter) == true) 
    addBreeds(filtered)
}

function selectBreed() {
    let letter = document.querySelector("#breed-dropdown")
    letter.addEventListener("change", function(e) {
        filterBreed(e.target.value)
    })
}

