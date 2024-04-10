const containerE1 = document.querySelector(".gallery");
// console.log(containerE1);
const butn = document.querySelector(".btn");
// console.log(butn);
butn.addEventListener("click",()=>{
imagenum=9;
addNewImages();
})

function addNewImages(){
    for(let index=0;index<imagenum;index++){
        const newimage1=document.createElement("img");
        newimage1.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        containerE1.appendChild(newimage1);
    }
    
}
