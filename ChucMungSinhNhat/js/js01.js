console.log('ready');

var james = $('#bond');

var right = function () {
  james.animate({ left: '5px' }, 600, left);
};

var left = function () {
  james.animate({ left: '0px' }, 600, right);
};
right();

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  audio.play().catch((error) => console.log('Autoplay bị chặn: ', error));
});
document.addEventListener('DOMContentLoaded', () => {
  // Lấy phần tử audio
  const audio = document.getElementById('birthdaySong');

  // Lắng nghe sự kiện mở modal
  $('#myModal').on('shown.bs.modal', function () {
    // Phát nhạc khi modal hiển thị
    audio.play().catch((error) => console.log('Không thể phát nhạc: ', error));
  });

  // Tạm dừng nhạc khi modal bị đóng
  $('#myModal').on('hidden.bs.modal', function () {
    audio.pause();
    audio.currentTime = 0; // Reset thời gian về 0
  });
});
