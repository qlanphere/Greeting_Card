

const formInput = (e) => {
    e.preventDefault();
    let form = document.querySelector('form');
    let card = document.querySelector('.card')
    console.log(card);
    const greeting = form.greeting.value


    const event = form.event.value
    console.log(event);
    const message = form.message.value

    if (event === "Happy Birthday!") {
        card.style.backgroundColor = "yellow"
    }
    if (event === "Happy Anniversary") {
        card.style.backgroundColor = "blue"
    }
    if (event === "Merry Christmas") {
        card.style.backgroundColor = "red"
    }
    if (event === "Happy Hanukkah") {
        card.style.backgroundColor = "green"
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




