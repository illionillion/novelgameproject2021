var endroll_num=100;
var endroll_intervalId;
var endroll_flag="normal";
var animation_speed="25";
var css_top;
var css_height;

//エンドロールの速さ切り替え
function endroll_speed(){

  if(endroll_flag=="normal"){
    animation_speed="10";
    endroll_flag="high";
  }else{
    animation_speed="25";
    endroll_flag="normal";
  }

}

//エンドロールのスタートボタンが押された最初のみ発動
function endroll_go(){

  if(endroll_num==100){
    document.querySelector('#endroll_frame').classList.remove("none");
    css_top=$("#endroll").css("top");
    css_top= Number(css_top.replace( "px" , "" )) ;
    css_height=$("#endroll").css("height");
    css_height= Number(css_height.replace( "px" , "" )) ;

    endroll_num=css_top;
    css_top+=css_height;
    console.log(css_top);
    endroll();

  }
  
}

//エンドロールを流すプログラム
function endroll(){

  if (endroll_num>-css_top) {
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
  hero_name="";
  all_num=null;
  num=0;
  backnum=0;
  audio_file_path=null;
  music_file=null;
  result=null;
  save_data={};
}