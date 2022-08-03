
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    alert("Copied the number.");
 }

 function Submit(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    let alpha = /^[a-zA-Z]+$/
    if((fname == 0) || (fname.match(alpha) == false)){
    alert("First name can not be empty!")
    return false
    }
    else if((lname == 0 ) || (lname.match(alpha) == false)){
    alert("Last name can not be empty!")
    return false
    }
    else{
    alert("Hello "+fname+" "+ lname+". Successfully submitted!")
    return true
    }
} 

var app = new Vue({
    el: '#app',
    data: {
      isHidden: false
    }
  })