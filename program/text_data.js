'use strict';
// console.log("text_data");

var password=[];
var abc=[];

var first="a",last="z";

for(let i=first.charCodeAt(0);i<=last.charCodeAt(0);i++){
  abc.push(String.fromCharCode(i));

  // console.log("i="+String.fromCharCode(i));
  // console.log("abc=["+abc+"]");
}

// console.log("アルファベット\n abc=["+abc+"]");
//ランダムな文字列、長さもランダム
for(let i=0;i<Math.random()* abc.length;i++){
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
      {"name":"????","text":"ゆっくりと瞼が上がる。"},
      {"name":"????","text":"太陽は真上にあるのに、どこか薄暗さを感じさせるこの広い道に自分は立っていた。<br>かなり広い道なのに、周りには人は一人もおらず、開いた眼で当たりを見渡すと、自分の前と後ろに、先の見えないトンネルがあった。"},
      {"name":"????","text":"自分の足元には皮袋が置いてあって、どうやらこれだけが自分の手荷物みたいだ。<br>自分はその皮袋を拾って中身を確認しようとする。"},
      {"name":"????","text":"すると一枚の紙がパラリと落ち、自分は器用に空中でその紙を掴み取った。"},
      {"name":"????","text":"そこには『入国許可証』と書かれており、自分の名前が書かれていた。"},
      {"name":"????","text":"自分の名前は…。"},
      {"name":"????","text":"name_event"}
      ],
    "audio":{"file_path":""}
  },
  "A2":{
    "text_data":[
      {"name":""+rand_name+"","text":"そうだ。<br>自分の名前は"+rand_name+"だった。<br>しっくりくる。"},
      {"name":""+rand_name+"","text":"その他皮袋の中を見てみたが、自分の身元であったりなどがわかる物はなかった。<br>入っているのは価値のわからない貨幣と着替えがワンセット、水筒、本、ペン、そしてナイフ。"},
      {"name":""+rand_name+"","text":"皮袋の紐口を縛って、自分は腕を組んで考える。"},
      {"name":""+rand_name+"","text":"…問題は一つ。<br>物凄くシンプルで大きな問題だ。"},
      {"name":""+rand_name+"","text":"それは、自分の名前以外には何もわからないという事だ。"},
      {"name":""+rand_name+"","text":"自分がどういう人間なのか、ここがどこなのか、自分は何故ここにいるのか、この荷物は何故持っているのか、など全く思い出せない。"},
      {"name":""+rand_name+"","text":"どうやら今のところわかるのは自分の名前と物の名前、そして入国許可証の文字は分かるみたいだ。"},
      {"name":""+rand_name+"","text":"とりあえず、自分に頼るよりも誰かに聞く方が早いかもしれない。<br>周りには人がいないので、トンネルを抜けて探すのがよさそうだ。<br>自分は皮袋の紐を肩にかける。"},
      {"name":""+rand_name+"","text":"さて、どちらのトンネルを抜けようか？"},
      {"name":""+rand_name+"","text":"chose_event"}
      ],
      "audio":{"file_path":"audio/bgm_town.mp3"},
      "naext_page_option":[        
          {"text":"前のトンネルを抜ける","value":"B1"},
          {"text":"後ろのトンネルを抜ける","value":"A3"}
          
      ]
      

  },
  "B1":{
    "text_data":[
      {"name":""+rand_name+"","text":""},
      {"name":""+rand_name+"","text":""}

    ],
    "audio":{"file_path":"audio/bgm_town.mp3"},
    "naext_page_option":[        
        {"text":"","value":""},
        {"text":"","value":""}
        
    ]
  },
  "A3":{
    "text_data":[
      {"name":""+rand_name+"","text":"先が遠いと思っていたトンネルはあっさり抜けてしまい、広い道に出る。"},
      {"name":""+rand_name+"","text":"太陽は相変わらず真上にあって、さっきの場所とも違って随分と明るい。"},
      {"name":""+rand_name+"","text":"……とりあえず、誰かに話しかけるべきか？<br>けれども何処かに身分証を見せたら手っ取り早く自分について何か分かるのだろうか。"},
      {"name":""+rand_name+"","text":"さて、どうしようか？"},
      {"name":""+rand_name+"","text":""}
    ],
    "audio":{"file_path":"audio/bgm_town.mp3"},
    "naext_page_option":[        
        {"text":"","value":""},
        {"text":"","value":""}
        
    ]
  }
};