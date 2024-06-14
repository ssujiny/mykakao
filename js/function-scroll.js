const $section = document.querySelector('#wrap>section');

//딱 들어오면...채팅창 스크롤 바닥으로
window.addEventListener('load', function(){
  $section.scrollTop = $section.scrollHeight;
});

