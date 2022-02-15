const glitchURL = "https://complex-thoughtful-galliform.glitch.me/birds";

let myGlitchRequest = fetch(glitchURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderBirds(data)
    })

function renderBirds(data){
    for (let i = 0; i < data.length; i++) {
        let birdCard = `
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img class="card-img-top" src="${data[i].image}" alt="">
                                            </div>
                                            <div class="flip-card-back">
                                                <h5 class="birdName">Name: ${data[i].name}</h5>
                                                <p class="birdColor">Color: ${data[i].color}</p>
                                                <p class="birdSex">Sex: ${data[i].sex} </p>
                                                
                                                
                                            </div>
                                        </div>
                                   </div>`

        $('.birdCards').append(birdCard);
    }
}