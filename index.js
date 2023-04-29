let concat=" "
const getTag=()=>{

    const getName=document.getElementById("name");
    
    // console.log(getName.value);
    if((getName.value)===""){
        return alert("Please Enter Your Name")
    }
    const divtag=document.createElement("div");

    const elem=document.querySelector(".tags").append(divtag)
    divtag.setAttribute("class","tag");
    const ElemName=getName.value;
    concat=`Hey, I am ${ElemName}`;
    // console.log(concat)
    divtag.innerText=concat
   
 }