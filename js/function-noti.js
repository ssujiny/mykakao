//돔 선언
const $down = document.querySelector('.down');

const $noti = document.querySelector('.noti');

//채팅방 공지사항 열기/접기
$down.addEventListener('click', (evt)=>{
  evt.preventDefault();
  $noti.classList.toggle('visible');
});

