//navigation system 

/* In the code below, first am selecting all the links and sections. After that, I define "activeLink" this variable will track the current active section or link.
 Afte that, I use "forEach" method to loop thorough all the links.
Inside that, I access individual link and its index. 

Inside it first, am adding click event to link using "addEventListener".Then I use a simple condition to make sure the user is not clicking on the active link.
After that, I am removing the acitve class from the current active link using "classList.remove" and adding "active" class to the clicked link using "classList.add".
I am doing the same to remove the "active" class from the active section.

Once done with that, I am using a "setTimeout" to add a 1s delay in executing the below codes. Inside the timeout, it is just simply adding the active class again. */

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
    // if( /^[a-zA-Z0-9]+$/.test(document.getElementById("name").value))
    // {
    //     alert("form submitted successfully")
    //     message.innerText = error
    //     return (true)
    // }
    // else
    // {
    //     alert("Your name should contain alphabet a-z/A-Z and digits 0-9!")
    // }
    // function validatename(name){
    //     var nameRegex = /^[a-zA-Z0-9]+$/;
    //     return nameRegex.test(document.getElementById("name").value);
    //   }
})

// function ValidateEmail(email) 
// {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
//     {
//         return (true)
//     }
//     alert("You have entered an invalid email address!")
//     return (false)
// }
