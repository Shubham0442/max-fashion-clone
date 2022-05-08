
let myBasket = JSON.parse(localStorage.getItem("basket")) 

// let xyz = JSON.parse(localStorage.getItem("totalAmount")) 

// let username = JSON.parse(localStorage.getItem("userName")) 

// let mobileNo = JSON.parse(localStorage.getItem("mobileNumber")) 

// console.log(xyz)


let displayBasketData = (myBasket)=>{
      
    myBasket.map(({image, name, price})=>{

    let box = document.createElement("div") 
    box.setAttribute("id","outerbox")

    let imge1 = document.createElement("img")
    imge1.src = image 

    let name1 = document.createElement("p") 
    name1.innerText = name 

    let price1 = document.createElement("h4") 
    price1.innerText = `Price: ₹ ${price}` 

    let qty = document.createElement("p") 
    qty.innerText = `Qty: 1` 

    let max = document.createElement("p") 
    max.innerText = "MAX" 

    let innerBox1 = document.createElement("div") 
    innerBox1.setAttribute("id","innerBox1")

    let innerBox2 = document.createElement("div") 
    innerBox2.setAttribute("id","innerBox2") 

    let Hr = document.createElement("hr") 
    

    let smallBox = document.createElement("div") 

    smallBox.setAttribute("id", "smallBox")
    smallBox.append(qty,price1)

    innerBox1.append(imge1) 
    innerBox2.append(max,name1,smallBox)

    box.append(innerBox1, innerBox2) 

    document.querySelector("#div1").append(box)
    
  })
   
}
   
displayBasketData (myBasket) 

let total = myBasket.reduce(function (sum,elem){
    return sum + Number(elem.price);
},0)



        let cutoffPrice = (total * 10/100)

        total = total - cutoffPrice
    
        console.log(total) 

let subtotal =  document.querySelector("#Subtotal")
subtotal.innerText = `₹ ${total}` 

let Total =  document.querySelector("#Total")
Total.innerText = `₹ ${total}`

        
let payment = () => {
  alert('Payment Successful');
  window.location.href = 'index.html';
}


// document.querySelector("form").addEventListener("click", myformData) 

// function myformData () 
// {
//     event.preventDefault()

//     // let name = document.querySelector("#name1").value 
//     // name = username 

//     // let mob = document.querySelector("#mobNo").value  

//     // let pin1 = document.querySelector("#pin1").value 

//     // let city = document.querySelector("#city").value 

//     // let state = document.querySelector("#state").value 

//     // let Building  = document.querySelector("#build").value 

//     // let street = document.querySelector("#street").value 

//     // let address = document.querySelector("#add").checked 

//     // let pay = document.querySelector("#y").checked 

//     // let bill = document.querySelector("#billcheck").checked

//     // let cardNo = document.querySelector("#x").value 
    
//     // let expi = document.querySelector("#x").value  

//     // let cvv = document.querySelector("#cvv").value 
   
//     alert("Payment Successful") 
//     alert("Your order has been placed")
//     window.location.href = "index.html"

// }