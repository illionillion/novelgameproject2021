var now_page="A1";

var hero_name="";

var all_num=text_data[now_page]['text_data'].length;
var num=0;
var backnum=0;
var audio_file_path=text_data[now_page]['audio']['file_path'];
var music_file=null;

//getElement
const character_name=document.getElementById('character_name');
const text_frame=document.getElementById('text_area');
const option_area=document.querySelector('#option_area');
//

//次へボタン
function next(){
  var phrase=text_data[now_page]['text_data'];
  all_num=phrase.length;
  var output_charname=phrase[num]['name'];
  var output_text=phrase[num]['text'];
  console.log(text_data);
  backnum=num;
  num++;
  console.log(num);
  console.log(backnum);
  audio_start();
  event_check(output_charname,output_text);
  // text_frame.innerHTML=output_text;
  // num++;
  // console.log(num);

  //Audio-Test
  // var music_file=new Audio('audio/bgm_town.mp3');
  // music_file.play();
}

function back(){

  if(backnum>0){
    num--;
    backnum--;
    console.log(num);
    var phrase=text_data[now_page]['text_data'];
    console.log(phrase);
    var output_charname=phrase[num]['name'];
    var output_text=phrase[num]['text'];
    console.log(output_text);
    replace_name(output_charname,output_text);
    console.log(backnum);
    // text_frame.innerHTML=output_text;    
  }

}

function skip(){

  audio_start();

  num=all_num-2;
  backnum=num-1;
  next();
}

//イベントないかチェック
function event_check(char,event){
  if(event=="name_event"){
    name_event();
  }else if(event==""){
    alert('終了です');
  }else if(event=="chose_event"){
    option_area.classList.remove('none');
    alert('終了です');

  }else{
    //文章描画
    replace_name(char,event);

  }

}

function replace_name(char2,name){
  if(hero_name!=rand_name){
    // console.log(char2);
    // console.log(name);
    var result_name=char2.replace(rand_name, hero_name);
    // var result_name=null
    var result = name.replace(rand_name, hero_name);
    // console.log(result);

    //「str」と「result」が同じ文字列になるまで繰り返す
    while(result !== name) {

      name =name.replace(rand_name, hero_name);
      result = result.replace(rand_name, hero_name);
      // console.log(name);
      // console.log(result);

    }

    console.log( result );

    character_name.innerHTML=result_name;
    text_frame.innerHTML=result;
  }
}

//名前入力のイベント
function name_event(){
  var user_name = window.prompt("自分の名前を入力してください", "アーロン");
  if(user_name){
    hero_name=user_name;
    console.log(hero_name);
    now_page="A2";
    num=0;
    
    if(audio_file_path){
      music_file.pause();
    }

    audio_file_path=text_data[now_page]['audio']['file_path'];

    next();    
  }else{
    // hero_name="アーロン";
    // num--;
  }

}

function audio_start(){
  if(num==0){
    if(audio_file_path){
      console.log(audio_file_path);
      music_file=new Audio(audio_file_path);
      music_file.play();
    }
  }
  //音楽リピート再生用
  if(audio_file_path){
    music_file.addEventListener("ended", function () {
      music_file.currentTime = 0;
      music_file.play();
    }, false);
  }
}
