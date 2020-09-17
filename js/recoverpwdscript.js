/*LOGIN POPUP*/
function loGin()
{
  var uname = document.getElementById('email').value;
  var pwd = document.getElementById('mk').value;
 
  if(pwd == '' && uname == '')
    alert("Hãy nhập mật khẩu và số điện thoại của bạn !");
  else if(pwd == '' || uname == '')
    alert("Hãy nhập đủ thông tin vào ô trống !");
  else if(uname.length < 10 || uname.length > 10)
    alert("Số điện thoại phải chứa 10 số !");
  else if(pwd.length < 8)
    alert("Mật khẩu phải chứa ít nhất 8 ký tự !");
  else
    alert("Bạn đã đăng nhập thành công. Chào mừng bạn đến với HHbook !");
}
/*REGISTER*/
function reGister()
{
  var pnumber = document.getElementById('phone').value;
  var nopt = document.getElementById('otp').value;
  var pwd1 = document.getElementById('mk1').value;

  if(pnumber == '' && nopt == '' && pwd1 == '')
    alert("Hãy nhập Số điện thoại và Mật Khẩu của bạn !");
  else if(pnumber == '' || nopt == '' || pwd1 == '') 
    alert("Hãy nhập đủ thông tin vào ô trống !");
  else if(pnumber.length < 10 || pnumber.length > 10)
    alert("Số điện thoại phải chứa 10 số !");
  else if(nopt.length < 8)
    alert("Mật khẩu phải chứa tối thiểu 8 ký tự !");
  else if(pwd1.length < 8)
    alert("Mật khẩu phải chứa tối thiểu 8 ký tự !");
  else
    alert("Bạn đã đăng ký thành công. Hãy bấm Trở lại để đăng nhập !");
}

function openForm()
{
  document.getElementById("id1").style.display = "block";  
}
function closeForm()
{
  document.getElementById("id1").style.display = "none";
}
function openForm1()
{
  document.getElementById("id2").style.display = "block";
}
function closeForm1()
{
  document.getElementById("id2").style.display = "none";
}
/*end*/

/*TAB*/
/*tab1*/
function selecttab1(){
  document.getElementById('Content1').style.display = "block";
  document.getElementById('Content2').style.display = "none";
  document.getElementById('Content3').style.display = "none";
}
function selecttab2(){
  document.getElementById('Content2').style.display = "block";
  document.getElementById('Content1').style.display = "none";
  document.getElementById('Content3').style.display = "none";
}
function selecttab3(){
  document.getElementById('Content3').style.display = "block";
  document.getElementById('Content1').style.display = "none";
  document.getElementById('Content2').style.display = "none";
}

/*tab2*/
function selecttab1a(){
  document.getElementById('Content1a').style.display = "block";
  document.getElementById('Content2a').style.display = "none";
  document.getElementById('Content3a').style.display = "none";
}
function selecttab2a(){
  document.getElementById('Content2a').style.display = "block";
  document.getElementById('Content1a').style.display = "none";
  document.getElementById('Content3a').style.display = "none";
}
function selecttab3a(){
  document.getElementById('Content3a').style.display = "block";
  document.getElementById('Content1a').style.display = "none";
  document.getElementById('Content2a').style.display = "none";
}

/*tab4*/
function selecttab1c(){
  document.getElementById('Content1c').style.display = 'block';
  document.getElementById('Content2c').style.display = 'none';
  document.getElementById('Content3c').style.display = 'none';
}
function selecttab2c(){
  document.getElementById('Content2c').style.display = 'block';
  document.getElementById('Content1c').style.display = 'none';
  document.getElementById('Content3c').style.display = 'none';
}
function selecttab3c(){
  document.getElementById('Content3c').style.display = 'block';
  document.getElementById('Content1c').style.display = 'none';
  document.getElementById('Content2c').style.display = 'none';
}
/*tab5*/
function selecttab1d(){
  document.getElementById('Content1d').style.display = 'block';
  document.getElementById('Content2d').style.display = 'none';
  document.getElementById('Content3d').style.display = 'none';
}
function selecttab2d(){
  document.getElementById('Content2d').style.display = 'block';
  document.getElementById('Content1d').style.display = 'none';
  document.getElementById('Content3d').style.display = 'none';
}
function selecttab3d(){
  document.getElementById('Content3d').style.display = 'block';
  document.getElementById('Content1d').style.display = 'none';
  document.getElementById('Content2d').style.display = 'none';
}
/*tab6*/
function selecttab1e(){
  document.getElementById('Content1e').style.display = 'block';
  document.getElementById('Content2e').style.display = 'none';
  document.getElementById('Content3e').style.display = 'none';
}
function selecttab2e(){
  document.getElementById('Content2e').style.display = 'block';
  document.getElementById('Content1e').style.display = 'none';
  document.getElementById('Content3e').style.display = 'none';
}
function selecttab3e(){
  document.getElementById('Content3e').style.display = 'block';
  document.getElementById('Content1e').style.display = 'none';
  document.getElementById('Content2e').style.display = 'none';
}
/*end*/
/*tab7*/
function selecttab1f(){
  document.getElementById('Content1f').style.display = 'block';
  document.getElementById('Content2f').style.display = 'none';
  document.getElementById('Content3f').style.display = 'none';
}
function selecttab2f(){
  document.getElementById('Content2f').style.display = 'block';
  document.getElementById('Content1f').style.display = 'none';
  document.getElementById('Content3f').style.display = 'none';
}
function selecttab3f(){
  document.getElementById('Content3f').style.display = 'block';
  document.getElementById('Content1f').style.display = 'none';
  document.getElementById('Content2f').style.display = 'none';
}
/*end*/
/*tab8*/
function selecttab1g(){
  document.getElementById('Content1g').style.display = 'block';
  document.getElementById('Content2g').style.display = 'none';
  document.getElementById('Content3g').style.display = 'none';
}
function selecttab2g(){
  document.getElementById('Content2g').style.display = 'block';
  document.getElementById('Content1g').style.display = 'none';
  document.getElementById('Content3g').style.display = 'none';
}
function selecttab3g(){
  document.getElementById('Content3g').style.display = 'block';
  document.getElementById('Content1g').style.display = 'none';
  document.getElementById('Content2g').style.display = 'none';
}
/*end*/
/*tab9*/
function selecttab1h(){
  document.getElementById('Content1h').style.display = 'block';
  document.getElementById('Content2h').style.display = 'none';
  document.getElementById('Content3h').style.display = 'none';
}
function selecttab2h(){
  document.getElementById('Content2h').style.display = 'block';
  document.getElementById('Content1h').style.display = 'none';
  document.getElementById('Content3h').style.display = 'none';
}
function selecttab3h(){
  document.getElementById('Content3h').style.display = 'block';
  document.getElementById('Content1h').style.display = 'none';
  document.getElementById('Content2h').style.display = 'none';
}
/*end*/
/*tab10*/
function selecttab1i(){
  document.getElementById('Content1i').style.display = 'block';
  document.getElementById('Content2i').style.display = 'none';
  document.getElementById('Content3i').style.display = 'none';
}
function selecttab2i(){
  document.getElementById('Content2i').style.display = 'block';
  document.getElementById('Content1i').style.display = 'none';
  document.getElementById('Content3i').style.display = 'none';
}
function selecttab3i(){
  document.getElementById('Content3i').style.display = 'block';
  document.getElementById('Content1i').style.display = 'none';
  document.getElementById('Content2i').style.display = 'none';
}
/*end*/
/*Recover pwd*/
function Recoverpwd(){
  var pwdemail = document.getElementById('emailpwd').value;
  var pwdphone = document.getElementById('phonepwd').value;

  if(pwdemail == '' && pwdphone == '')
    alert("Hãy nhập địa chỉ email và số điện thoại của bạn!");
  else if(pwdemail == '' || pwdphone == '')
    alert("Hãy nhập đủ thông tin vào ô trống!");
  else if(pwdemail == '')
    alert("Hãy nhập vào địa chỉ email của bạn!");
  else if(pwdphone == '')
    alert("Hãy nhập vào số điện thoại của bạn");
  else if(pwdphone.length < 10 || pwdphone.length >10)
    alert("Số điện thoại phải là 10 số");
  else 
    alert("Bạn đã điền thông tin khôi phục mật khẩu thành công, hãy kiểm tra email và xác nhận!");
}
/*end*/
/*GOTOTOP*/
$(document).ready(function(){
  $('#scrollTop').on('click', function(){
              $('html, body').animate({scrollTop:0},3000);
          })
          var totop = 500;
  $(window).scroll(function() {
    if($(this).scrollTop() >= totop)
    {
        $('#scrollTop').fadeIn();
    }else{
        $('#scrollTop').fadeOut();
    }
  })
})
  var totop = 500;
  $(window).scroll(function(){
      if($(this).scrollTop() >= totop)
      {
          $('#top').fadeIn();
      }else{
          $('#top').fadeOut();
      }
  })
/*end*/
/*NAVREPONSIVE*/
function openNav()
{
  document.getElementById("navPopup").style.display = "block";  
}
function closeNav()
{
  document.getElementById("navPopup").style.display = "none";  
}
/*end*/
function openFoot()
{
  document.getElementById("footer-off-on").style.display = "block";  
}
function closeFoot()
{
  document.getElementById("footer-off-on").style.display = "none";  
}
/*end*/
function footer_on()
{
  document.getElementById("footer").style.display = "block";  
}
function footer_off()
{
  document.getElementById("footer").style.display = "none";  
}
function footer_on1()
{
  document.getElementById("footer1").style.display = "block";  
}
function footer_off1()
{
  document.getElementById("footer1").style.display = "none";  
}
function footer_on2()
{
  document.getElementById("footer2").style.display = "block";  
}
function footer_off2()
{
  document.getElementById("footer2").style.display = "none";  
}
function footer_on3()
{
  document.getElementById("footer3").style.display = "block";  
}
function footer_off3()
{
  document.getElementById("footer3").style.display = "none";  
}
/*SHARE*/
/*SHARE*/
function shareOn()
{
  document.getElementById("share-on-off").style.display = "block"; 
}
function shareOff()
{
  document.getElementById("share-on-off").style.display = "none";  
}