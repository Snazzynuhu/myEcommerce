const plusBtn = document.querySelector(".plus-btn")
const minusBtn = document.querySelector(".subtract-btn")
const value = document.querySelector(".value")

let currentValue = 0;

plusBtn.addEventListener("click", ()=>{
    currentValue++
    value.innerHTML = currentValue;
        console.log(currentValue);
})
minusBtn.addEventListener("click", ()=>{
    currentValue--
    if(currentValue <= 0){
        currentValue = 0;
        value.innerHTML= 0;
    }
    value.innerHTML = currentValue;
});

const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
];

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const prevBtnDesk = document.getElementById("prev-btn-desk");
const nextBtnDesk = document.getElementById("next-btn-desk");

const modalImage = document.querySelector(".modal-image");
const deskImage = document.querySelector(".desk-image");

let count = 0;


const updateImg = (index) => {
     modalImage.src = images[index];
}
const updateDeskImg = (index) => {
     deskImage.src = images[index];
}



prevBtn.addEventListener("click", ()=>{
    count--
 if(count < 0 ){
      count = images.length - 1;
    }
    updateImg(count)
});

nextBtn.addEventListener("click", ()=>{
    count++
 if(count > images.length - 1){
      count = 0;
    }
    updateImg(count);
});

// DESKTOP

prevBtnDesk.addEventListener("click", ()=>{
    count--
 if(count < 0 ){
      count = images.length - 1;
    }
    updateDeskImg(count);
});

nextBtnDesk.addEventListener("click", ()=>{
    count++
 if(count > images.length - 1){
      count = 0;
    }
    updateDeskImg(count);
});

const thumbOne = document.querySelector(".thumb-one");
thumbOne.addEventListener("click", ()=>{
     count = 0;
    updateImg(count)

});

const thumbTwo = document.querySelector(".thumb-two");
thumbTwo.addEventListener("click", ()=>{
     count = 1;
        updateImg(count)

});

const thumbThree = document.querySelector(".thumb-three");
thumbThree.addEventListener("click", ()=>{
     count = 2;
        updateImg(count)

});

const thumbFour = document.querySelector(".thumb-four");
thumbFour.addEventListener("click", ()=>{
    count = 3;
        updateImg(count)
});

const thumbNails = document.querySelectorAll(".thumbnail");
const lightBox = document.querySelector(".light-box");
const modalCLoseBtn = document.querySelector(".close-btn");

thumbNails.forEach(thumbNail=>{
    thumbNail.addEventListener("click", ()=>{
       lightBox.classList.add("open-modal")
    })
});

modalCLoseBtn.addEventListener("click", ()=>{
       lightBox.classList.remove("open-modal")
})

const price = document.querySelector(".cost-price");
const unit = document.querySelector(".unit")
const totalPrice = document.querySelector(".total-price")
const cartDetails = document.querySelector(".box__header")
const checkOutBtn = document.querySelector(".checkout-btn")
const cartDisplay = document.querySelector(".cart-display")

const addToCartBtn = document.querySelector(".add-to-cart")
addToCartBtn.addEventListener("click", ()=>{
    unit.innerHTML = currentValue;
    if(currentValue === 0){
        cartDisplay.style.display = "none";
    }else{
        cartDisplay.style.display = "inline";
        cartDisplay.innerText = currentValue;
    }
    const calc = 125*currentValue;
    totalPrice.innerHTML = `$${calc}.00`;
    if(calc === 0){
     cartDetails.innerHTML = ` <p class="cart-display-box__content">Your cart is empty</p>`
     checkOutBtn.style.display = "none";
    }
    else{
    return cartDetails;
     checkOutBtn.style.display = "block";
    }
});

const cartIcon = document.querySelector(".cart");
const shoppingCart = document.querySelector(".shopping-cart");
cartIcon.addEventListener("click", ()=>{
    shoppingCart.classList.toggle("show")
})

const hamburgerMenu = document.querySelector(".hamburger__menu");

const menuList = document.querySelector(".menu__list");

hamburgerMenu.addEventListener("click", ()=>{
    if(hamburgerMenu.classList.contains("show")){
        hamburgerMenu.classList.remove("show");
        menuList.classList.remove("show");
    }
    else{
        hamburgerMenu.classList.add("show");
        menuList.classList.add("show");  
    }
})
