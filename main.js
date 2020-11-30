const KEY="C3ObSrAAvcvkVpt4ugYfMmDvKRxn2H5Abaq0xTiB"
// const ENDPOINT_MARS_ROVER_PHOTOS=`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&api_key=${KEY}&earth_date=${data}`

function loadMarsRoverPhotosData(){
    let date=document.getElementsByTagName("input")[0].value
    const ENDPOINT_MARS_ROVER_PHOTOS=`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&api_key=${KEY}&earth_date=${date}`
    let xhr=new XMLHttpRequest()
    xhr.open("GET", ENDPOINT_MARS_ROVER_PHOTOS )
    xhr.onload=parseMarsRoverPhotoData.bind()
    xhr.send()
}

function parseMarsRoverPhotoData(e){
    let xhr=e.target
    let data=JSON.parse(e.target.responseText)
    createGliderDOM(data)
    // console.log(data)
}
function createGliderDOM(data){
    let slidesContainer=document.querySelector('#gallery .glider')
   data.photos.forEach(photo=>{
      console.log(photo)
      let div=document.createElement('div')
      div.appendChild(document.createElement('img'))
      div.firstChild.src=photo.img_src

      div.appendChild(document.createElement('h2'))
      div.lastElementChild.innerText=photo.earth_date

      div.appendChild(document.createElement('h3'))
      div.lastElementChild.innerText=photo.camera.full_name

      slidesContainer.appendChild(div)
  })
  newGlider()
    console.log(data)
}

// window.addEventListener('load', function(){
function newGlider(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
    })
    }
// })

//Добавить поле типа дата т кноапу загрузки, котороя будет загружать фотографии именно той даты
