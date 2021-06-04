var now_page="A1";

var hero_name="";

var all_num=text_data[now_page]['text_data'].length;
var num=0;
var backnum=0;

//getElement
const text_frame=document.getElementById('text_frame');
const option_area=document.querySelector('#option_area');
//

//次へボタン
function next(){
  var phrase=text_data[now_page]['text_data'];
  all_num=phrase.length;
  var output_text=phrase[num];
  event_check(output_text);
  // text_frame.innerHTML=output_text;
  // num++;
  // console.log(num);
}

function back(){

  if(backnum>0){
    num--;
    backnum--;
    console.log(num);
    var phrase=text_data[now_page]['text_data'];
    console.log(phrase);
    var output_text=phrase[backnum];
    console.log(output_text);
    replace_name(output_text);
    console.log(backnum);
    // text_frame.innerHTML=output_text;    
  }

}

function skip(){
  num=all_num-2;
  backnum=num-1;
  next();
}

//イベントないかチェック
function event_check(event){
  if(event=="name_event"){
    name_event();
  }else if(event==""){
    alert('終了です');
  }else if(event=="chose_event"){
    option_area.classList.remove('none');
    alert('終了です');

  }else{

    replace_name(event);

    backnum=num;
    num++;
    console.log(num);
    console.log(backnum);
  }

}

function replace_name(name){
  if(hero_name!=rand_name){
    var result = name.replace(rand_name, hero_name);

    //「str」と「result」が同じ文字列になるまで繰り返す
    while(result !== name) {

      name = name.replace(rand_name, hero_name);
      result = result.replace(rand_name, hero_name);

    }

    console.log( result );

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
    next();    
  }else{
    // hero_name="アーロン";
    // num--;
  }

}