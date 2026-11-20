function CheckPassword(){
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if(password == confirmpassword){
       alert("ลงทะเบียนสำเร็จ");
       return true;
    
    }else{
        alert("กรุณาตรวจสอบข้อมูลและรหัสผ่านอีกครั้ง");
        return false;
    }
}

    