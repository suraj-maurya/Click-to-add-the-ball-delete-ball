const myDivs1 = document.querySelector("#Box1");
const myDivs2 = document.querySelector("#Box2");
const mycontainer = document.querySelector(".container");


let i=1, j=1,k;
let newball=[""];
myDivs1.addEventListener('click', function(e) {
 if(i>110){
     i=0;
 }
 i++;
    console.log("Clicked Me");
    let color="#" +i +"f" + i +"ff1";
    mycontainer.style.backgroundColor = color;
    myDivs1.style.backgroundColor=color;
    let pg=document.createElement('p');
    pg.textContent=j;
    mycontainer.scrollTop = mycontainer.scrollHeight;
    
    mycontainer.append(pg); 
    pg.style.backgroundColor = color;

    newball[j]=pg;
    k=j;
    j++;
    
   
    
    
});
myDivs2.addEventListener('click', function(e){
   newball[k].remove();
   j=k;
   k--;
})
