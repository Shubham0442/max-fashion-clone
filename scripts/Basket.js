
let basketData = JSON.parse(localStorage.getItem("basket"))

let No_of_products = basketData.length 

console.log(No_of_products)

document.querySelector("#basket-length>p").textContent = `${basketData.length} Products` 



let displayBasket = (basketData) =>{

    document.getElementById("left").innerHTML = null

    basketData.map(({image, name, price})=>{
         
        let outerBox1 = document.createElement("div")
        outerBox1.setAttribute("id","outerBox1") 

        let innerbox1 = document.createElement("div")
        innerbox1.setAttribute("id","innerbox1") 

        let innerbox2 = document.createElement("div")
        innerbox2.setAttribute("id","innerbox2") 

        let innerbox3 = document.createElement("div")
        innerbox3.setAttribute("id","innerbox3") 

        let image2 = document.createElement("img") 
        image2.src = image 

        let name2 = document.createElement("p") 
        name2.innerText = name 

        let price2 = document.createElement("p") 
        price2.innerText = `₹ ${price}` 

        let picDiv = document.createElement("div")
        picDiv.setAttribute("id","picDiv")  

        let infoDiv = document.createElement("div")
        infoDiv.setAttribute("id","infoDiv")

        picDiv.append(image2) 

        infoDiv.append(name2,price2)
       
        innerbox1.append(picDiv, infoDiv)

        let iconbox = document.createElement("div")
        iconbox.innerHTML = '<i class="fa-regular fa-calendar-days"></i>'

        let Delivery = document.createElement("p")
        Delivery.innerText = `Delivery in` 
        Delivery.style.color = "gray" 

        let Pin = document.createElement("div") 
        Pin.innerText = `Enter Pincode above` 

        let midContent = document.createElement("p")
        midContent.setAttribute("id","midContent") 
        midContent.append(iconbox, Delivery, Pin) 

        let horLine = document.createElement("hr") 
        




        let Qty = document.createElement("select") 
        let Qty1 = document.createElement("option")
        Qty1.innerText = "Qty1"
        Qty.append(Qty1) 

        innerbox2.append(midContent, Qty) 

        let removeBtn = document.createElement("button") 
        removeBtn.innerText = "Remove" 

        let favBtn = document.createElement("button") 
        favBtn.innerText = "Move to favourites"
        
        let verLine = document.createElement("p") 
        verLine.innerText = "|" 

        innerbox3.append(removeBtn, verLine, favBtn) 

        
        outerBox1.append(innerbox1, innerbox2, horLine, innerbox3) 

        document.getElementById("left").append(outerBox1)
    })
}



displayBasket(basketData)
