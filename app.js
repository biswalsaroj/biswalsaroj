function feedback(){
    let title=document.getElementById('title');

title.innerText='no i am not fine';
let btn=document.getElementById('btn');
btn.style.display='none';
    
    console.log(title);
}
function convert(){
    let usd=document.getElementById('usd').value;
    let inr=(usd*81.61);
    //let btn=document.getElementsByClassName('btn')
  //console.log(usd.innerText=inr);
    let inr1=document.getElementById('inr');
    inr1.value=inr;

    //inr1.style.display='block';
}