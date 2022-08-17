//navigation system 


const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');


let activeLink = 0;


links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000)
        }
    })
})

var form = document.getElementById('form')
var message = document.getElementById('message')
var error = []
var succcess =""

form.addEventListener('submit',function(e){
    e.preventDefault() //prevents form from submiting automatically
    
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    
    // if(name.value == ""){
    //   error.push("name is required")  
    // }
    // if(email.value == ""){
    //     error.push("email is required")
    // }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
    {
        alert("form submitted successfully")
        message.innerText = error
        return (true)
    }
    else
    {
        alert("You have entered an invalid email address!")
    }
})


