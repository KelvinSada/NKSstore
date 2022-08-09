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
// document.addEventListener("click",function(e){
//     // console.log(e.target.parentElement.classList.contains("ul-main-menu")){
//     //     // hamburger.classList.remove("active");
//     //     // navMenu.classList.remove("active");
//     // }
//     if (!e.target.classList == '' && !e.target.classList =="hamburger"){
//         // alert("not empty")
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//         mainMenu.classList.remove("active");
//     }
// })

// const preloader = document.querySelector(".preloader")
// document.querySelector(".man-model").addEventListener("load",function(){
//     preloader.classList.add("hide-preloader");
//     document.querySelector(".display-image").style.animation = "move-to-right 1.5s ease-in 0.7s forwards";
//     document.querySelector(".display-text").style.animation = "hide-to-show 1.9s 0.7s forwards";
// })

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
        // console.log(nameSaver)
        
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
        // console.log(total)
        turnToString(total)
    })

    hideEmptyCartIcon()
}
//Turn amount to a string
function turnToString(total){
    total = total.toString()
    if(total.length > 3){
        var temp = "",j=0;
        for(var i = total.length-1;i>=0;i--){
            temp = total[i] + temp;
            j++;
            if(j%3==0 && i!=0){
                temp = ","+temp;
            }
            // console.log(temp)
            document.querySelector(".total-calculation").innerHTML = "NGN "+temp;
        }
    }
}

function removeItem (){
    const removeButton = document.querySelectorAll(".fa-trash-can")

        removeButton.forEach(function(btn){
        btn.addEventListener("click",function(e){
            const parentElement = e.currentTarget.parentElement
            const parentName = parentElement.querySelector(".header-destination").innerHTML
            const index = nameSaver.indexOf(parentName)
            // console.log(index)
            if (index > -1){
                nameSaver.splice(index,1)
                initialNumber -=1;
                document.querySelector(".number-number").innerHTML = initialNumber;
            }
            // console.log(nameSaver)
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


//to take to user to selected item in second page
const itemDetail = document.querySelectorAll(".items");

itemDetail.forEach(function(item){
    item.addEventListener("click",function(e){

        const scrollHeight = window.pageYOffset;
        backToPrevLocation.forEach(function(backButton){
            backButton.addEventListener("click",function(){
                backToHomePageItem(scrollHeight)
        })
        })
        backToHome.addEventListener("click",function(){
            const locationHeight = 0;
            backToHomePageItem(locationHeight)
        })

        if(menCollection.classList.contains("underline")){
            similarItems(shoppingItems) 
        } else if(womenCollection.classList.contains("underline")){
            similarItems(shoppingItemsFemale)
        }
        
        similarItemsSelectionAndConversion ()

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

const backToHome = document.querySelector(".back-to-homepage")
const backToPrevLocation = document.querySelectorAll(".back-back")

function backToHomePageItem(position){    
            selectedItemSecondPage.classList.add("hide-things");
            document.querySelector(".magic").style.display = "block";

            if(menCollection.classList.contains("underline")){
                mainContentBody.classList.remove("hide-things")
            } else if(womenCollection.classList.contains("underline")){
                mainContentBody.classList.add("hide-things")
            }
            
            window.scrollTo({
                left:0,
                top:position,
            })
    }


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
    // console.log(nameSaver)
    
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
    addedCartBody.innerHTML = "";
    updatePrice ()
    document.querySelector(".number-number").innerHTML= initialNumber-=initialNumber
})
}
emptyCartReset ()

purchaseCartButton.addEventListener("click",function(){
    alert("Thank you for you patronage")
    nameSaver.splice(0,nameSaver.length)
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
// window.addEventListener("scroll",function(){
//     const scrollHeight = window.pageYOffset;
//     console.log(scrollHeight)
// })

function ShoppingItemsUpdate(name,img,price) {
    this.name = name;
    this.img = img;
    this.price = price;
}

const item1 = new ShoppingItemsUpdate("Streetwear NK","image/color-block-shirt.png","NGN 17,000")
const item2 = new ShoppingItemsUpdate("Versace Destro","image/purple-fire1.png","NGN 19,000")
const item3 = new ShoppingItemsUpdate("Mushroom noe","image/mushroom-shirt1.png","NGN 11,000")
const item4 = new ShoppingItemsUpdate("Versace Saints","image/designer-shirt.png","NGN 18,000")
const item5 = new ShoppingItemsUpdate("Blue Stripe","image/blue-stripe-shirt1.png","NGN 13,000")
const item6 = new ShoppingItemsUpdate("1995 classic","image/spring-shirt.png","NGN 13,000")
const item7 = new ShoppingItemsUpdate("Versace Red","image/pink-flame-shirt1.png","NGN 20,000")
const item8 = new ShoppingItemsUpdate("Rider XL","image/pattern-shirt.png","NGN 15,000")
const item9 = new ShoppingItemsUpdate("Space Blue","image/space-shirt.png","NGN 10,000")
const item10 = new ShoppingItemsUpdate("Dino Varon","image/dinosaur-shirt1.png","NGN 15,000")
const item11 = new ShoppingItemsUpdate("Hypland","image/Hypland-shirt.png","NGN 21,000")
const item12 = new ShoppingItemsUpdate("Off-White","image/off-white-shirt.png","NGN 18,000")

const shoppingItems = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12]
const randomNumber = Math.floor((Math.random() * shoppingItems.length-1)+1)
let pricePrice = shoppingItems[randomNumber].price

const otherItemContainer = document.querySelector(".other-items-sub-container")

//changing similar items section
function similarItems(DifferentItemsPassed){
    otherItemContainer.addEventListener("scroll",function(){
            let scrollWidth = window.scrollX;
            // console.log(scrollWidth)
            })
// console.log(otherItemContainer.pageXOffset)
    const randomNumber = Math.floor((Math.random() * DifferentItemsPassed.length-1)+1)
    // console.log(randomNumber)
if(DifferentItemsPassed.length >10){
if(randomNumber>6){
    let similarItemsArray = DifferentItemsPassed.slice(randomNumber - 5,randomNumber)
    similarItemsArray = similarItemsArray.map(function(item){
        return `<div class="other-items-sub">
        <img src=${item.img} class="similar-images" alt=""/>
        <div class="similar-item-description">
            <div class="similar-item-name">${item.name}</div>
            <div class="similar-item-price">${item.price}</div>
        </div>
        </div>`
    }).join("")
    otherItemContainer.innerHTML = similarItemsArray;
    // console.log(otherItemContainer)
    // otherItemContainer.
    // if (window.pageYOffset > 0){
        // otherItemContainer.scrollTo({
        //     left:0,
        //     top:0,
        // })
    // }
}else if(randomNumber<=6){
    let similarItemsArray = DifferentItemsPassed.slice(randomNumber,randomNumber + 5)
    similarItemsArray = similarItemsArray.map(function(item){
        return `<div class="other-items-sub">
        <img src=${item.img} class="similar-images" alt=""/>
        <div class="similar-item-description">
            <div class="similar-item-name">${item.name}</div>
            <div class="similar-item-price">${item.price}</div>
        </div>
        </div>`
    }).join("")
    otherItemContainer.innerHTML = similarItemsArray;
}
}
else if(DifferentItemsPassed.length<10){
    if(randomNumber<=4){
        let similarItemsArray = DifferentItemsPassed.slice(randomNumber,randomNumber+5)
        similarItemsArray = similarItemsArray.map(function(item){
            return `<div class="other-items-sub">
            <img src=${item.img} class="similar-images" alt=""/>
            <div class="similar-item-description">
                <div class="similar-item-name">${item.name}</div>
                <div class="similar-item-price">${item.price}</div>
            </div>
            </div>`
        }).join("")
        otherItemContainer.innerHTML = similarItemsArray;
}else if(randomNumber===5){
    let similarItemsArray = DifferentItemsPassed.slice(randomNumber-2,randomNumber + 3)
    similarItemsArray = similarItemsArray.map(function(item){
        return `<div class="other-items-sub">
        <img src=${item.img} class="similar-images" alt=""/>
        <div class="similar-item-description">
            <div class="similar-item-name">${item.name}</div>
            <div class="similar-item-price">${item.price}</div>
        </div>
        </div>`
    }).join("")
    otherItemContainer.innerHTML = similarItemsArray;
}
else if(randomNumber>5){
    let similarItemsArray = DifferentItemsPassed.slice(randomNumber-5,randomNumber)
    similarItemsArray = similarItemsArray.map(function(item){
        return `<div class="other-items-sub">
        <img src=${item.img} class="similar-images" alt=""/>
        <div class="similar-item-description">
            <div class="similar-item-name">${item.name}</div>
            <div class="similar-item-price">${item.price}</div>
        </div>
        </div>`
    }).join("")
    otherItemContainer.innerHTML = similarItemsArray;
}
}
}
const otherSimilarItems = document.querySelectorAll(".other-items-sub")

function similarItemsSelectionAndConversion (){
    const otherSimilarItems = document.querySelectorAll(".other-items-sub")
    otherSimilarItems.forEach(function(item){
        item.addEventListener("click",function(e){
            const imageConversion  = e.currentTarget.querySelector(".similar-images").src;
            const nameConversion = e.currentTarget.querySelector(".similar-item-name").innerHTML;
            const priceConversion = e.currentTarget.querySelector(".similar-item-price").innerHTML;

            window.scrollTo({
                left:0,
                top:0,
            })
            selectedItemsImage.src= imageConversion;
            selectedItemsName.innerHTML = nameConversion;
            selectedItemsPrice.innerHTML = priceConversion;

            // similarItems()
            
        })
    })
    }

    //women section 
const womenCollection = document.querySelector(".women-collection-section")

const links = document.querySelectorAll(".ul-main-menu a")
// console.log(links)
links[3].addEventListener("click",function(){
    signUpSection();
})

const contactPage = document.querySelector(".contact-login")
// console.log(contactPage)
contactPage.classList.add("hide-things");

function signUpSection (){
    links.forEach(function(link){
        if(link.classList.contains("underline")){
            link.classList.remove("underline")
        }
    })
    links[3].classList.add("underline");

    itemDetail.forEach(function(item){
        // console.log(item.classList)
        if(!item.classList.contains("female")){
            item.classList.add("hide-things");
        }
        if(item.classList.contains("female")){
            item.style.display = "none";
            // console.log(item)
        }
    })
    document.querySelector(".tag").style.display = "none";
    document.querySelector(".tag").style.marginBottom = ".3em";
    document.querySelector(".notice").style.display = "none";

    // mainContentBody.classList.remove("hide-things")
    document.querySelector(".categories").classList.remove("active-padding")
    document.querySelector(".section-body").style.paddingTop = "1em";

//    document.querySelector(".magic").classList.add("hide-things")
   document.querySelector(".magic").style.display = "none";
    mainContentBody.classList.add("hide-things");
    contactPage.classList.remove("hide-things");
}


womenCollection.addEventListener("click",function(){

    const position = 0;
    backToHomePageItem(position)
    WomenSection()
})
function WomenSection(){
    links.forEach(function(link){
        if(link.classList.contains("underline")){
            link.classList.remove("underline")
        }
    })
    womenCollection.classList.add("underline");
    animationCool()
    itemDetail.forEach(function(item){
        if(!item.classList.contains("female")){
            item.classList.add("hide-things");
        }
        if(item.classList.contains("female")){
            item.style.display = "block";
            
            // console.log(item)
        }
    })
    
    document.querySelector(".tag").style.display ="flex";

    document.querySelector(".tag").innerHTML = `<img src="image/menu.png" class="right-arrow"/>WOMEN COLLECTION`;
    document.querySelector(".tag").style.marginBottom =0;
    document.querySelector(".notice").style.display = "none";
    mainContentBody.classList.add("hide-things")
    document.querySelector(".categories").classList.add("active-padding")
    document.querySelector(".section-body").style.paddingTop = 0;
    contactPage.classList.add("hide-things");
}

const fitem1 = new ShoppingItemsUpdate("Moda Operandi","image/Moda-Operandi.png","NGN 25,000")
const fitem2 = new ShoppingItemsUpdate("Max-Mara","image/Max-Mara.png","NGN 20,000")
const fitem3 = new ShoppingItemsUpdate("Brown Mini","image/lanruoj-printed.png","NGN 15,000")
const fitem4 = new ShoppingItemsUpdate("Pattern Slay","image/Pattern-Slay.png","NGN 13,000")
const fitem5 = new ShoppingItemsUpdate("Kulture Supreme","image/Kulture-supreme.png","NGN 15,000")
const fitem6 = new ShoppingItemsUpdate("Fashion desco","image/Fashion-desco.png","NGN 14,000")
const fitem7 = new ShoppingItemsUpdate("Office look","image/Office-look.png","NGN 17,000")
const fitem8 = new ShoppingItemsUpdate("Plain jane","image/plain-jane.png","NGN 15,000")

const shoppingItemsFemale = [fitem1,fitem2,fitem3,fitem4,fitem5,fitem6,fitem7,fitem8]
// console.log(shoppingItemsFemale)

const menCollection = document.querySelector(".men-collection-section")

menCollection.addEventListener("click",function(){
    // console.log(links)

    const position = 0;
    backToHomePageItem(position)
    MenSection ()
})
function MenSection (){
    links.forEach(function(link){
        if(link.classList.contains("underline")){
            link.classList.remove("underline")
        }
    })
    menCollection.classList.add("underline");

    itemDetail.forEach(function(item){
        // console.log(item.classList)
        if(!item.classList.contains("female")){
            item.classList.remove("hide-things");
        }
        if(item.classList.contains("female")){
            item.style.display = "none";
            // console.log(item)
        }
    })
    document.querySelector(".tag").innerHTML = `<img src="image/menu.png" class="right-arrow"/> MEN CATALOG`;
    document.querySelector(".tag").style.marginBottom = ".3em";
    document.querySelector(".notice").style.display = "block";
    mainContentBody.classList.remove("hide-things")
    document.querySelector(".categories").classList.remove("active-padding")
    document.querySelector(".section-body").style.paddingTop = "1em";
    contactPage.classList.add("hide-things");
}


const quickLinks = document.querySelectorAll(".shortcut-links")

quickLinks[0].addEventListener("click",function(){
    const position = 0;
    backToHomePageItem(position)
    MenSection ()
})
quickLinks[1].addEventListener("click",function(){
    const position = 0;
    backToHomePageItem(position)
    WomenSection()
})
quickLinks[2].addEventListener("click",function(){
    shopCollection.style.display = "block";
})
//animation
function animationCool(){
window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    // console.log(scrollHeight)

    if(scrollHeight >= 0 && scrollHeight <= 700){
        document.querySelector(".section-body").classList.add("section-body-animation")}
    // }else if (scrollHeight > 700){
    //     document.querySelector(".section-body").classList.remove("section-body-animation")
    //     document.querySelector(".section-body").style.position = "none";
    //     document.querySelector(".section-body").style.opacity = 1;
    // }
})
}animationCool()

