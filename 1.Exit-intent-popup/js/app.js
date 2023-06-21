// var form = document.forms.myForm
// var name = document.forms.myForm.name.value
// var email = document.forms.myForm.email.value
// let lang = document.forms.myForm.lang.value


// // alert("this is language" + lang);

//     // form.addEventListener("submit", function(event) {

//     // }

// function setCookies() {
// 	document.cookie = "name=" + document.forms.myForm.username.value;
// 	document.cookie = "email=" + document.forms.myForm.email.value;
// 	document.cookie = "lang=" + document.forms.myForm.lang.value;
// 	// alert("Cookies are set");
// }
  
// function getCookies(){
// 	var cookiesArray = document.cookie.split(";");
// 	for (var i = 0; i < cookiesArray.length; i++){
// 		var valueArray = cookiesArray[i].split("=");
// 		if (valueArray[0].trim() == "name"){
// 			document.forms.myForm.username.value = valueArray[1];
// 			}
// 			else if (valueArray[0].trim() == "email"){
// 				document.forms.myForm.email.value = valueArray[1];
// 				}
// 				else if (valueArray[0].trim() == "lang"){
// 					document.forms.myForm.lang.value = valueArray[1];
// 				}



// 		console.log(valueArray);
// 	}
// 	// alert(cookiesArray);
// 	// console.log(cookiesArray);
// }





// function checkCookie() {
// 	let username = getCookie("username");
// 	if (username != "") {
// 	 alert("Welcome again " + username);
// 	} else {
// 	  username = prompt("Please enter your name:", "");
// 	  if (username != "" && username != null) {
// 		setCookie("username", username, 365);
// 	  }
// 	}
//   }