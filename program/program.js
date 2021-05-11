var password=[];
var abc=[];

var first="a",last="z";

for(let i=first.charCodeAt(0);i<=last.charCodeAt(0);i++){
  abc.push(String.fromCharCode(i));

  // console.log("i="+String.fromCharCode(i));
  // console.log("abc=["+abc+"]");
}

// console.log("アルファベット\n abc=["+abc+"]");

for(let i=0;i<10;i++){
  var key=Math.floor(Math.random()* abc.length);

  password.push(abc[key]);

  // console.log(abc[key]);
  // console.log(password);
}

password=password.join(',');
// console.log(password);

password=password.replace(/,/g,"");

let passPhrase ="0123456789ABCDEF0123456789ABCDEF";
// 暗号化したい元のデータ
let data =password;
let utf8_plain = CryptoJS.enc.Utf8.parse(data);
// 暗号化
let encrypted = CryptoJS.AES.encrypt( utf8_plain, passPhrase );

var rand_name=encrypted;
// console.log(rand_name);

var text_data={
  "A1":{
    "text_data":[
      "ゆっくりと瞼が上がる。",
      "太陽は真上にあるのに、どこか薄暗さを感じさせるこの広い道に自分は立っていた。<br>かなり広い道なのに、周りには人は一人もおらず、開いた眼で当たりを見渡すと、自分の前と後ろに、先の見えないトンネルがあった。",
      "自分の足元には皮袋が置いてあって、どうやらこれだけが自分の手荷物みたいだ。<br>自分はその皮袋を拾って中身を確認しようとする。",
      "すると一枚の紙がパラリと落ち、自分は器用に空中でその紙を掴み取った。",
      "そこには『入国許可証』と書かれており、自分の名前が書かれていた。",
      "自分の名前は…。",
      "name_event"],
    "name_event":true,
    "next_page_option":{"A2":"name_event"}
  },
  "A2":{
    "text_data":[
      "そうだ。<br>自分の名前は"+rand_name+"だった。<br>しっくりくる。",
      "その他皮袋の中を見てみたが、自分の身元であったりなどがわかる物はなかった。<br>入っているのは価値のわからない貨幣と着替えがワンセット、水筒、本、ペン、そしてナイフ。",
      "皮袋の紐口を縛って、自分は腕を組んで考える。",
      "…問題は一つ。<br>物凄くシンプルで大きな問題だ。",
      "それは、自分の名前以外には何もわからないという事だ。",
      "自分がどういう人間なのか、ここがどこなのか、自分は何故ここにいるのか、この荷物は何故持っているのか、など全く思い出せない。",
      "どうやら今のところわかるのは自分の名前と物の名前、そして入国許可証の文字は分かるみたいだ。",
      "とりあえず、自分に頼るよりも誰かに聞く方が早いかもしれない。<br>周りには人がいないので、トンネルを抜けて探すのがよさそうだ。<br>自分は皮袋の紐を肩にかける。",
      "さて、どちらのトンネルを抜けようか？",
      ""]
  }
};

var now_page="A1";

var hero_name="";

var all_num=text_data[now_page]['text_data'].length;
var num=0;
var backnum=0;

//getElement
const text_frame=document.getElementById('text_frame');
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