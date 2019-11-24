console.log('%c HI', 'color: firebrick')

let message = []

function getDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(data){return data.json()})
        .then(function(json){
            array = Array.from(json.message)
            ShowBreed(array)

        })
}

getDogs()


function ShowBreed(message){
    let div = document.getElementById("dog-image-container")
    message.forEach(function(message){
        let img = document.createElement("img")
        img.src = message
        img.className = "breed-img"
        div.append(img)
    })
}
