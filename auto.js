const divecontainer = document.querySelector("#body")

const names = ["Bilal khan","zakriya khan","Zia ul haq","Hamid ali","Car"] 

let nameindex = 0;
let charindex = 0 ;
calback()
 function calback(){
    charindex++

divecontainer.innerHTML = `
        <h2>My name ${names[nameindex].slice(0,1) === "C" ? "an":"a"} ${names[nameindex].slice(0,charindex)}</h2> 
        `

        if(charindex === names[nameindex].length){
           nameindex++
           charindex = 0            
        }
        if(nameindex === names.length){
            nameindex = 0
        }

setTimeout(calback,300)
    }