var endroll_num=100;
var endroll_intervalId;
var endroll_flag="normal";
const animation_speed=25*3;
const animation_speed_f=15*3;
var animation_speed_n;
var css_top;
var css_height;
var css_margin_top;
var endroll_music="audio/Datura.m4a";

//エンドロールの速さ切り替え
function endroll_speed(){

  if(endroll_flag=="normal"){
    animation_speed_n=animation_speed_f;
    endroll_flag="high";
  }else{
    animation_speed_n=animation_speed;
    endroll_flag="normal";
  }

}

//エンドロールのスタートボタンが押された最初のみ発動
function endroll_go(){

  if(endroll_num==100){
    $("#back_title_btn").addClass("none");
    $("#change_endroll_speed").removeClass("none");
    document.querySelector('#endroll_frame').classList.remove("none");
    $("#endroll").css({"top":"100%"});
    css_top=$("#endroll").css("top");
    css_top= Number(css_top.replace( "px" , "" ));
    css_margin_top=$(".endroll_section").css("margin-top");
    css_margin_top= Number(css_margin_top.replace( "px" , "" ));
    css_height=$("#endroll").css("height");
    css_height= Number(css_height.replace( "px" , "" ))+css_margin_top;
    console.log(css_margin_top);

    endroll_num=css_top;
    // css_top+=css_height;
    console.log(css_top);
    music_file=new Audio(endroll_music);
    music_file.play();
    animation_speed_n=animation_speed;
    setTimeout(() => {
      endroll();      
    }, 12000);

  }
  
}

//エンドロールを流すプログラム
function endroll(){

  if (endroll_num>-(css_height-331)) {
    endroll_num--;
    $("#endroll").css({"top":endroll_num+"px"});
    endroll_startTimer();
  }else{
    clearInterval(endroll_intervalId);//タイマーをリセットする
    $("#change_endroll_speed").addClass("none");
    $("#back_title_btn").removeClass("none");
    $("#back_title_btn input").attr("onclick","back_title_btn()");
    $('#background_frame').removeClass();
    $('#background_frame').addClass("sougen");
    document.querySelector("#character_first").querySelector("img").setAttribute("src",'./character_img/transparent_background.png');
    document.querySelector("#character_center").querySelector("img").setAttribute("src",'./character_img/transparent_background.png');
    document.querySelector("#character_second").querySelector("img").setAttribute("src",'./character_img/transparent_background.png');
  }

}

//↓関数の宣言↓
function endroll_startTimer(){
  endroll_intervalId=setTimeout(endroll,animation_speed_n);
}

function back_title_btn(){
  title_frame.classList.remove("none");
  document.querySelector('#endroll_frame').classList.add("none");
  $('#view_start').removeClass('none');
  $('#title_btn_box').addClass('none');
  $('#user_frame').addClass('none');
  //初期化
  now_page="A1";
  hero_name="????";
  // all_num=null;
  all_num=text_data[now_page]['text_data'].length;
  num=0;
  backnum=0;
  music_file.pause();
  // music_file=null;
  audio_file_path=text_data[now_page]['audio']['file_path'];
  music_file=null;
  result=null;
  text_animation=null;
  save_data={};
  endroll_num=100;
  endroll_flag="normal";
  animation_speed_n=null;
  character_name.innerHTML="";
  text_frame.innerHTML="";
}