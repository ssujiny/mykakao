//돔 선언
const $bell = document.querySelector('.bell');

//알림 on/off 설정
$bell.addEventListener('click', (evt)=>{
  evt.preventDefault();
  $bell.classList.toggle('off');
});


