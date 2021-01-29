const modal0verlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        modal0verlay.classList.add('active')
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modal0verlay.classList.remove("active")
})