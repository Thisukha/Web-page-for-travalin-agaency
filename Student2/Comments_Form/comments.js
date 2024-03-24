const stars = document.querySelectorAll(".rating");
var isClicked = false;

stars.forEach(star =>{
    star.addEventListener('mouseover', function(){
        if(!isClicked){
            for(let i = 0 ; i < star.id;i++){
                stars[i].style.fill = 'rgba(254, 99, 99, 0.772)';
            }
        }
    });

    star.addEventListener('mouseout', function(){
        if(!isClicked){
            for(let i = 0 ; i < star.id;i++){
                stars[i].style.fill = '#D9D9D9';
            }
        }
    });

    star.addEventListener('click', function(){
        isClicked = true;
        for(let i = 0 ; i < star.id;i++){
            stars[i].style.fill = 'red';
        }
        for(let i = star.id ; i < stars.length;i++){
            stars[i].style.fill = '#D9D9D9';
        }
    });
});



const emailfield = document.querySelector("#email");
emailfield.addEventListener("input", function () {
  const email = emailfield.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  if (!isValidEmail) {
    emailfield.setCustomValidity("Invalid email address");
  } else {
    emailfield.setCustomValidity("");
  }
});


const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",function(){
    isClicked = false;
    for(let i = 0 ; i < stars.length;i++){
        stars[i].style.fill = '#D9D9D9';
    }
});

const SubmitButton = document.querySelector("#send");
sendButton.addEventListener("click",function(){
    isClicked = false;
    for(let i = 0 ; i < stars.length;i++){
        stars[i].style.fill = '#D9D9D9';
    }
});