

const WomensData = [];

class base {
    constructor(i, p, n) {
        this.image = i
        this.price = p
        this.name = n
    }
}


// child Object
class div extends base {
    constructor(n, p, b) {
        super(n, p, b)
    }
}

let d1 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010782115-Black-BLACK-1000010782115-15122021_01-2100.jpg", "599", "MAX Printed Round Neck T-shirt");
let d2 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010675132-Blue-Blue-1000010675132-11042021_01-2100.jpg", "699", "MAX Checked Casual Shirt");
let d3 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011112949-Yellow-GOLD-1000011112949-22022022_01-2100.jpg", "249", "MAX Printed Round Neck T-shirt");
let d4 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010782179-Green-GREEN-1000010782179-15122021-1_01-2100.jpg", "499", "MAX Printed Sports T-shirt")
let d5 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010728059-Black-BLACK-1000010728059-8122021_01-2100.jpg", "1399", "MAX Solid Formal Blazer")
let d6 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010716571-Blue-Blue-1000010716571-11112021_01-2100.jpg", "699", "MAX Floral Printed Casual Shirt")
let d7 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010717892-Red-Red-1000010717892-11302021_01-2100.jpg", "399", "MAX Textured Short Sleeves Top")
let d8 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010716257-Green-Green-1000010716257-11302021_01-2100.jpg", "799", "MAX Solid Knitted T-shirt")
let d9 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010675068-Blue-Midblue-1000010675068-11042021_01-2100.jpg", "1040", "MAX Printed Collared Tunic")
let d10 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010504033-Black-Black-1000010504033-8132021_01-2100.jpg", "1040", "MAX Solid Velour Hooded Jacket")
let d11 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010902350-Pink-BLUSH-1000010902350-2022022_01-2100.jpg", "399", "MAX Colourblocked Round Neck T-shirt")
let d12 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010755884-Green-Teal-1000010755884-11112021_01-2100.jpg", "399", "MAX Printed Blouson Top")
let d13 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011071317-Brown-LIGHTBROWN-1000011071317-31032022_01-2100.jpg", "799", "MAX Printed Round Neck Top")
let d14 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010836928-Blue-NAVY-1000010836928-15122021_01-2100.jpg", "299", "MAX Printed Round Neck T-shirt")
let d15 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010775346-Green-LtGreen-1000010775346-8122021_01-2100.jpg", "899", "MAX Embroidered Tunic")
let d16 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011071117-White-WHITE-1000011071117-21032022_01-2100.jpg", "499", "MAX Tropical Print Sleeveless Top")
let d17 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010716521-Pink-PINK-1000010716521-15122021_01-2100.jpg", "799", "MAX Checked Casual Shirt")
let d18 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010736160-Blue-MIDBLUE-1000010736160-8122021_01-2100.jpg", "1299", "MAX Solid Button Down Denim Tunic")
let d19 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010468357-Red-Red-1000010468357-11112021_01-2100.jpg", "299", "MAX Printed Round Neck T-shirt")
let d20 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010775397-Yellow-Yellow-1000010775397-8122021_01-2100.jpg", "699", "MAX Printed Three-Quarter Sleeves Tunic")
let d21 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010346320-Pink-Rosepink-1000010346320-11302021_01-2100.jpg", "799", "MAX Solid V-neck Casual Top")
let d22 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010902250-Pink-SALMON-1000010902250-29122021_01-2100.jpg", "399", "MAX Schiffli Detail T-Shirt")
let d23 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010794795-Yellow-Yellow-1000010794795-11112021_01-2100.jpg", "799", "MAX Solid Full Sleeves Shirt")
let d24 = new div("https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011070173-Blue-LIGHTBLUE-1000011070173-21032022_01-2100.jpg", "599", "MAX Striped Short Sleeves Shirt")


WomensData.push(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24)
console.log(WomensData);


// fetch("http://localhost:3000/womensData")
// .then(function(res){
//     return res.json()
// })
// .then(function(res){
//     console.log(res)
//     displayWomensData(res)
// })
// .catch(function(err){
//     console.log(err)
// })


let myBasket = JSON.parse(localStorage.getItem("basket")) || [];

// function addToWishlist() {
//     console.log('executed');
//     document.querySelector('#heartIcon').style.backgroundColor = 'red';
// }

// document.querySelector('#parentDiv').addEventListener('mouseover', function(event) {
//     console.log('executed');
//     event.document.querySelector(".innerDiv").style.visibilty = "visible";
// })

let displayWomensData = (WomensData) => {

    document.querySelector("#container").innerHTML = null;

    WomensData.map(({ image, price, name }) => {

        let parentDiv = document.createElement("div")
        parentDiv.setAttribute("id", "parentDiv")

        let childDiv1 = document.createElement('div');
        childDiv1.setAttribute('id', 'childDiv1');
        let childDiv2 = document.createElement('div');
        childDiv2.setAttribute('id', 'childDiv2');

        let iconDiv = document.createElement("div")
        iconDiv.setAttribute("id", "iconDiv")
        iconDiv.innerHTML = '<i class="fa-regular fa-heart" id="heartIcon">';
        iconDiv.addEventListener('click', function () {
            // iconDiv.innerHTML = '<i class="fa-solid fa-heart-circle-check"></i>';
            iconDiv.style.color = 'red';
        })
        let innerDiv = document.createElement("div")
        innerDiv.setAttribute("class", "innerDiv")

        let imageDiv = document.createElement("div")
        imageDiv.setAttribute("id", "imageDiv")

        let image1 = document.createElement("img")
        image1.src = image

        imageDiv.append(iconDiv, image1);

        let pricesign = document.createElement("p")
        pricesign.setAttribute("id", "pricesign")
        pricesign.innerText = `₹ ${price}`

        let name1 = document.createElement("p")
        name1.innerText = name

        let btn = document.createElement("button")
        btn.innerText = "ADD TO BASKET"

        let data = {
            image,
            name,
            price
        }

        btn.addEventListener("click", function () {
            addToBasket(data);
            window.location.reload();
        })

        innerDiv.append(pricesign, name1, btn);

        parentDiv.append(imageDiv, innerDiv)

        document.querySelector("#container").append(parentDiv)
    })
}


let addToBasket = (data) => {
    myBasket.push(data)

    localStorage.setItem("basket", JSON.stringify(myBasket));
    window.location.reload();
}


displayWomensData(WomensData)


let handlePrice = () => {

    var selected = document.querySelector("#price").value;

    if (selected === "High-to-Low") {
        WomensData.sort(function (a, b) {
            return b.price - a.price
        })
        displayWomensData(WomensData)
    }
    if (selected === "Low-to-High") {
        WomensData.sort(function (a, b) {
            return a.price - b.price
        })
        displayWomensData(WomensData)
    }

}

//  let show = () => {
//     document.querySelector(".innerDiv").style.visibilty = "visible";
//  }