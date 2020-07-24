// @ts-nocheck
//carousel
const carousel = document.querySelector(".carousel");
const nextButton = document.querySelector(".right-btn");
const previousButton = document.querySelector(".left-btn");
const nav = document.querySelector(".nav");
const dots = [...nav.children];
const slides = [...carousel.children];

let slideWidth = slides[0].getBoundingClientRect().width;

const positionSlides = (slides) => {
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.left = slideWidth * index + "px";
    }
}

positionSlides(slides);

nextButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(carousel, currentSlide, nextSlide);
    hideButton(nextSlide, slides);
    moveToDot(nextSlide, slides, nav, dots);
});

previousButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;

    moveToSlide(carousel, currentSlide, previousSlide);
    hideButton(previousSlide, slides);
    moveToDot(previousSlide, slides, nav, dots);
});

nav.addEventListener("click", function (e) {
    if (e.target === nav) return;
    const targetDot = e.target;
    const currentDot = nav.querySelector(".active");
    const currentSlide = carousel.querySelector(".active");
    let targetDotIndex = findIndex(targetDot, dots);
    const targetSlide = slides[targetDotIndex];
    moveToSlide(carousel, currentSlide, targetSlide);
    toggleActive(currentDot, targetDot);
    hideButton(targetSlide, slides);
})

const moveToDot = (targetSlide, slides, nav, dots) => {
    let slideIndex = findIndex(targetSlide, slides);
    const currentDot = nav.querySelector(".active");
    const targetDot = dots[slideIndex];
    toggleActive(currentDot, targetDot);
}

const moveToSlide = (carousel, currentSlide, targetSlide) => {
    const position = targetSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    toggleActive(currentSlide, targetSlide);
}

const toggleActive = (current, target) => {
    current.classList.remove("active");
    target.classList.add("active");
}

const hideButton = (targetSlide, slides) => {
    if (targetSlide === slides[0]) {
        previousButton.classList.add("hide");
        nextButton.classList.remove("hide");
    } else if (targetSlide === slides[slides.length - 1]) {
        nextButton.classList.add("hide");
        previousButton.classList.remove("hide");
    } else {
        previousButton.classList.remove("hide");
        nextButton.classList.remove("hide");
    }
}
const findIndex = (item, items) => {
    for (let index = 0; index < items.length; index++) {
        if (item === items[index]) {
            return index;
        }
    }
}

//product


const products =
    [{
        id: 0,
        name: "Galaxy S20",
        imageUrl: "images/galaxyS20.png",
        price: 100,
    },
    {
        id: 1,
        name: "Galaxy Note 10",
        imageUrl: "images/galaxyNote10.png",
        price: 100,
    },
    {
        id: 2,
        name: "Galaxy S10",
        imageUrl: "images/galaxyS10.png",
        price: 100,
    },
    {
        id: 3,
        name: "Galaxy s9",
        imageUrl: "images/galaxyS9.png",
        price: 100,
    },
    {
        id: 4,
        name: "Galaxy Flip",
        imageUrl: "images/galaxyFlip.png",
        price: 100,
    },
    {
        id: 5,
        name: "Galaxy A50",
        imageUrl: "images/galaxyA50.png",
        price: 100,
    },
    {
        id: 6,
        name: "Galaxy M20",
        imageUrl: "images/galaxyM20.png",
        price: 100,
    },
    {
        id: 7,
        name: "Galaxy Fold",
        imageUrl: "images/galaxyFold.png",
        price: 100,
    },
    ]



let productsEl = document.querySelector(".products");
const generateProductList = () => {
    products.forEach((item) => {
        var productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-price"><span>Price:</span> ${item.price} $</div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="buttonCart add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>
`;

        productsEl.appendChild(productEl);
    });
}

document.body.onload = generateProductList;

