const $talkroom2 = document.querySelector('.talkroom2');

//딱 들어오면...채팅창 스크롤 바닥으로
window.addEventListener('load', function(){
  $talkroom2.scrollTop = $talkroom2.scrollHeight;
});

