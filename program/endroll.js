var endroll_num=100;
var endroll_intervalId;
var endroll_flag="normal";
var animation_speed=25;
var css_top;
var css_height;
var css_margin_top;

//エンドロールの速さ切り替え
function endroll_speed(){

  if(endroll_flag=="normal"){
    animation_speed=10;
    endroll_flag="high";
  }else{
    animation_speed=25;
    endroll_flag="normal";
  }

}

//エンドロールのスタートボタンが押された最初のみ発動
function endroll_go(){

  if(endroll_num==100){
    $("#back_title_btn").addClass("none");
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
    endroll();

  }
  
}

//エンドロールを流すプログラム
function endroll(){

  if (endroll_num>-css_height) {
    endroll_num--;
    $("#endroll").css({"top":endroll_num+"px"});
    endroll_startTimer();
  }else{
    clearInterval(endroll_intervalId);//タイマーをリセットする
    $("#back_title_btn").removeClass("none");
    $("#back_title_btn").attr("onclick","back_title_btn()");
  }

}

//↓関数の宣言↓
function endroll_startTimer(){
  endroll_intervalId=setTimeout(endroll,animation_speed);
}

function back_title_btn(){
  title_frame.classList.remove("none");
  document.querySelector('#endroll_frame').classList.add("none");

  //初期化
  now_page="A1";
  hero_name="????";
  // all_num=null;
  all_num=text_data[now_page]['text_data'].length;
  num=0;
  backnum=0;
  audio_file_path=text_data[now_page]['audio']['file_path'];
  music_file=null;
  result=null;
  text_animation=null;
  save_data={};
  endroll_num=100;
  endroll_flag="normal";
  animation_speed=25;
  character_name.innerHTML="";
  text_frame.innerHTML="";
}