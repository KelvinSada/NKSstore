const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".ul-main-menu");
const mainMenu = document.querySelector(".menu");
const mainContentBody = document.querySelector(".main-contents");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    mainMenu.classList.toggle("active");
    mainContentBody.classList.toggle("active");
})

document.querySelectorAll(".ul-main-menu a").forEach(n=> n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    mainMenu.classList.remove("active");
}))

const backClick = document.querySelector(".fa-rectangle-xmark");
const shopCollection = document.querySelector(".shop-collection");

backClick.addEventListener("click", function (){
    shopCollection.style.display = "none";
})

function ShoppingItemsUpdate(name,img,price) {
    this.name = name;
    this.img = img;
    this.price = price;
}
const item1 = new ShoppingItemsUpdate("Dino Varon","image/dinosaur-shirt.png","N15,000")
const item2 = new ShoppingItemsUpdate("Versace Destro","image/purple-fire.png","N19,000")
const item3 = new ShoppingItemsUpdate("Mushroom noon","image/mushroom-shirt.png","N11,000")
const item4 = new ShoppingItemsUpdate("Versace Saints","image/sun-shirt.png","N14,000")
const item5 = new ShoppingItemsUpdate("King Sea","image/happy-shark.png","N13,000")
const item6 = new ShoppingItemsUpdate("1995 classic","image/blue-stripe-shirt.png","N13,000")
const item7 = new ShoppingItemsUpdate("Versace Red","image/pink-flame-shirt.png","N20,000")
const item8 = new ShoppingItemsUpdate("Cinnamon CK","image/cool-shirt.png","N13,000")

const shoppingItems = [item1,item2,item3,item4,item5,item6,item7,item8]


const buyButton = document.querySelectorAll("button.item-buy")

const destinationSelectedItems = document.querySelectorAll(".selected-listed-items")
const destinationImage = document.querySelectorAll(".picked-image")
const destinationHeader = document.querySelectorAll(".header-destination")
const destinationPrice = document.querySelectorAll(".price-destination")


buyButton.forEach(function (btn){
btn.addEventListener("click",function(e){
    const item = e.currentTarget.id;
    const slicedItem =item.slice(9,item.length)

    functioning(slicedItem)   
})
})

function functioning (exactNumber){
      const info = shoppingItems[exactNumber-1];
      destinationHeader[0].textContent = info.name;
      destinationPrice[0].textContent = info.price;
      destinationImage[0].src = info.img;

      if (destinationHeader[0].textContent = info.name){
        destinationHeader[1].textContent = info.name;
      destinationPrice[1].textContent = info.price;
      destinationImage[1].src = info.img;
      }
}



// const itemBody = document.querySelectorAll(".selected-listed-items")
// console.log(itemBody[2].textContent)










// const buyItem1 = document.querySelector("#data-item1")
// const buyItem2 = document.querySelector("#data-item2")
// const buyItem3 = document.querySelector("#data-item3")
// const buyItem4 = document.querySelector("#data-item4")
// const buyItem5 = document.querySelector("#data-item5")
// const buyItem6 = document.querySelector("#data-item6")
// const buyItem7 = document.querySelector("#data-item7")
// const buyItem8 = document.querySelector("#data-item8")
