let a = document.querySelector(".add");
let c = `
<p>
<span class="line"></span> 
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
    <path d="M6 6L14 14" stroke="#C4C4C4"/>
    <path d="M6 14L14 6" stroke="#C4C4C4"/>
</svg>
</p>
`;

a.addEventListener('click',function(){
    let txt = document.querySelector(".txt").value;
    console.log(txt);
    document.querySelector(".lst").innerHTML += c;
    document.querySelector(".line").innerHTML = txt;
    
})

let sv = document.querySelectorAll(".lst svg");
console.log(sv);
sv.forEach((s)=>{
    s.addEventListener("click",function(){
        document.querySelector(".lst").removeChild(this.parentNode);
    })
});

sv.forEach((s)=>{
    s.addEventListener("mouseover",function(e){
        e.target.style.fill = '#833AE0';
    })
});

sv.forEach((s)=>{
    s.addEventListener("mouseout",function(e){
        e.target.style.fill = 'white';
    })
});

let svg = document.querySelectorAll(".svg")

// svg.forEach(s=>{
//     s.addEventListener("mouseover",function(e){
//         e.target.style.fill = "gray";
//     })
// })

// svg.forEach(s=>{
//     s.addEventListener("mouseout",function(e){
//         e.target.style.fill = "black";
//     })
// })
svg.addEventListener("click",function(){
    
})