const url="https://api.thecatapi.com/v1/images/search";
const api=document.querySelector(".api");

const getResult=async()=>{
    let response= await fetch(url);
    console.log(response);//json format
    //ajaj
   let data= await response.json();//.json returns second promise and will give useable format data
   api.src=data[0].url;
   console.log(data);
};