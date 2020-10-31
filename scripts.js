/* Add your JavaScript to this file */
window.onload = function(){
    var message = document.querySelector(" div .message"); //div with the class message
    var form = document.querySelector("div form");
    
    // form.onclick = function () {newEntry()};
    
    form.onsubmit = function(){
        // var is_valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var user_email = document.getElementById("email").value
        

        if(user_email){
            message.innerHTML = "Thank you! Your email address " + user_email + " has been added to our mailing list!"
        } else {
            message.innerHTML = "Please enter a valid email address."
            
        }
       
        // $("#form")[0].reset();
    }
}