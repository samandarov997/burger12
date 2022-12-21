const product = {
    crazy: {
        name: "Crazy",
        price: 31000,
        amount: 0,
        img: "images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        name: "Light",
        price: 26000,
        amount: 0,
        img: "images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseBurger: {
        name: "CheeseBurger",
        price: 29000,
        amount: 0,
        img: "images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    dBurger: {
        name: "dBurger",
        price: 24000,
        amount: 0,
        img: "images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop');

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        addCard(this)
    })
});
function addCard(btn) {
    const parent = btn.closest(".card"),
    cardItem = parent.querySelector(".card__item"),
    cardId = parent.getAttribute("id")
    cardItem.classList.add("active") 
    product[cardId].amount++
    cardItem.innerHTML =product[cardId].amount

}
const imgs = document.querySelectorAll('.card__img');

imgs.forEach(img => {
    img.addEventListener("click", function () {
        addCard(this)
        const parent = this.closest(".card")
        let img = parent.querySelector('.card__img');
        let imgSrc = img.getAttribute("src")
        const headerImg = document.querySelector('.header__img');
        headerImg.setAttribute("src", imgSrc)
    })
});