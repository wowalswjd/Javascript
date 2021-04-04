var Links = {
    setColor:function(color) {
       var alist = document.querySelectorAll('a');
       var i = 0;
       while(i < alist.length) {
         alist[i].style.color = color;
         i=i+1;
       }
      // $('a').css('color', color); //웹페이지에 있는 모든 a태그를 jquery로 제어하겠다.
      <!--야간/주간모드일 때 링크 색깔을 해당색깔로 변경-->
    }
  } <!--link색깔설정도 객체화-->

  var Body = {
    setColor:function(color) {
      document.querySelector('body').style.color= color;
      //함수 밖으로 꺼내서 새로운 함수를 만든 것이므로 target이라는 변수사용x
      //$('body').css('color', color);
      },
    setBackgroundColor:function(color) {
      document.querySelector('body').style.backgroundColor=color;
      //$('body').css('backgroundColor', color);
      }
  } <!--Body라고 하는 변수에 객체(method)를 담는 과정-->


  function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
     Body.setBackgroundColor('black');
     Body.setColor('white');
     self.value = 'day';
     <!--야간모드일 때 배경 black, 글씨 white로 바꾸고 버튼 글자를 day로 변경-->

     Links.setColor('powderblue');
   } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    <!--주간모드일 때(평상시 모드)-->

    Links.setColor('blue');
   }
 }
//.js파일이므로 절대 script태그가 들어가서는 안됨!!
