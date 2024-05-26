const colorList=["red","blue","black","#615EFC","#E49BFF","#FF9F66","#CAF4FF"];
function randomColor(){
    return Math.floor(Math.random()*colorList.length)
}
console.log(randomColor());
const getButton=document.querySelector("button");
const body=document.querySelector("body")
getButton.addEventListener("click",()=>{
    const bgcolor=colorList[randomColor()];
    const getHeading=document.querySelector("h4");
    const btnColor=document.querySelector("button")
    if(bgcolor=="black"){
        
        body.style.backgroundColor=`${bgcolor}`;
        getHeading.textContent=`background-color:${bgcolor}`
        getHeading.style.color="white"
        btnColor.style.color="white"
        
    }
    else{
        getHeading.style.color="black"
        getHeading.textContent=`background-color:${bgcolor}`
        body.style.backgroundColor=`${bgcolor}`;
        btnColor.style.color="black"
    }
    
    
})