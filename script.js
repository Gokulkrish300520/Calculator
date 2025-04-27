const buttonvalues=document.querySelectorAll("button");
const result=document.getElementById("display");

for(let i=0;i<buttonvalues.length;i++){
    buttonvalues[i].addEventListener("click",()=>{
        const butvalue=buttonvalues[i].textContent;
        if(butvalue=='C'){
            clear();
        }
        else if(butvalue=="="){
            calculation();
        }
        else{
            appendvalue(butvalue);
        }
    })
}
function clear(){
    result.value="";
}
function calculation(){
    result.value=eval(result.value)
}
function appendvalue(bvalue){
    result.value += bvalue;
}