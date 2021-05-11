$(function(){
  //script 영역 ajax 예
  $.ajax({
    url:'data.xml',
    dataType: 'xml',
    success: function(data){
      //실행문
      //console.log(data);
      //특정데이터를 가져오는 방법 1번
      //console.log($(data).find("item"));
      //특정데이터를 가져오는 방법 2번
      console.log($(data).find("item"));
      $("item",data).each(function(){
        //console.log($(this).find("link").text());
        //console.log($("link",this).text());
        //link text 가져오기
        let linkText = $("link",this).text();

        //description text 가져오기
        let desText=$("description",this).text();
        $("dl").append("<dt><a href='"+linkText+"'>"+linkText+"</a></dt><dd>"+desText+"</dd>")
      });
    }
  });

  //버튼에 온클래스를 추가하여 dl 노출을 toggle형태로 구현하시오.
  //toggleClass사용
  // $("button").click(function(){
  //   $(this).toggleClass("on");
  // });
  //if 사용
  // let thisClass = $(this).attr("class");
  // console.log(thisClass);
  // if( thisClass == "" || thisClass == undefined ){
  //   //"":attr로 클래스가 추가된 상태지만 romoveClass했으므} 빈상태임.
  //   $(this).addClass("on");
  // }else{
  //   $(this).removeClass("on");
  // }
  //hasClass사용->html파일에 class="on"추가.
  $("button").click(function(){
    if( $(this).hasClass("on") ){
      $(this).removeClass("on");
    }else{
      $(this).addClass("on");
    }
  });
});
