const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 200,
    colors: [
      {
        code: "black",
        img: "./img/airforce1.png",
      },

      {
        code: "darkblue",
        img: "./img/airforce1.png",
      },
    ],
  },

  {
    id: 2,
    title: "Jordan",
    price: 190,
    colors: [
      {
        code: "white",
        img: "./img/jordan.png",
      },

      {
        code: "black",
        img: "./img/jordan.png",
      },
    ],
  },

  {
    id: 3,
    title: "Blazer",
    price: 180,
    colors: [
      {
        code: "white",
        img: "./img/blazer.png",
      },

      {
        code: "pink",
        img: "./img/blazer.png",
      },
    ],
  },

  {
    id: 4,
    title: "Crater",
    price: 120,
    colors: [
      {
        code: "whitesmoke",
        img: "./img/crater.png",
      },

      {
        code: "black",
        img: "./img/crater.png",
      },
    ],
  },

  {
    id: 5,
    title: "Hippie",
    price: 175,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },

      {
        code: "black",
        img: "./img/hippie.png",
      },
    ],
  },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColor = document.querySelectorAll('.color')
const currentProductSize = document.querySelectorAll('.size')

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
      //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index]

    //change texts  of currentProduct
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = "$" + choosenProduct.price
    currentProductImg.src= choosenProduct.colors[0].img

    // assigning new colors
    currentProductColor.forEach((color, index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code
    })
    
  });
});

currentProductColor.forEach((color, index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSize.forEach((size, index)=>{
    size.addEventListener('click', ()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor = "white"
            size.style.color = 'black'
        })
        size.style.backgroundColor = "black"
        size.style.color = 'white'
    })
})

const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', ()=>{
    payment.style.display= 'flex'
})

close.addEventListener('click', ()=>{
    payment.style.display= 'none'
})

// wrapper.style.backgroundColor= "yellow"
