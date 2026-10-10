const products = [
{ name: "Cà phê Arabica", price: 120000 , imgUrl:
"imagecopy.png"},
{ name: "Cà phê Robusta", price: 90000, imgUrl: "imagecopy2.png"
},
{ name: "Cà phê xanh", price: 180000, imgUrl: "image.png" },


];
const cardThing = document.getElementById("cardthing")



for(const product of products){
    const card = document.createElement("div")
    card.classList.add("product")

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    const cardImg = document.createElement("img")
    cardImg.classList.add("card-img")
    cardImg.src=`${product.imgUrl}`

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    const h3 = document.createElement("h3")
    h3.classList.add("title")
    h3.textContent=`${product.name}`

    const p = document.createElement("p")
    let pricing = product.price.toLocaleString("de-DE")
    p.classList.add("price")
    p.textContent=`${pricing}đ`


    const button = document.createElement("button")
    button.classList.add("button")
    button.textContent="add to cart"

cardContent.append(h3, p, button)

cardBody.append(cardImg, cardContent)

card.appendChild(cardBody)

cardThing.appendChild(card)

}




