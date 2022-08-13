const text = {
     wel: "Hi, i'm Daniel",
     dev: "A Web Developer From Iran."
}

let type;
window.addEventListener("load", ()=>{
     window.scrollTo(0,0);
     if(localStorage.getItem("type") === null){
          document.querySelector("html").style.overflow = "hidden";
          type = false;
          localStorage.setItem("type", true);
     }else{
          type = true;
     }
});
setTimeout(() => {
     let typed = new Typed(
          'header h2', {
               strings: [text['wel']],
               typeSpeed: 100,
               showCursor: false,
               onComplete: () => {
                    setTimeout(()=>{
                         let typed = new Typed(
                              'header p', {
                                   strings: [text['dev']],
                                   typeSpeed: 80,
                                   showCursor: false,
                                   onComplete: ()=>{
                                        if(!type){
                                             document.querySelector("html").style.overflow = "visible";
                                             setTimeout(()=>{
                                                  document.querySelector(".services").scrollIntoView();
                                             },1000);
                                        }
                                   }
                              }
                         )
                    },1500);
               }
          }
     );
}, 1000);
let btns = document.querySelectorAll(".card button");
let modal, close;
btns.forEach((el)=>{
     el.addEventListener("click", ()=>{
          modal = document.querySelector(".modal");
          modal.classList.add("show");
          if(document.documentElement.requestFullscreen){
               document.documentElement.requestFullscreen();
          }else if(document.documentElement.webkitRequestFullscreen){
               document.documentElement.webkitRequestFullscreen();
          }
     });
});
close = document.querySelector(".modal .close");
close.addEventListener("click", ()=>{
     modal.classList.remove("show");
     if(document.exitFullscreen) {
          document.exitFullscreen();
     }else if(document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
     }
});

function check(){
     let 
     FirstName = document.forms['order']['FirstName'],
     LastName = document.forms['order']['LastName'],
     PhoneNumber = document.forms['order']['PhoneNumber'],
     Service = document.querySelector("input[name=service]:checked"),
     CompanyName = document.forms['order']['CompanyName'],
     Desc = document.forms['order']['Desc'];
     if(FirstName.value !== "" && LastName.value !== "" && PhoneNumber.value !== "" && Desc.value !== ""){
          document.querySelector(".modal main form p").innerHTML = "Please Wait...";
          setTimeout(()=>{
               document.querySelector(".modal main form p").innerHTML = "";
          },5000);
          window.location.href = "mailto:imdanieldev@outlook.com?subject=Order Service&body=First Name: "+FirstName.value+"%0A"+"Last Name: "+LastName.value+"%0A"+"Phone Number: "+PhoneNumber.value+"%0A"+"Service: "+Service.value+"%0A"+"Company Name: "+CompanyName.value+"%0A"+"Description: "+"%0A"+Desc.value;
     }else{
          document.querySelector(".modal main form p").innerHTML = "Please Fill All Fields.";
     }
     return false;
}