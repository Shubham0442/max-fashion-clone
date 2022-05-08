// Header and Footer part starts here
import { navbar, footer } from '../components/headerFooter.js';

document.querySelector('#nav').innerHTML = navbar();
document.querySelector('#footer').innerHTML = footer();

window.onscroll = function () {
    myFunction();
}

var navbar2 = document.querySelector('#navbar2');
var sticky = navbar2.offsetTop;

function myFunction() {
    console.log(sticky);
    if (window.pageYOffset >= sticky) {
        console.log("x");
        navbar2.classList.add("sticky");
    } else {
        console.log("y");
        navbar2.classList.remove("sticky");
    }
}

function landHome() {
    window.location.href = 'index.html';
}

document.querySelector('#mainLogo').addEventListener('click', landHome);

let userName = JSON.parse(localStorage.getItem('userName'));

console.log('userName: ', userName);
if (userName != null) {
    document.querySelector('#user').innerHTML = "Hello " + userName[0];
}
// Header and Footer part ends here

// creating an Array of objects using class constructor 

let ShopPlusSize = [];
let shopByCategory = [];

// parent object
class base {
    constructor(i, n) {
        this.image = i
        this.name = n
    }
}


// child Object
class div extends base {
    constructor(n, b) {
        super(n, b)

    }
}


let div1 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-1-Desktop-Women-C17APRIL2022.jpg", "Top & Tees");
let div2 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-2-Desktop-Women-C17APRIL2022.jpg", "Dresses");
let div3 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-3-Desktop-Womenn-C17APRIL2022.jpg", "Kurtas");
let div4 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-4-Desktop-Women-26April2022.jpg", "Sleepwear")
let div5 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-5-Desktop-Women-26April2022.jpg", "Denims")
let div6 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-6-Desktop-Women-C17APRIL2022.jpg", "Sportswear")

ShopPlusSize.push(div1, div2, div3, div4, div5, div6)
console.log(ShopPlusSize)

let div7 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-1-Desktop-Women-C17APRIL2022.jpg", "Topwear")
let div8 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-2-Desktop-Women-C17APRIL2022.jpg", "Dresses")
let div9 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-3-Desktop-Women-C17APRIL2022.jpg", "Bottom wear")
let div10 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-4-Desktop-Women-C17APRIL2022.jpg", "Indian wear")
let div11 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-5-Desktop-Women-C17APRIL2022.jpg", "Activewear")
let div12 = new div("https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-6-Desktop-Women-C17APRIL2022.jpg", "Footwear & Accessories")



// 

// document.querySelector("#Shop-By-Category:first-child").addEventListener(function (){
//     goToTop ()
// })




shopByCategory.push(div7, div8, div9, div10, div11, div12)

console.log(shopByCategory)




// appending data on UI 
let displayShopPlusSize = (ShopPlusSize) => {

    document.getElementById("Shop-Plus-Size").innerHTML = null

    ShopPlusSize.map(({ image, name }) => {
        let div = document.createElement("div")

        let image1 = document.createElement("img")
        image1.src = image

        let name1 = document.createElement("p")
        name1.innerText = name

        div.append(image1, name1)



        document.getElementById("Shop-Plus-Size").append(div)

    })

}

let displayshopByCategory = (shopByCategory) => {
    document.getElementById("Shop-By-Category").innerHTML = null

    shopByCategory.map(({ image, name }) => {
        let div = document.createElement("div")
        div.setAttribute("id", "box1")

        let image1 = document.createElement("img")
        image1.src = image

        let name1 = document.createElement("p")
        name1.innerText = name

        div.append(image1, name1)

        div.addEventListener("click", function () {
            goToTop()
        })

        // div.onclick = () =>{
        //     goToTop ()
        // }

        document.getElementById("Shop-By-Category").append(div)

    })

}

displayShopPlusSize(ShopPlusSize)
displayshopByCategory(shopByCategory)

// div7.addEventListener("click", goToTop)

let goToTop = () => {
    window.location.href = "womens-product.html"
}

let basketData = JSON.parse(localStorage.getItem('basket'));
if (basketData == null) {
    document.querySelector('#basketCounter').style.visibility = "hidden";
} else {
    document.querySelector('#basketCounter').innerText = basketData.length;
    document.querySelector('#basketCounter').style.visibility = "visible";
    console.log(basketData);
}