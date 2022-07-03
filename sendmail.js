function sendmail(){
    var params = {
        from_name: document.getElementsByName("name").Value,
        phone_no: document.getElementsByName("phone").Value,
        email_id: document.getElementsByName("email").Value,
        message: document.getElementsByName("message").Value
    }
    emailjs.sendForm("service_at4snql","template_p9lkjia",params,"CdBsBYDGFWzc0h3Lr").then
        ((result) => {
            console.log('SUCCESS!', result.text);
              }, (error) => {
            console.log('FAILED...', error.text);
         });
 }