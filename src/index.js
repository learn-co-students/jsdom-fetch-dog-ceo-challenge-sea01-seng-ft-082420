//console.log('%c HI', 'color: firebrick')
let imgDiv = document.querySelector('#dog-image-container')
let ul = document.querySelector('#dog-breeds')
let select = document.querySelector('#breed-dropdown')
window.addEventListener('DOMContentLoaded', () => {
    dogPictures()
    dogBreeds()
})
function dogPictures () {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => buildImg(data))
}
function dogBreeds () {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => buildBreed(data))
}
function buildImg(arr) {
    console.log(arr.message.keys)
    let messages = arr.message
    messages.forEach(dog => {
        let img = document.createElement('img')
        img.src = dog
        imgDiv.appendChild(img)
    })
}
function buildBreed(arr) {
    let breeds = arr.message
      breeds = (Object.keys(breeds))
    let select = document.querySelector('select')
    select.addEventListener('change', (e) => {
        let letter = e.target.value
        ul.innerHTML = ""
        let test = breeds.filter((dog) => dog.startsWith(letter));
        test.forEach(dog => {
            let li = document.createElement('li')
            li.innerText = dog.toUpperCase()
            ul.appendChild(li)
            li.addEventListener('click', () => {
                li.style.color = 'blue'
            })
            })  
        }   
    )
    breeds.forEach(dog => {
            let li = document.createElement('li')
            li.innerText = dog.toUpperCase()
            // li.addEventListener('click', () => {
            //     li.style.color = 'blue'
            // })
            ul.appendChild(li)
            li.addEventListener('click', () => {
                li.style.color = 'blue'
            })
    })
}
