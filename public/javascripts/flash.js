let container=document.querySelector('.flash-container');

setTimeout(()=>{
    container.style.transform='rotate(0deg)';
    setTimeout(()=>{
        container.style.transform='rotate(90deg)';
    },2000);
},100);

