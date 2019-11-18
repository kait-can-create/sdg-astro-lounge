let heroImage
const getHero = async () => {
  const response = await fetch(
    'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'
  )
  console.log(response)
  const imageData = await response.json()

  displayData(imageData)
}

const displayData = imageData => {
  const imgTag = document.querySelector('.displayHero')
  // you would update the DOM with the photo
  // set the image with the data from the API
  // update the image src with javascript
  imgTag.src = imageData.url
}




document.addEventListener('DOMContentLoaded', getHero)