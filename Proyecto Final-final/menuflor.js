var noti = document.querySelector('h1');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for(but of button)
{
    but.addEventListener('click', (e) =>{
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');


        //copiar y pegar el elemento//
        var parent= e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Comprar Ahora";
        
        if(clone){
            noti.onclick =()=>{
                select.classList.toggle('display');
            }
        }

    })
}