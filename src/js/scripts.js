const items = [
 {
   id:0,
   name:'ANNMARIE',
   img:'assets/image1.jpg',
   quantity:0
 },
 {
  id:1,
  name:'PRESSED',
  img:'assets/image2.jpg',
  quantity:0
},
{
  id:2,
  name:'PRESSED',
  img:'assets/image3.jpg',
  quantity:0
},
{
  id:3,
  name:'MAUI',
  img:'assets/image4.jpg',
  quantity:0
},
{
  id:4,
  name:'AISRPUN',
  img:'assets/image5.jpg',
  quantity:0
},
{
  id:5,
  name:'CHANEL',
  img:'assets/image6.jpg',
  quantity:0
},
{
  id:6,
  name:'EX PRÚNIS',
  img:'assets/image7.jpg',
  quantity:0
},
{
  id:7,
  name:'PHARMA',
  img:'assets/image8.jpg',
  quantity:0
},
{
  id:8,
  name:'PHARMA',
  img:'assets/image9.jpg',
  quantity: 0
},

]
let countProducts  = document.getElementById('count-product')
items.map((val) =>{
  countProducts.innerHTML = `
                   <h4>Disponível : ${items.length}  Produtos</h4>
                    `
})


inicializarLoja = () =>{
  let containerProducts = document.getElementById('products') 
  items.map((val)=> {
  containerProducts.innerHTML += `
                               <div class="items" id="items">
                                  <img class="image-items" src="${val.img}" />
                                   <h3>${val.name}</h3>
                                   <p>R$<span>45,00</span></p>
                                   <a key="${val.id}" href="#"  class="add-cart">Adicionar carrinho</a>
                               </div>  `
  })
}
inicializarLoja()

atualizarCart = () => {
   let containerCart = document.getElementById('cart')
   containerCart.innerHTML = ""
   items.map((val)=>{
     if(val.quantity > 0){
     containerCart.innerHTML+=`
                             <div class="shopping-cart">
                               <img class="smaller-image" src="${val.img}" />
                               <p>${val.name} | Quantidade ${val.quantity}</p> 
                            </div> 
                           
     `

     }
   })
}

let links = document.getElementsByClassName('add-cart')

for(let i = 0; i < links.length ; i++ ){
  links[i].addEventListener("click", function(){
    let key = this.getAttribute('key')
    items[key].quantity++
    atualizarCart()
    return false;
  })
}

