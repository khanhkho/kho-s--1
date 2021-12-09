
function Check() {
    var x = document.getElementById('email').value;
    var y = document.getElementById('phone').value;
    var z = document.getElementById('date').value;
    var p = document.getElementById('pass').value;
    var pp = document.getElementById('repass').value;
    if(x == "") {
        document.getElementById('erro').innerHTML="Email không được để trống"
               
    }else {
        document.getElementById('erro').innerHTML=""      
    }
    if(y == "") {
        document.getElementById('erro1').innerHTML="nhập số điện thoại"               
    }else  if(y.length<10 || y.length>11) {
        document.getElementById('erro1').innerHTML="Số điện thoại không đúng"               
    }
    else {
        document.getElementById('erro1').innerHTML=""       
    }
    if(z == "") {
        document.getElementById('erro2').innerHTML="chưa nhập ngày sinh"
        // return false;       
    }else{
        document.getElementById('erro2').innerHTML=""
        // return false;
    }
    if(p == "") {
        document.getElementById('erro3').innerHTML="Mật khẩu không để trống"
               
    }else if(p.length < 6|| p.length > 20){
        document.getElementById('erro3').innerHTML="Mật khẩu không được ít hơn 6 kí tự và nhiều hơn 20 kí tự"
    }
    else{
        document.getElementById('erro3').innerHTML=""      
    }
    if(pp == "") {
        document.getElementById('erro4').innerHTML="nhập lại mật khẩu"
        return false;
               
    }
    if(pp!==p){
        document.getElementById('erro4').innerHTML="Mật khẩu nhập lại sai"
        return false;
    }
    else {
        document.getElementById('erro4').innerHTML="" 
        return false;    
    }
         
    }