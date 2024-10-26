

$(document).ready(function(){
    gnbUp();
    changeDisplay();
    listdragSlider();
    heightChange();
});






function gnbUp(){
    $('header > div:last-of-type > nav > ul > li > ul').hide();
    $('header > div:last-of-type > nav > ul > li').hover(

        function(){
            $(this).children('ul').stop(true,true).fadeIn(300);
        },
        function(){
            $(this).children('ul').stop(true,true).fadeOut(300);
        }
    );
};

function changeDisplay(){
    $('.updisplay').click(function(event){
        $('body > div:first-of-type > div:last-of-type').hide().fadeIn(300);
        event.preventDefault();
    });
    $('.closeHaaland').click(function(){
        $('body > div:first-of-type > div:last-of-type').show().fadeOut(300);
    })                                                                   
}


function listdragSlider(){

    const $slider = $('.sportsList');
    let isDown = false;
    let startX;
    let scrollLeft;

    $slider.on('mousedown', function(e) {
        isDown = true;
        $slider.addClass('active');
        startX = e.pageX - $slider.offset().left; // 시작점 설정
        scrollLeft = $slider.scrollLeft(); // 현재 스크롤 위치 저장
        e.preventDefault(); // 기본 클릭 동작 방지 (링크 클릭 방지)
      });
  
      // 마우스 이동 시 (드래그 중일 때만)
      $(document).on('mousemove', function(e) {
        if (!isDown) return; // 마우스 버튼이 눌리지 않았으면 종료
        e.preventDefault();
        const x = e.pageX - $slider.offset().left; // X축의 마우스 좌표
        const walk = (x - startX) * 3; // 스크롤 속도 조절 (3배)
        $slider.scrollLeft(scrollLeft - walk); // 가로 스크롤만 이동
      });
  
      // 마우스를 놓거나 드래그 영역 밖으로 나갔을 때 드래그 해제
      $(document).on('mouseup', function() {
        isDown = false;
        $slider.removeClass('active');
      });
  
      // a 태그에서 발생하는 기본 클릭 동작 방지
      $slider.find('a').on('click', function(e) {
        if (isDown) {
          e.preventDefault(); // 드래그 중일 때는 링크 클릭 방지
        }
      });
};

// function heightChange(){
//   $(".botMenu > div > ul > li").hover(
//     function() {
//         $(".botMenu > div").stop(true,true).animate({ height: "100%" }, 200); // 200ms = 0.2s
//     },
//     function() {
//         $(".botMenu > div").stop(true,true).animate({ height: "240px" }, 200);
//     }
// );
// };
