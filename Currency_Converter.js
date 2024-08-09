const URLbase="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdown=

document.querySelectorAll(".dropdown select");
const butt=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");


for(let select of dropdown){
    for (Currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=Currcode;
        newoption.value=Currcode;
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag=(element)=>{
    let Currcode=element.value;
    let countryCode=countryList[Currcode];
    let newsrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}

butt.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    console.log(amtval);
    if(amtval=""||amtval<1){
        amtval=1;
        amount.value="1";
    }
    console.log(fromCurr.value);
    console.log(toCurr.value);
    const urll=`${URLbase}/${fromCurr.value}/${toCurr.value}.json`
    console.log(urll);
    let response=await fetch(urll)
    console.log(response);
})