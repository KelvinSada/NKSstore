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

const cartIcon = document.querySelector(".cart-icon-select")
const shopMenu = document.querySelector(".shopping-item-location")

shopMenu.addEventListener("click",function(){
    shopCollection.style.display = "block";
})
cartIcon.addEventListener("click",function(){
    shopCollection.style.display = "block";
})

const backClick = document.querySelector(".fa-rectangle-xmark");
const shopCollection = document.querySelector(".shop-collection");

backClick.addEventListener("click", function (){
    shopCollection.style.display = "none";
})

const buyButton = document.querySelectorAll(".item-buy")
const addedCartBody = document.querySelector(".items-list-body")

hideEmptyCartIcon()
let initialNumber = 0


buyButton.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const fullItem = e.currentTarget.parentElement.parentElement;

        // const itemImage =fullItem.firstElementChild.firstElementChild.src
        // console.log(itemImage)

        smartItemAdd (fullItem)

        // updateItemsCart (fullItem);

        removeItem ();

        hideEmptyCartIcon()
    })
})

function cartAnimation(){
    cartIcon.classList.add("fa-cart-shopping-animation");
    setTimeout(function(){
        cartIcon.classList.remove("fa-cart-shopping-animation")
    },1000)
}

function smartItemAdd (item){
    const itemName = item.lastElementChild.firstElementChild.firstElementChild.innerHTML
        
    if(nameSaver.includes(itemName)){
        alert("You have already added this item to cart")
    }else{
        cartAnimation()
        initialNumber +=1;
        document.querySelector(".number-number").innerHTML = initialNumber;
        return updateItemsCart(item)
    }
 }


// const noOfValues = document.querySelector(".cart-quantity-input")

// let valueOfNumberMe = 0;
// valueOfNumberMe +=2;

// noOfValues.value = valueOfNumberMe

const nameSaver = []
// The updating cart functionality
function updateItemsCart (fullItem){
        const itemImage =fullItem.firstElementChild.firstElementChild.src
        const itemName = fullItem.lastElementChild.firstElementChild.firstElementChild.innerHTML
        const itemPrice = fullItem.lastElementChild.firstElementChild.lastElementChild.innerHTML
        
        nameSaver.push(itemName)
        console.log(nameSaver)
        
        const newCart = function newAddedItem (image,name,price){
            return `<div class="selected-listed-items">
            <img class="picked-image" src="${image}"/>
            <input class="cart-quantity-input" type="number" value="1">
            <div class="description">
                <h3 class="header-destination">${name}</h3>
                <p class="price-destination">${price}</p>
            </div>
            <i class="fa-solid fa-trash-can"></i>
            </div>`
        }
        addedCartBody.innerHTML += newCart(itemImage,itemName,itemPrice);
        
        updatePrice ()

}

function updatePrice (){
    const addedCartBody = document.querySelector(".items-list-body")
    // const cartRows = addedCartBody.querySelectorAll(".selected-listed-items")
    const cartPrice = addedCartBody.querySelectorAll(".description")
    var total = 0;

    cartPrice.forEach(function(amount){
        priceElement = amount.querySelectorAll(".price-destination")
        price = parseFloat(priceElement[0].innerHTML.replace(",", "").replace("NGN "," "))
        total = total + price;
    })
    document.querySelector(".total-calculation").innerHTML = "NGN "+total;

    hideEmptyCartIcon()
}

function removeItem (){
    const removeButton = document.querySelectorAll(".fa-trash-can")

        removeButton.forEach(function(btn){
        btn.addEventListener("click",function(e){

            const parentElement = e.currentTarget.parentElement
            const parentName = parentElement.querySelector(".header-destination").innerHTML
            const index = nameSaver.indexOf(parentName)
            console.log(index)
            if (index > -1){
                nameSaver.splice(index,1)
                initialNumber -=1;
                document.querySelector(".number-number").innerHTML = initialNumber;
            }
            console.log(nameSaver)
        const buttonRemove = e.currentTarget.parentElement
        buttonRemove.remove();

        updatePrice ()

        
    })
})  
}

function hideEmptyCartIcon(){
if (addedCartBody.childElementCount === 0){
    document.querySelector(".total-section").classList.add("hidden-section");
    document.querySelector(".empty-cart-icon").classList.remove("hide-empty-cart-icon");
} else if (addedCartBody.childElementCount > 0){
    document.querySelector(".empty-cart-icon").classList.add("hide-empty-cart-icon");
    document.querySelector(".total-section").classList.remove("hidden-section");
}
}

const selectedItemSecondPage = document.querySelector(".selected-catalog-container")
selectedItemSecondPage.classList.add("hide-things")


//to take to user to selected item page
const itemDetail = document.querySelectorAll(".items");

itemDetail.forEach(function(item){
    item.addEventListener("click",function(e){
        const identity = e.target.classList;
        if (!identity.contains("item-buy")){
            document.querySelector(".magic").style.display = "none";
            // document.querySelector(".main-contents").style.display = "none";
            selectedItemSecondPage.classList.remove("hide-things");
            mainContentBody.classList.add("hide-things")
            if (window.pageYOffset > 0){
                window.scrollTo({
                    left:0,
                    top:0,
                })
            }
    
        }
    })
})
function backToHomePage(){
    const backToHome = document.querySelector(".back-to-homepage")
        backToHome.addEventListener("click",function(){
            selectedItemSecondPage.classList.add("hide-things");
            document.querySelector(".magic").style.display = "block";
            mainContentBody.classList.remove("hide-things")
    })
    }
    backToHomePage()

//second page
const selectedItemsImage = document.querySelector(".displayed-image")
const selectedItemsName = document.querySelector(".item-picked-name")
const selectedItemsPrice = document.querySelector(".item-picked-price")

    itemDetail.forEach(function(item){
        item.addEventListener("click",function(e){
            var infoImg = e.currentTarget.firstElementChild.firstElementChild.src
            var infoName = e.currentTarget.lastElementChild.firstElementChild.firstElementChild.innerHTML
            var infoPrice = e.currentTarget.lastElementChild.firstElementChild.lastElementChild.innerHTML

            selectedItemsImage.src = infoImg;
            selectedItemsName.innerHTML = infoName;
            selectedItemsPrice.innerHTML = infoPrice;

        })
    })

const addingItemNew = document.querySelector(".adding-item-to-cart")

addingItemNew.addEventListener("click", function(){
    
    smartAdd2 ()

    updatePrice ()

    removeItem ();
})

function smartAdd2(){
    const itemNameSecondPage =selectedItemsName.innerHTML;
    
    if(nameSaver.includes(itemNameSecondPage)){
        alert("You have already added this item to cart")
    }else{
        cartAnimation()
        initialNumber +=1;
        document.querySelector(".number-number").innerHTML = initialNumber;
        return secondPageUpdateCart()
    }
}

//second page cart update
function secondPageUpdateCart(){
    nameSaver.push(selectedItemsName.innerHTML)
    console.log(nameSaver)
    
    const newCart = function newAddedItem (image,name,price){
        return `<div class="selected-listed-items">
        <img class="picked-image" src="${image}"/>
        <input class="cart-quantity-input" type="number" value="1">
        <div class="description">
            <h3 class="header-destination">${name}</h3>
            <p class="price-destination">${price}</p>
        </div>
        <i class="fa-solid fa-trash-can"></i>
        </div>`
    }
    addedCartBody.innerHTML += newCart(selectedItemsImage.src,selectedItemsName.innerHTML,selectedItemsPrice.innerHTML);    
}

const purchaseCartButton =  document.querySelector(".purchase")
const EmptyCartButton =  document.querySelector(".empty-cart-button")

function emptyCartReset (){
EmptyCartButton.addEventListener("click",function(){
    nameSaver.splice(0,nameSaver.length)
    console.log(nameSaver) //Here
    addedCartBody.innerHTML = "";
    updatePrice ()
    document.querySelector(".number-number").innerHTML= initialNumber-=initialNumber
})
}
emptyCartReset ()

purchaseCartButton.addEventListener("click",function(){
    alert("Thank you for you patronage")
    addedCartBody.innerHTML = "";
    updatePrice ()
    document.querySelector(".number-number").innerHTML= initialNumber-=initialNumber

    shopCollection.style.display = "none";
    if (window.pageYOffset > 0){
        window.scrollTo({
            left:0,
            top:0,
        })
    }

})
function ShoppingItemsUpdate(name,img,price) {
    this.name = name;
    this.img = img;
    this.price = price;
}

const item1 = new ShoppingItemsUpdate("Streetwear NK","image/color-block-shirt.png","N17,000")
const item2 = new ShoppingItemsUpdate("Versace Destro","image/purple-fire1.png","N19,000")
const item3 = new ShoppingItemsUpdate("Mushroom noon","image/mushroom-shirt1.png","N11,000")
const item4 = new ShoppingItemsUpdate("Versace Saints","image/designer-shirt.png","N18,000")
const item5 = new ShoppingItemsUpdate("King Sea","image/happy-shark1.png","N13,000")
const item6 = new ShoppingItemsUpdate("1995 classic","image/spring-shirt.png","N13,000")
const item7 = new ShoppingItemsUpdate("Versace Red","image/pink-flame-shirt1.png","N20,000")
const item8 = new ShoppingItemsUpdate("Cinnamon CK","image/cool-shirt1.png","N13,000")
const item9 = new ShoppingItemsUpdate("Space Blue","image/space-shirt.png","N10,000")
const item10 = new ShoppingItemsUpdate("Dino Varon","image/dinosaur-shirt1.png","N15,000")
const item11 = new ShoppingItemsUpdate("Hypland","image/Hypland-shirt.png","N21,000")
const item12 = new ShoppingItemsUpdate("Off-White","image/off-white-shirt.png","N18,000")

const shoppingItems = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12]
const randomNumber = Math.floor((Math.random() * shoppingItems.length-1)+1)
let pricePrice = shoppingItems[randomNumber].price
// console.log(pricePrice)


const similarItems = document.querySelectorAll(".other-items-sub")
const similarItemsImage = document.querySelectorAll(".other-items-sub img")
const similarItemsHeader = document.querySelectorAll(".other-items-sub .similar-item-name")
const similarItemsPrice = document.querySelectorAll(".other-items-sub .similar-item-price")

// similarItems.forEach(function(e){
//     for (i=0;i<5;i++){
//         e.lastElementChild.lastElementChild.innerHTML = shoppingItems[randomNumber].price;
//         e.lastElementChild.firstElementChild.innerHTML = shoppingItems[randomNumber].name;
//         e.firstElementChild.src = shoppingItems[randomNumber].img;
//     }     
// })

//  function codeName(){
//             for (i=0;i<5;i++){
//             e.lastElementChild.lastElementChild.innerHTML = shoppingItems[randomNumber].price;
//             e.lastElementChild.firstElementChild.innerHTML = shoppingItems[randomNumber].name;
//             e.firstElementChild.src = shoppingItems[randomNumber].img;
//         }     
//         }



// similarItems.forEach(function(e){
//     let selectionImage = e.firstElementChild.src
//     let selectionHeader = e.lastElementChild.firstElementChild.innerHTML;
//     let selectionPrice = e.lastElementChild.lastElementChild.innerHTML;

//     selectionImage.src = "image/mushroom-shirt1"
//     console.log(sele)
// })




























































// function five(images,prices,names){
// for (let i=1 ; i < 2; i++){
//     const list = shoppingItems[Math.floor((Math.random() * shoppingItems.length-1)+1)]
    
//     images = list.img;
//     names = list.name;
//     prices = list.price;

//     console.log(images)
//     console.log(names)
//     console.log(prices)
// }
// }
// console.log(five())

// function similarItemsSection(){
// similarItems.forEach(function(e){
//     console.log(similarItemsHeader.classList)
//     let selctionImage = e.firstElementChild.src
//     let selctionHeader = e.lastElementChild.firstElementChild.innerHTML;
//     let selctionPrice = e.lastElementChild.lastElementChild.innerHTML;
//     selctionHeader += "novoh";

//     console.log(selctionHeader)

//     for (i=0;i<5;i++){
//         for(j=Math.floor((Math.random() * shoppingItems.length-1)+1);j<6;j++){
//         similarItemsPrice[i].innerHTML = shoppingItems[].price;
//         similarItemsHeader[i].innerHTML = shoppingItems[j].name;
//         similarItemsImage[i].src = shoppingItems[j].img;

//         }
//     }
    
       
    
//     for (let i=1 ; i < 2; i++){
//         const list = shoppingItems[Math.floor((Math.random() * shoppingItems.length-1)+1)]
        
//         selctionImage = list.img;
//         selctionHeader = list.name;
//         selctionPrice = list.price;
    
        // console.log(images)
        // console.log(names)
        // console.log(prices)
//     }
//     five(selctionImage,selctionPrice,selctionHeader)
//     console.log(selctionHeader.innerHTML)
//     console.log(selctionHeader)
// })
// }
// similarItemsSection()


// function newNew (){
// for (i=0;i<5;i++){
//     let imagesLast = similarItemsHeader[i].innerHTML;
//     // imagesLast = "novonhgm"
// }
// }

// console.log(imagesLast)
 // function newNew (){
        
        // }