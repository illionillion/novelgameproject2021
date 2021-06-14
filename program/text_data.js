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
  },
  "A4":{
    "text_data":[
    {"name":""+rand_name+"","text":"……ん？"},
    {"name":""+rand_name+"","text":"身分証に書かれているホシゾラヨゾラという名前に、俺はどこか違和感を感じる。"},
    {"name":""+rand_name+"","text":"俺の名前は本当にホシゾラヨゾラだっただろうか？<br>なんだか、この名前が自分の名前ではないのではないかという考えが俺の脳内を支配しているのだ。"},
    {"name":""+rand_name+"","text":"自分の名前は本当にホシゾラヨゾラだっただろうか？"},
    {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "naext_page_option":[
        {"text":"はい","value":"A5"},
        {"text":"いいえ","value":"A6"}
    ]
  },
  "A5":{
    "text_data":[
      {"name":""+rand_name+"","text":"俺の名前はホシゾラヨゾラなのだろう。<br>記憶喪失なのだから、納得できないのも仕方ないかもしれない。<br>自分の名前に納得できないという事に大きな違和感を感じてしまう。"},
      {"name":""+rand_name+"","text":"とりあえず誰もいないこんな場所にいても仕方がない。<br>誰か人がいないか探そう。"},
      {"name":""+rand_name+"","text":"そう思い、一歩足を前に出した時だった。"},
      {"name":""+rand_name+"","text":"前に出した右足がドプリ、と地面に呑み込まれたのだ。"},
      {"name":""+rand_name+"","text":"「うわっ、なんだこれ！」"},
      {"name":""+rand_name+"","text":"俺の真下からドロリ、とした真っ黒な液体が広がっていき、どんどん道に広がっていく。<br>そして、自分の左足までもが黒い液体に呑み込まれ、足が踏む場所を見つけられず、俺は体勢を崩してしまう。"},
      {"name":""+rand_name+"","text":"身体はドンドン沈んでいく。<br>このままじゃ、沈んでしまう！"},
      {"name":""+rand_name+"","text":"「誰かいないか！助けてくれ！」"},
      {"name":""+rand_name+"","text":"俺は助けを呼ぶ為に必死に大声をあげるが、周りには誰もいないので助けが来るはずもない。"},
      {"name":""+rand_name+"","text":"俺に残された手は…。"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "naext_page_option":[
        {"text":"もがく","value":"A7"},
        {"text":"もがかない","value":"A8"}
    ]
  },
  "A6":{
    "text_data":[
      {"name":""+rand_name+"","text":"では俺の名前はなんなのだろうか？<br>ひょっとするとこの身分証が自分のじゃない可能性だってある。"},
      {"name":""+rand_name+"","text":"自分の名前もここがどこなのかも全くわからないのなら、とりあえず動くしかない。<br>誰か人を探して話してみれば何か分かるかもしれない。"},
      {"name":""+rand_name+"","text":"そう思い、一歩足を前に出した時だった。"},
      {"name":""+rand_name+"","text":"前に出した右足がドプリ、と地面に呑み込まれたのだ。"},
      {"name":""+rand_name+"","text":"「うわっ、なんだこれ！」"},
      {"name":""+rand_name+"","text":"俺の真下からドロリ、とした真っ黒な液体が広がっていき、どんどん道に広がっていく。<br>そして、自分の左足までもが黒い液体に呑み込まれ、足が踏む場所を見つけられず、俺は体勢を崩してしまう。"},
      {"name":""+rand_name+"","text":"「誰かいないか！助けてくれ！」"},
      {"name":""+rand_name+"","text":"俺は助けを呼ぶ為に必死に大声をあげるが、周りには誰もいないので助けが来るはずもない。"},
      {"name":""+rand_name+"","text":"俺に残された手は…。"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "naext_page_option":[
        {"text":"もがく","value":"A7"},
        {"text":"もがかない","value":"A8"}
    ]
  },
  "A7":{
    "text_data":[
      {"name":""+rand_name+"","text":"もがくしかない。<br>そう気づいた俺は手や足を動かし、そして全身を震わせてなんとか脱出を試みた。"},
      {"name":""+rand_name+"","text":"けれども俺のそんな抵抗も虚しく、体はどんどん沈んでいき、顔もその泥に覆われてしまう。<br><br>そして、息が出来なくなる。"},
      {"name":""+rand_name+"","text":"もがいても、もがいても苦しくなって助かるはずがなくて、そして意識が遠のいていく。"},
      {"name":""+rand_name+"","text":"意識がなくなる直前、俺は走馬灯のようなものを見た。"},
      {"name":""+rand_name+"","text":"「あの……。……よろしければいかがですか？」"},
      {"name":""+rand_name+"","text":"ぼんやりとした意識がゆっくりと覚醒すると、夜の街で俺に声をかけてくる女の人がいた。"},
      {"name":""+rand_name+"","text":"黒と白のヒラヒラとした服、脚を覆う白のガーターベルト。<br>そして長い髪をツインテールにしていた。"},
      {"name":""+rand_name+"","text":"そう、彼女はメイドの姿をしているのだ。<br>彼女は俺に一枚の紙を渡してくる。<br>恐らく、店の宣伝のチラシだろう。"},
      {"name":""+rand_name+"","text":"なんて言おうか？"},

      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "naext_page_option":[
        {"text":"「あ、貰っておきます。」","value":"A9"},
        {"text":"「いえ、大丈夫です。」","value":"A10"}
    ]
  },
  "A8":{
    "text_data":[
      {"name":""+rand_name+"","text":"俺に残された手なんて、何もない。"},
      {"name":""+rand_name+"","text":"体はゆっくりと沈み込んでいき、体は動かなくなる。<br>いつしか俺は首元まで黒い液体に沈んでしまい、顔が覆われる。"},
      {"name":""+rand_name+"","text":"今更ながら抵抗しようとしてみても全く体は動かなくて、どうしようもなくなった。<br><br> そして、息が出来なくなる。"},
      {"name":""+rand_name+"","text":"薄らと、そしてゆっくりと意識が遠のいていく。"},
      {"name":""+rand_name+"","text":"意識がなくなる直前、俺は走馬灯のようなものを見た。"},
      {"name":""+rand_name+"","text":"「あの……。……よろしければいかがですか？」"},
      {"name":""+rand_name+"","text":"ぼんやりとした意識がゆっくりと覚醒すると、夜の街で俺に声をかけてくる女の人がいた。"},
      {"name":""+rand_name+"","text":"黒と白のヒラヒラとした服、脚を覆う白のガーターベルト。<br>そして長い髪をツインテールにしていた。"},
      {"name":""+rand_name+"","text":"そう、彼女はメイドの姿をしているのだ。<br>彼女は俺に一枚の紙を渡してくる。<br>恐らく、店の宣伝のチラシだろう。"},
      {"name":""+rand_name+"","text":"なんて言おうか？"},

      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "naext_page_option":[
        {"text":"「あ、貰っておきます。」","value":"A9"},
        {"text":"「いえ、大丈夫です。」","value":"A10"}
    ]
  },
  "A9":{
    "text_data":[
      {"name":""+rand_name+"","text":""},
      {"name":""+rand_name+"","text":""}
    ],
    "audio":{"file_path":""},
    "naext_page_option":[
        {"text":"「あ、貰っておきます。」","value":"A9"},
        {"text":"「いえ、大丈夫です。」","value":"A10"}
    ]
  },
  "A10":{
    "text_data":[
      {"name":""+rand_name+"","text":""},
      {"name":""+rand_name+"","text":""}
    ],
    "audio":{"file_path":""},
    "naext_page_option":[
        {"text":"「あ、貰っておきます。」","value":"A9"},
        {"text":"「いえ、大丈夫です。」","value":"A10"}
    ]
  }
};