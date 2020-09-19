let carts= document.querySelectorAll('.add-cart');

let products =[
    {
        name
    }
]

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() => {
        carNumbers();
    })
}

function carNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    

    
    localStorage.setItem('cartNumbers', 1);

}
