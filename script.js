let inputslider=document.getElementById("inputslider");
let slidervalue=document.getElementById("slidervalue");
let passwordspace=document.getElementById("passwordspace");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numeric=document.getElementById("numeric");
let specialsymbol=document.getElementById("specialsymbol");
let button=document.getElementById("button");
let copyicon=document.getElementById("copyicon");


slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent=inputslider.value;

});
button.addEventListener('click', ()=>{
    passwordspace.value=generatepassword();
})
let lowerchar="abcdefghijklmnopqrstuvwxyz";
let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num="1234567890";
let allsymbol="!@$%^&*~";


function generatepassword()
{
    let genpassword="";
    let allchars='';
    allchars+=lowercase.checked ? lowerchar :"";
    allchars+=uppercase.checked ? upperchar :"";
    allchars+=numeric.checked ? num :"";
    allchars+=specialsymbol.checked ? allsymbol :"";
    if(allchars=="" || allchars.length==0)
    {
        return genpassword;
    }
    let i=0;
    while(i<=inputslider.value)
    {
    genpassword+=allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    } 
    return genpassword;
} 
copyicon.addEventListener('click',()=>{
    if(passwordspace.value != "" || passwordspace.value.length>=1)
    {
        navigator.clipboard.writeText(passwordspace.value);
        copyicon.innerText="check";
        copyicon.title="password copied";
        setTimeout(()=>{
            copyicon.innerHTML="content_copy";
            copyicon.title="";
        },2000)

    }
   

});