$('#view_start').click(function(){
  $('#view_start').addClass('none');
  $('#title_btn_box').removeClass('none');
  $('#user_frame').removeClass('none');
  const title_music="audio/Datura_inst.m4a";
  audio_file_path=title_music;
  console.log(audio_file_path);
  audio_start();
})