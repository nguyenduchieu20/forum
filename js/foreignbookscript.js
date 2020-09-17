$(document).ready(function(){
    $('#scrollTop').on('click', function(){
        $('html, body').animate({scrollTop:0},3000);
    } );
    
    
    $(document).on('click','buy-now', function(e){
   e.preventDefault();
   alert('a');
  });
  
  
    var totop = 500;
  $(window).scroll(function() {
  if($(this).scrollTop() >= totop)
  {
  $('#scrollTop').fadeIn();
  }else{
  $('#scrollTop').fadeOut();
  }
  });


 
  
  } );



  /*LOGIN POPUP*/
function loGin()
{
  var uname = document.getElementById('email').value;
  var pwd = document.getElementById('mk').value;
  if(pwd == '' && uname == '')
    alert("Hãy nhập mật khẩu và số điện thoại/email của bạn !");
  else if(pwd == '' || uname == '')
    alert("Hãy nhập đủ thông tin vào ô trống !");
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
    alert("Số điện thoại phải chứa 10 chữ số !");
  else if( nopt.length < 8)
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

  
  /*NAVREPONSIVE*/
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





function book_title_on()
{
  document.getElementById("move").style.display = "block";  
}
function book_title_off()
{
  document.getElementById("move").style.display = "none";  
}



function shareOn()
{
  document.getElementById("share-on-off").style.display = "block"; 
}
function shareOff()
{
  document.getElementById("share-on-off").style.display = "none";  
}


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
