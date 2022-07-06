const resData = document.querySelector('.restaurants-item')

fetch('http://localhost:4004/')
.then(response => response.json())
.then(resInfo => {
    let html = ''
    resInfo.forEach(eachItem => {
        let htmlItem = `<div class ="restaurants-items__item">
        <img src=${eachItem.photoUrl}>
        <h3>${eachItem.name}</h3>
        <p>${eachItem.address}</p>
        <p>Rating: ${Math.round(eachItem.rating * 10) / 10}</p>`
        
        console.log('each item =>', eachItem)

        html += htmlItem
    })
resData.innerHTML = html
})
.catch(err => console.error(err))