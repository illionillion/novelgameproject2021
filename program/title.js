window.onload=function(){

  const title_music="audio/Datura_inst.m4a";
  music_file_path=title_music;console.log(music_file_path);
  setTimeout(() => {
    // audio_start();
    // music_file=new Audio(title_music);
    // music_file.play();
  }, 1500);
}

$('#title_frame').click(function(){
  $('#title_btn').removeClass('none');
  const title_music="audio/Datura_inst.m4a";
  music_file_path=title_music;console.log(music_file_path);
  audio_start();
})