let accessKey = 'YxzTASZniQ_3qkw0nP5bjO6395L6cgHU9KV6KRLkynU';

let choice;

const formInput = (e) => {
    e.preventDefault();
    let form = document.querySelector('form');
    let card = document.querySelector('.card')
    console.log(card);
    const greeting = form.greeting.value


    const event = form.event.value
    console.log(event);
    const message = form.message.value

    let celebrationCard = document.getElementById('celebration-card');

    if (event === "Happy Birthday!") { 
        console.log(celebrationCard);
        let url = `https://api.unsplash.com/search/photos?page=1&query=birthday&client_id=${accessKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data = (data) => {
                console.log(data);
                let randomNumber = Math.round(Math.random() * 10);
                console.log(randomNumber);
                let imgUrl = data.results[randomNumber].urls['raw'];
                console.log(imgUrl);
                celebrationCard.style.backgroundImage = (`url('${imgUrl}')`)
            });
    }

    if (event === "Happy Anniversary") {
        let url = `https://api.unsplash.com/search/photos?page=1&query=anniversary&client_id=${accessKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data = (data) => {
                console.log(data);
                let randomNumber = Math.round(Math.random() * 9);
                console.log(randomNumber);
                let imgUrl = data.results[randomNumber].urls['raw'];
                console.log(imgUrl);
                celebrationCard.style.backgroundImage = (`url('${imgUrl}')`)
            });
    }
    if (event === "Merry Christmas") {
        let url = `https://api.unsplash.com/search/photos?page=1&query=christmas&client_id=${accessKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data = (data) => {
                console.log(data);
                let randomNumber = Math.round(Math.random() * 9);
                console.log(randomNumber);
                let imgUrl = data.results[randomNumber].urls['raw'];
                console.log(imgUrl);
                celebrationCard.style.backgroundImage = (`url('${imgUrl}')`)
            });
    }
    if (event === "Happy Hanukkah") {
        let url = `https://api.unsplash.com/search/photos?page=1&query=hanukkah&client_id=${accessKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data = (data) => {
                console.log(data);
                let randomNumber = Math.round(Math.random() * 9);
                console.log(randomNumber);
                let imgUrl = data.results[randomNumber].urls['raw'];
                console.log(imgUrl);
                celebrationCard.style.backgroundImage = (`url('${imgUrl}')`)
            });
    }


    form.classList.toggle('toggle-form')
        let cardGreeting = document.querySelector('#card-greeting')
        
        let cardMessage = document.querySelector('#card-message')
        //console.log(cardMessage)
        cardGreeting.textContent = greeting
        cardMessage.textContent = message
        console.log(cardGreeting)

    card.style.display= "block"
}

try {
    const submitButton = document.querySelector('#button')
    let form = document.querySelector('form');
    submitButton.addEventListener('click', (e) => {
    formInput(e);
        

})
} catch (error) {
    console.log(error)
}




