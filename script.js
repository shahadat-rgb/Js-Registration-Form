const form      =document.getElementById("form");
const username =document.getElementById("username");
const email     =document.getElementById("email");
const number    =document.getElementById("number");
const password  =document.getElementById("password");
const cPassword =document.getElementById("cPassword");

form.addEventListener( 'submit',(event) => {
       event.preventDefault();
       formValidate();
})

const sendData =(usernameVal, sRate,count)=>{
    if (sRate == count ) {
        alert("Registration confirm successfully")
        swal("Good job! " + usernameVal, "Registration Successfully!", "success");
        // location.href =`demo.html?username=${usernameVal}`
       
        
    
}
}


const  successMsg = (usernameVal) =>{
    let formCon = document.getElementsByClassName("form-control");
      
    var count = formCon.length -1;
  for (let i = 0; i <formCon.length; i++) {
      if ( formCon[i].className == "form-control success" ) {
          var sRate = 0 + i;
          sendData(usernameVal,sRate,count);
      }else{
          return false;
      }
  
      
  }
}


   const  isEmail  =  (emailVal) => {
         const atSymbole =emailVal.indexOf("@")
         if (atSymbole <1 )  return false;
         var dot = emailVal.lastIndexOf(".")  
         if (dot <= atSymbole +2)  return false;  
         if ( dot === emailVal.length -1)  return false; 
      return true;
   }

   const   formValidate = () => {
    const usernameVal  = username.value.trim();
    const emailVal     =email.value.trim();
    const passwordVal  =password.value.trim();
    const cPasswordVal =cPassword.value.trim();
    const numberVal    =number.value.trim();
 
    if (usernameVal === "") {
        setErrorMsg( username,  "User name cannot be blank")
    }else if (usernameVal.length <=2) {
        setErrorMsg(username,"User name min 3 char")
    }else{
        setSuccessMsg(username);
    }

    if (emailVal === "") {
        setErrorMsg(email,"Email cannot be blank")
    }else if (! isEmail(emailVal)) {
        setErrorMsg(email,"Not a valid email")
    }else{
        setSuccessMsg(email);
    }

    
    if (numberVal === "") {
        setErrorMsg(number,"number cannot be blank")
    }else if (numberVal.length != 11) {
        setErrorMsg(number,"Not a valid number.minimum 11 char")
    }else{
        setSuccessMsg(number);
    }

    if (passwordVal === "") {
        setErrorMsg(password,"password cannot be blank")
    }else if (passwordVal.length <=5) {
        setErrorMsg(password,"Not a valid password.minimum 6 char")
    }else{
        setSuccessMsg(password);
    }

    if (cPasswordVal === "") {
        setErrorMsg(cPassword,"confirm password cannot be blank")
    }else if (passwordVal !== cPasswordVal  ) {
        setErrorMsg(cPassword,"Not a valid confirm password.minimum 6 char")
    }else{
        setSuccessMsg(cPassword);
    }

         successMsg(usernameVal);

 }

  function setErrorMsg(input, errorMsg) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");
       formControl.className="form-control error";
        small.innerText = errorMsg;

  }

  function setSuccessMsg(input) {
    const formControl = input.parentElement;
     formControl.className="form-control success";

}