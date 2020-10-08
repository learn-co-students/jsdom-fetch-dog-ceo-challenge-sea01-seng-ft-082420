console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    // variable assigning
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let dogBreed = document.getElementById('dog-breeds')
    let breedDropdown = document.getElementById('breed-dropdown')
    let allBreeds = []

    // eventlisteners
    breedDropdown.addEventListener('change', (e) => {
        dogBreed.innerHTML = ''
        let breedSelect = e.target.value
        let filteredBreeds = allBreeds.filter(name => name[0] === breedSelect)
        parseBreeds(filteredBreeds)
    })

    // calling fetch funtions
    getDogImages(imgUrl)
    getDogBreeds(breedUrl)
    

    // fetch functions 
    function getDogImages (url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => parseImage(data))
    }

    function getDogBreeds (url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            for (const breed in data.message) {
                allBreeds.push(breed)
            }
            parseBreeds(allBreeds)
        })
    }
    
    // funtions 
    const parseImage = (data) => {
        let imgContainer = document.getElementById('dog-image-container')
        data['message'].forEach(img => {
            let imgTag = document.createElement('img')
            imgTag.src = img
            imgContainer.appendChild(imgTag)
        })
    }

    const parseBreeds = (data) => {
         data.forEach(breed => {
            let li = document.createElement('li')
            li.textContent = breed
            li.addEventListener('click', (e) => e.target.style = 'color:firebrick')
            dogBreed.appendChild(li)
        })
    }
 
})