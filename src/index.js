const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let dogBreeds = []


//// Fetch 

const fetchDogs = () => {
  fetch (imgUrl)
  .then (response => response.json())
  .then (dogs => dogs.message.forEach(dog => buildImages(dog)))
}

fetchDogs()

const fetchBreeds = () => {
  fetch (breedUrl)
  .then (response => response.json())
  .then (breeds =>{
    let dogBreedsTemp = Object.keys(breeds.message)
    dogBreedsTemp.forEach(breed => buildLi(breed))
    dogBreeds=dogBreedsTemp
  })
}
fetchBreeds()

///Handlers

function handleFilter(e,breeds) {
  let filterDogs = breeds.filter(dog => dog[0] == e.target.value)
  dogList.innerHTML=''
  filterDogs.forEach(dog=>buildLi(dog))
  let select = document.querySelector('select')
  select.addEventListener('change', (e) => handleFilter(e, dogBreeds))

}


///Build DOM elements 

const buildImages = (dog) => {
  let dogImage = document.querySelector('#dog-image-container')
  let img = document.createElement('img')
  img.src = dog
  dogImage.appendChild(img)
  img.style = 'width:250px'
}

const buildLi = (breed) => {
  let li = document.createElement('li')
  li.textContent = breed
  li.id = breed 
  let dogList = document.querySelector('ul')
  dogList.appendChild(li)
  li.addEventListener('click', () => li.style='color:red')
}
