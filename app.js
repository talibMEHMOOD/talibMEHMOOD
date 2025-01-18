let service_id = "service_zd15lh9";
let public_key = "d6uhZkunI4puUIB0D";
let template_id = "template_0pc0ztz";
(function () {
    emailjs.init({
        publicKey: public_key,
    });
})();

function sendForm() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let name = document.getElementById("name").value;
    // document.getElementById('response-message').textContent = 'Message sent successfully!';

    var templateParams = {
        to_name: '',

        client_email: email,

        message: message,

        from_name: name

    }
    console.log('running',emailjs)
     emailjs.send(service_id,template_id,templateParams).then(
         (response) => {
            email = document.getElementById("email").value = "",
            message = document.getElementById("message").value = "",
            name = document.getElementById("name").value = "",


           console.log('SUCCESS!', response.status, response.text);
           alert('SUCCESS! EMAIL SEND')
        //    location.reload();
           console.log(email)
         },
         (error) => {
           console.log('FAILED...', error);
           alert("FAILED TO SEND EMAIL")
         },
       );
     }