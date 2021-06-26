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
    "audio":{"file_path":"audio/bgm_temple.mp3"}
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
      "next_page_option":[
          {"text":"前のトンネルを抜ける","value":"B1"},
          {"text":"後ろのトンネルを抜ける","value":"A3"}
      ]
  },
  "A3":{
    "text_data":[
      {"name":""+rand_name+"","text":"先が遠いと思っていたトンネルはあっさり抜けてしまい、広い道に出る。"},
      {"name":""+rand_name+"","text":"太陽は相変わらず真上にあって、さっきの場所とも違って随分と明るい。"},
      {"name":""+rand_name+"","text":"……とりあえず、誰かに話しかけるべきか？<br>けれども何処かに身分証を見せたら手っ取り早く自分について何か分かるのだろうか。"},
      {"name":""+rand_name+"","text":"さて、どうしようか？"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
        {"text":"都市の中へ入る","value":"C1"},
        // {"text":"","value":""}
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
    "next_page_option":[
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
    "next_page_option":[
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
    "next_page_option":[
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
      {"name":"メイド","text":"「あの……。……よろしければいかがですか？」"},
      {"name":""+rand_name+"","text":"ぼんやりとした意識がゆっくりと覚醒すると、夜の街で俺に声をかけてくる女の人がいた。"},
      {"name":""+rand_name+"","text":"黒と白のヒラヒラとした服、脚を覆う白のガーターベルト。<br>そして長い髪をツインテールにしていた。"},
      {"name":""+rand_name+"","text":"そう、彼女はメイドの姿をしているのだ。<br>彼女は俺に一枚の紙を渡してくる。<br>恐らく、店の宣伝のチラシだろう。"},
      {"name":""+rand_name+"","text":"なんて言おうか？"},

      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
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
      {"name":"メイド","text":"「あの……。……よろしければいかがですか？」"},
      {"name":""+rand_name+"","text":"ぼんやりとした意識がゆっくりと覚醒すると、夜の街で俺に声をかけてくる女の人がいた。"},
      {"name":""+rand_name+"","text":"黒と白のヒラヒラとした服、脚を覆う白のガーターベルト。<br>そして長い髪をツインテールにしていた。"},
      {"name":""+rand_name+"","text":"そう、彼女はメイドの姿をしているのだ。<br>彼女は俺に一枚の紙を渡してくる。<br>恐らく、店の宣伝のチラシだろう。"},
      {"name":""+rand_name+"","text":"なんて言おうか？"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    // "effect":[
    //   {"stop":false},
    //   {"stop":false},
    //   {"stop":false},
    //   {"stop":false},
    //   {"stop":true},
    //   {"stop":false},
    //   {"stop":false},
    //   {"stop":false},
    //   {"stop":false},
    //   {"stop":false},
    //   {"stop":false}
    // ],
    "audio":{"file_path":""},
    "next_page_option":[
        {"text":"「あ、貰っておきます。」","value":"A9"},
        {"text":"「いえ、大丈夫です。」","value":"A10"}
    ]
  },
  "A9":{
    "text_data":[
      {"name":""+rand_name+"","text":"俺がチラシを受け取ると、女子高生の姿をした女の子はすぐさま俺の側を離れていった。"},
      {"name":""+rand_name+"","text":"俺はそのチラシを見るとそこには「街の案内人やります！」とメイド服や女子高生の服の女性がおり、高額な金額が表示されていた。<br>……一体誰がこんなものに手を出すのだろうか。"},
      {"name":""+rand_name+"","text":"そんな事を考えていると、俺の側に忍び寄ってくるのは二人の影。<br>その姿を俺は知っている。"},
      {"name":""+rand_name+"","text":"そう、警察官だ。"},
      {"name":""+rand_name+"","text":"……なぜ警察官が俺に近づいてくる？<br>それは簡単な答えだった。"},
      {"name":""+rand_name+"","text":"自分の身なりを見てみる。<br>現代の日本人が着るにはあまりにもボロボロで皮袋なんかを持っている。<br>不審者と言っても間違いないだろう。"},
      {"name":""+rand_name+"","text":"「……いや、まずいまずい」"},
      {"name":""+rand_name+"","text":"確か皮袋の中にはナイフも入っている。"},
      {"name":""+rand_name+"","text":"万が一、いや、ほぼ確実に手荷物検査されるだろう。<br>そうなれば凶器所持罪で捕まってしまう。"},
      {"name":"警官A","text":"「すいません。ちょっとお話いいですか？」"},
      {"name":""+rand_name+"","text":"ど、どうしようか⁈"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"逃げる","value":"A11"},
      {"text":"大人しく話をする","value":"A12"}
    ]
  },
  "A10":{
    "text_data":[
      {"name":"メイド","text":"「……」"},
      {"name":""+rand_name+"","text":"すると彼女は無言で去って行く。"},
      {"name":""+rand_name+"","text":"一体彼女が何者かは知ってもよかった気がするが今はそんな事に気が回らない。<br>俺はもっと重要な事を考えなければいけない。"},
      {"name":""+rand_name+"","text":"そんな事を考えていると、俺の側に忍び寄ってくるのは二人の影。<br>その姿を俺は知っている。"},
      {"name":""+rand_name+"","text":"そう、警察官だ。"},
      {"name":""+rand_name+"","text":"……なぜ警察官が俺に近づいてくる？<br>それは簡単な答えだった。"},
      {"name":""+rand_name+"","text":"自分の身なりを見てみる。<br>現代の日本人が着るにはあまりにもボロボロで皮袋なんかを持っている。<br>不審者と言っても間違いないだろう。"},
      {"name":""+rand_name+"","text":"「……いや、まずいまずい」"},
      {"name":""+rand_name+"","text":"確か皮袋の中にはナイフも入っている。"},
      {"name":""+rand_name+"","text":"万が一、いや、ほぼ確実に手荷物検査されるだろう。<br>そうなれば凶器所持罪で捕まってしまう。"},
      {"name":"警官A","text":"「すいません。ちょっとお話いいですか？」"},
      {"name":""+rand_name+"","text":"ど、どうしようか⁈"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"逃げる","value":"A11"},
      {"text":"大人しく話をする","value":"A12"}
    ]
  },
  "A11":{
    "text_data":[
      {"name":""+rand_name+"","text":"俺はその場から警察官に背を向けて走り出す。<br>思っていたよりもずっと速いスピードで。"},
      {"name":"警官A","text":"「あ…おい！待ちなさい！」"},
      {"name":""+rand_name+"","text":"夜の街を歩く人々の間を駆け抜けて、その場から俺は逃げる。自分を見る人の顔が追いつかないくらい、それぐらいの速さで"},
      {"name":""+rand_name+"","text":"「……！」"},
      {"name":""+rand_name+"","text":"立橋の手すりの部分を右足で踏み、思い切り力を入れる。<br>普通の人なら自殺行為なその行動を俺は当然のようにする。"},
      {"name":""+rand_name+"","text":"……だって、周りの人達からしたら俺はもう、普通の人間ではないのだから。"},
      {"name":"周りの人々","text":"「……⁈」"},
      {"name":""+rand_name+"","text":"魔法のある世界、ウィズサンでいた自分は普通の人と体の性能が違う。<br>向こうで得た高い身体能力で俺は夜の街を飛んだ。"},
      {"name":""+rand_name+"","text":"……今までの記憶が全て蘇る。"},
      {"name":""+rand_name+"","text":"ウィズサンで俺は死んだり、英雄になったり、誰かと結婚したり、本の世界に戻ったりと様々な境遇の自分がいてまたあのトンネルの前に戻っていた。"},
      {"name":""+rand_name+"","text":"死んだ時の恐怖と痛み、目の前の誰かの助けになれない苦しみ、幸せになっても全てゼロに戻ってしまう心の渇き。<br>何度も何度も味わったその感情が今の俺の全てを満たしてしまっている。"},
      {"name":""+rand_name+"","text":"「ならば俺は……」"},
      {"name":""+rand_name+"","text":"あの太陽が常に太陽のある世界に戻らなければならない。"},
      {"name":""+rand_name+"","text":"この夜のある世界に、全く未練が湧いてこない。<br>ただ、昼だけの世界に未練だけが湧いてくる。"},
      {"name":""+rand_name+"","text":"今の自分はあの世界から抜け出せた、ということは謎の繰り返しから俺は解放されたはずなのだ。"},
      {"name":""+rand_name+"","text":"だから今俺が戻れば……！"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「復讐できる！」","value":"A20"},
      {"text":"「ちゃんと幸せになれる！」","value":"A20"}
    ]
  },
  "A12":{
    "text_data":[
      {"name":""+rand_name+"","text":"「あ、はい」"},
      {"name":"警官A","text":"「すいません。お名前は…」"},
      {"name":""+rand_name+"","text":"「ホシゾラヨゾラです。」"},
      {"name":""+rand_name+"","text":"俺がそう伝えると、後ろにいる警察官が何かをし始めた。"},
      {"name":"警官A","text":"「えーとでは。年齢や職業を教えてもらえませんか？」「えーとでは。年齢や職業を教えてもらえませんか？」"},
      {"name":""+rand_name+"","text":"「……年齢は24です。職業は……農家です」"},
      {"name":""+rand_name+"","text":"農家、と答えるのに少し自分は躊躇った。<br>もう数年以上、あの土を踏んでいないというのに。」"},
      {"name":"警官A","text":"「農家の方なのですね。今からどこか行かれる感じですかね？」"},
      {"name":""+rand_name+"","text":"そう聞かれても、俺はなんと答えたらいいのかわからない。<br>今自分はようやく、現在地が今わかったところなのだ。"},
      {"name":""+rand_name+"","text":"「いえ……。今から家に帰るところですね」"},
      {"name":"警官A","text":"「なるほど。どの辺りに住まれてますかね？」"},
      {"name":""+rand_name+"","text":"そう聞かれて、俺は自分の住んでいる街を伝える。<br>最寄りの駅で電車に乗って30分と少しかかるぐらいだ。"},
      {"name":""+rand_name+"","text":"そして警察官はようやく、一番聞きたいであろうことを聞いてくる。"},
      {"name":"警官A","text":"「ということは今日はどこかにお出かけされていたんですかね？その格好で何かあったんですか？」"},
      {"name":""+rand_name+"","text":"「えっと……その……。」"},
      {"name":""+rand_name+"","text":"真実を伝えるべきか、あるいはどうにか誤魔化すべきか。<br>何より皮袋の中のナイフを見られるのが一番まずい。"},
      {"name":""+rand_name+"","text":"俺がなんと答えようか困っていると、後ろで何かをしていた警察官が言う。"},
      {"name":"警官B","text":"「先輩。この人……。」"},
      {"name":""+rand_name+"","text":"そう耳打ちして、それ以外は聞こえなかった。"},
      {"name":""+rand_name+"","text":"完全に怪しまれてしまったのだろうか。<br>内心焦っていると、ずっと話をしていた警察官が口を開く。"},
      {"name":"警官A","text":"「すいません。ホシゾラヨゾラさん。ちょっと来てもらってもいいですかね？」"},
      {"name":""+rand_name+"","text":"これは……どうやら逃げようはないみたいだ。"},
      {"name":""+rand_name+"","text":"これから警察署で尋問されるのだろうか。"},
      {"name":"警官A","text":"「どうやら、今の貴方に捜索願が出ているみたいですね。」"},
      {"name":""+rand_name+"","text":"自分が捜索されている……？"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「ええ⁈」","value":"A13"},
      {"text":"「捜索願……ですか？」","value":"A14"}
    ]
  },
  "A13":{
    "text_data":[
      {"name":"警官A","text":"「はい、我々も驚いております。どうやら貴方は半年ほど前から行方不明になっているみたいですね。」"},
      {"name":""+rand_name+"","text":"半年。"},
      {"name":""+rand_name+"","text":"それが長いと思うべきなのか、短いと思うべきなのか。<br>今の自分には中々判断しづらかった。"},
      {"name":"警官A","text":"「とりあえず、詳しい話は署の方で聞かせてもらいます。パトカーに乗ってもらえますか。」"},
      {"name":""+rand_name+"","text":"「……はい」"},
      {"name":""+rand_name+"","text":"警察官の二人が慌ただしく動き始め、自分は車道の近くに連れて行かれる。<br>すれ違う人々が俺の事を珍しそうにじっと見つめては去っていった。"},
      {"name":""+rand_name+"","text":"空に顔を見上げると、高い高層ビル群が自分の周りを囲うように立っていた。<br>まるで、ここから逃げないように、これ以上どこにも行かせないように。"},
      {"name":""+rand_name+"","text":"あの世界、ウィズサンであった事を思い出す。<br>自分は何度も何度も、あの世界で薄暗いトンネルの前の道から、死んではその場所に戻り、どこかに辿り着いては戻り、誰かと結ばれては戻りを繰り返し続けていた。"},
      {"name":""+rand_name+"","text":"けれども今、俺は繰り返される時間から何故か抜け出せた。<br>……本当の名前に気付いたからだろうか。"},
      {"name":""+rand_name+"","text":"今からはもう、あの世界に戻る事はできないのだろうと何となくわかってしまう。<br>それが本当に嬉しい事かどうかはわからないけれど。"},
      {"name":"警官A","text":"「お待たせしました、ホシゾラさん。さあ、乗ってください」"},
      {"name":""+rand_name+"","text":"俺は言われるがままにパトカーに乗った。"},
      {"name":""+rand_name+"","text":"go_to_next"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
        {"text":"","value":""},
        {"text":"","value":""}
    ],
    "go_to_next":"A15"
  },
  "A14":{
    "text_data":[
      {"name":"警官A","text":"「はい。貴方のご両親が警察に捜索願いを出しているみたいです」"},
      {"name":""+rand_name+"","text":"両親。"},
      {"name":""+rand_name+"","text":"長年顔を合わしていないが顔は容易に思い出せる。<br>唯一の兄妹である妹の顔も思い出した。"},
      {"name":""+rand_name+"","text":"けれどもひょっとしたら自分の記憶とは変わってしまっているのかもしれないとそう考えてしまった。"},
      {"name":"警官A","text":"「とりあえず、詳しい話は署の方で聞かせてもらいます。パトカーに乗ってもらえますか。」"},
      {"name":""+rand_name+"","text":"「……はい」"},
      {"name":""+rand_name+"","text":"警察官の二人が慌ただしく動き始め、自分は車道の近くに連れて行かれる。<br>すれ違う人々が俺の事を珍しそうにじっと見つめては去っていった。"},
      {"name":""+rand_name+"","text":"空に顔を見上げると、高い高層ビル群が自分の周りを囲うように立っていた。<br>まるで、ここから逃げないように、これ以上どこにも行かせないように。"},
      {"name":""+rand_name+"","text":"あの世界、ウィズサンであった事を思い出す。<br>自分は何度も何度も、あの世界で薄暗いトンネルの前の道から、死んではその場所に戻り、どこかに辿り着いては戻り、誰かと結ばれては戻りを繰り返し続けていた。"},
      {"name":""+rand_name+"","text":"けれども今、俺は繰り返される時間から何故か抜け出せた。<br>……本当の名前に気付いたからだろうか。"},
      {"name":""+rand_name+"","text":"今からはもう、あの世界に戻る事はできないのだろうと何となくわかってしまう。<br>それが本当に嬉しい事かどうかはわからないけれど。"},
      {"name":"警官A","text":"「お待たせしました、ホシゾラさん。さあ、乗ってください」"},
      {"name":""+rand_name+"","text":"俺は言われるがままにパトカーに乗った。"},
      {"name":""+rand_name+"","text":"go_to_next"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
        {"text":"","value":""},
        {"text":"","value":""}
    ],
    "go_to_next":"A15"
  },
  "A15":{
    "text_data":[
      {"name":""+rand_name+"","text":"二日後。"},
      {"name":""+rand_name+"","text":"警察署の入り口から出て、空の明るさに目を細くする。<br>ずっと太陽がいるあの世界に長い時間いたはずなのに、暗い場所から明るい場所に出た時の眩しさは慣れることのできるものではなかった。"},
      {"name":"警官A","text":"「ご家族の方がお迎えに来ておられるみたいです。どこにも寄らず、速やかに家に帰り、しばらくは家にいる事をお勧めします」"},
      {"name":""+rand_name+"","text":"そう言って、一昨日の夜から寝る時以外ずっと一緒にいた警察官は警察署の前にいる大量のマスコミの取り押さえをしていた。"},
      {"name":""+rand_name+"","text":"『異世界からの帰還者』<br>現在マスコミに自分はそう報道されているらしい。"},
      {"name":""+rand_name+"","text":"一昨日の夜のあの場所にいた自分がネットでアップされ拡散し、それが半年ほど行方不明の人間だった。<br>その情報を頼りにマスコミはそう報道したのだ。"},
      {"name":""+rand_name+"","text":"確かに、異世界からの帰還者である事は間違いないが、大々的に発表すれば世界が混乱するという事で自分の事は極秘にされた。<br>自分が何をしていたのかは家族以外に伝えてはいけなくなったのだ。"},
      {"name":""+rand_name+"","text":"恐らくこれからの人生、何度か世界を股にかける研究者達と話して回る人生が始まるのかもしれないとゾクっとする。"},
      {"name":""+rand_name+"","text":"「……」"},
      {"name":""+rand_name+"","text":"警察署の外にはマイクを持った女性やカメラマンが多くいて、フラッシュが止まらない。<br>自分の姿が撮られているのだと痛いほど分かる。"},
      {"name":""+rand_name+"","text":"ウィズサンで過ごした身体能力なら、この場所から一瞬で姿を消せたはずだが、その力すらなくなっているのに昨日気づいた。"},
      {"name":""+rand_name+"","text":"自分はもう、ただの人間に戻ったのだ。"},
      {"name":"？？？","text":"「……おい」"},
      {"name":""+rand_name+"","text":"マスコミの喧騒の中、俺のすぐそばで俺を呼び止める人がいた。"},
      {"name":""+rand_name+"","text":"……。"},
      {"name":""+rand_name+"","text":"「……父さん」"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……久しぶり」","value":"A16"},
      {"text":"「……」","value":"A17"}
    ]
  },
  "A16":{
    "text_data":[
      {"name":"父さん","text":"「……」"},
      {"name":""+rand_name+"","text":"父はただ無言だった。"},
      {"name":""+rand_name+"","text":"元々仲が良かったわけでもない。<br>働かないで実家の農作業も手伝わずに部屋引きこもっていたのだから仕方ないと思うし、それで数ヶ月も行方をくらましていたのだ。"},
      {"name":""+rand_name+"","text":"黙って消えて、おまけに世間に異世界に行っていたなんて言われて、世間から注目を浴びすぎてしまっているから父が怒っていても仕方がない。"},
      {"name":""+rand_name+"","text":"自分は黙って父さんのなってきたであろう軽トラに乗り込む。<br>土や砂のこびりついた軽トラは最後に見た日から何も変わってはいなかった。"},
      {"name":""+rand_name+"","text":"エンジンが動き出し、軽トラは前に進み出す。<br>警察署の駐車場を出て、その入り口マスコミが大量にいる場所へ向かう。"},
      {"name":""+rand_name+"","text":"幸い、警官達が対応してくれていて、多くの質問の声は投げかけられたがスムーズに道路に出ることができた。"},
      {"name":""+rand_name+"","text":"思えば車に乗るのも久しぶりだ。<br>向こうには電気機械がなかったから当たり前の事だなと今更ながら考える。"},
      {"name":""+rand_name+"","text":"「……」"},
      {"name":"父さん","text":"「……」"},
      {"name":""+rand_name+"","text":"……久しぶりに会えて嬉しいはずなのに、何を話せばいいのかわからない。<br>ただ単に何も話したり聞いてこない父にどう行動すればいいのかわからないのだ。"},
      {"name":""+rand_name+"","text":"でも、このままってわけにもいかないはずだ。"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……えっと」","value":"A18"},
      {"text":"「……何も聞かないの？」","value":"A19"}
    ]
  },
  "A17":{
    "text_data":[
      {"name":"父さん","text":"「……早く乗れ」"},
      {"name":""+rand_name+"","text":"そう言って父は運転席へすぐに座る。<br>俺には何も聞かないまま。"},
      {"name":""+rand_name+"","text":"元々仲が良かったわけでもない。<br>働かないで実家の農作業も手伝わずに部屋に引きこもっていたのだから仕方ないと思うし、それで数ヶ月も行方をくらましていたのだ。"},
      {"name":""+rand_name+"","text":"黙って消えて、おまけに世間に異世界に行っていたなんて言われて、世間から注目を浴びすぎてしまっているから父が怒っていても仕方がない。"},
      {"name":""+rand_name+"","text":"自分は黙って軽トラに乗り込む。<br>砂のこびりついた軽トラは最後に見た日から何も変わってはいなかった。"},
      {"name":""+rand_name+"","text":"エンジンが動き出し、軽トラは前に進み出す。<br>警察署の駐車場を出て、その入り口のマスコミが大量にいる場所へ向かう。"},
      {"name":""+rand_name+"","text":"幸いにも警官達が対応してくれていて、多くの質問の声は投げかけられたがスムーズに道路へ出ることができた。"},
      {"name":""+rand_name+"","text":"思えば車に乗るのも久しぶりだ。<br>向こうには電気機械がなかったから当たり前の事だなと今更ながら考える。"},
      {"name":""+rand_name+"","text":"「……」"},
      {"name":"父さん","text":"「……」"},
      {"name":""+rand_name+"","text":"……久しぶりに会えて嬉しいはずなのに、何を話せばいいのかわからない。<br>ただ単に何も話したり聞いてこない父にどう行動すればいいのかわからないのだ。"},
      {"name":""+rand_name+"","text":"でも、このままってわけにもいかないはずだ。"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……えっと」","value":"A18"},
      {"text":"「……何も聞かないの？」","value":"A19"}
    ]
  },
  "A18":{
    "text_data":[
      {"name":""+rand_name+"","text":"何かを話せばいいのか、あるいは何も話さない方がいいのか俺は困ってしまう。"},
      {"name":""+rand_name+"","text":"父はずっと前を見て、何も聞かず運転し続けている。"},
      {"name":""+rand_name+"","text":"何も、言わない。"},
      {"name":""+rand_name+"","text":"自分が警察に説明したことなどは耳には届いているだろうし、聞く必要はないのかも知れないけれど、それでも何か聞いて欲しいと言う気持ちが俺の中に渦巻いていた。"},
      {"name":"父さん","text":"「……ヨゾラ」"},
      {"name":""+rand_name+"","text":"ボソリ、と父は口を開く。<br>前を向いたまま、ただ一つの質問を自分に問いかけてくる。"},
      {"name":"父さん","text":"「……お前はいつになったら大人になるんだ」"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……」","value":"A21"}
    ]
  },
  "A19":{
    "text_data":[
      {"name":"父さん","text":"「……」"},
      {"name":""+rand_name+"","text":"父は何も言葉を発さなかった。"},
      {"name":""+rand_name+"","text":"自分が警察に説明したことなどは耳には届いているだろうし、聞く必要はないのかも知れないけれど、それでも何か聞いて欲しいと言う気持ちが俺の中に渦巻いていた。"},
      {"name":""+rand_name+"","text":"何かを話せばいいのか、あるいは何も話さない方がいいのか俺は困ってしまう。"},
      {"name":""+rand_name+"","text":"父はずっと前を見て、何も聞かず運転し続けている。"},
      {"name":"父さん","text":"「……ヨゾラ」"},
      {"name":""+rand_name+"","text":"不意に父はボソリ、と口を開いた。<br>前を向いたまま、ただ一つの質問を自分に問いかけてくる。"},
      {"name":"父さん","text":"「……お前はいつになったら大人になるんだ」"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……」","value":"A21"}
    ]
  },
  "A20":{
    "text_data":[
      {"name":""+rand_name+"","text":"数週間後。<br>俺はウィズサンに戻る為に手段を探し続けていた。"},
      {"name":""+rand_name+"","text":"けれども探して見つかるものでもなく、手段と呼べる手段は見つからなかった。"},
      {"name":""+rand_name+"","text":"眠れぬ夜を過ごし、考えは完全にまとまる。"},
      {"name":""+rand_name+"","text":"……あの世界に繋がる場所なんて、ここしかないということに。"},
      {"name":""+rand_name+"","text":"「……」"},
      {"name":""+rand_name+"","text":"自分が記憶を全て取り戻し、この世界に戻ってきたこの場所。"},
      {"name":""+rand_name+"","text":"何度も何度もこの場所には辿り着いていた。<br>ここがあの世界と繋がっていると考える他に道はないだろう。"},
      {"name":""+rand_name+"","text":"今日は満月。<br>夜は更け、すっかり人通りも減っていた。"},
      {"name":""+rand_name+"","text":"そんな中、歩道橋の上に一人の男が立っており、ビルの上の俺に手を振ってきた。"},
      {"name":""+rand_name+"","text":"「……⁈」"},
      {"name":""+rand_name+"","text":"俺はすぐさま飛び降り、常人では目で追えないようなスピードで彼に近づく。"},
      {"name":""+rand_name+"","text":"近づけば、彼が誰なのかわかった。"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……お前」","value":"A11B"},
      {"text":"「……クト」","value":"A11B"}
    ]
  },
  "A21":{
    "text_data":[
      {"name":""+rand_name+"","text":""},
      {"name":""+rand_name+"","text":""}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……久しぶり」","value":"A16"},
      {"text":"「……」","value":"A17"}
    ]
  },
  "A11B":{
    "text_data":[
      {"name":""+rand_name+"","text":""},
      {"name":""+rand_name+"","text":""}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
      {"text":"「……久しぶり」","value":"A16"},
      {"text":"「……」","value":"A17"}
    ]
  },
  "B1":{
    "text_data":[
      {"name":""+rand_name+"","text":""},
      {"name":""+rand_name+"","text":""}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
        {"text":"","value":""},
        {"text":"","value":""}
    ]
  },
  "C1":{
    "text_data":[
      {"name":""+rand_name+"","text":"都市へ入ると、俺と同じ形をした人間が行きかい、端では背中から翼が飛び出た鳥人間、額から角を生やした異形の者などが、大きな道を往来していた。"},
      {"name":""+rand_name+"","text":"それを見た俺は立ち止まり、大勢が動く姿を眺めることにした。"},
      {"name":""+rand_name+"","text":"俺は記憶のこと、なぜ自分がここに居るのかを考えるのだが、答えなど見つかるはずもなく。<br>ただ、時間だけを潰していた。"},
      {"name":""+rand_name+"","text":"ぞろぞろと人が流れていく中で、俺も歩き出すことにした。"},
      {"name":""+rand_name+"","text":"「どうしようか？」"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":"audio/bgm_town.mp3"},
    "next_page_option":[
        {"text":"人の流れに付いて行く","value":"C1A"},
        {"text":"人の流れに付いて行かず、都市を散策する","value":"C1B"}
    ]
  },
  "C1B":{
    "text_data":[
      {"name":""+rand_name+"","text":"俺は行く当てもなく、ぶらぶらと都市を見回っていた。"},
      {"name":""+rand_name+"","text":"怪しげな粉を売っている浮浪人のような男、毒々しい紫色の肉を売ろうとする旅商人、見たこともない生物の頭蓋骨を置いてある店。"},
      {"name":""+rand_name+"","text":"いろいろな露店がある中で、俺は路地裏で水晶を抱えている占い師が気になった。にこにこと不気味な笑みを浮かべて、じっとこちらを見てくる占い師を。"},
      {"name":""+rand_name+"","text":"怖くなって占い師から離れようとすると、急に手招きをしてきた。逃げようとも考えたが、記憶の手がかりでも調べてもらおうと納得し、占い師のもとまで行くことにした。"},
      {"name":"占いババア","text":"「ヒヒッ、この占いババに何か用ですかな？"},
      {"name":""+rand_name+"","text":"「実は……記憶を失っていて、自分が誰かも分からない状況なんだ。」"},
      {"name":"占いババア","text":"「それは、ヒヒッ、災難なことで。では、お手を見せてもらっても？」"},
      {"name":""+rand_name+"","text":"俺は占い師に手を差し出した。"},
      {"name":"占いババア","text":"「……あぁ、これは外世界からの大いなる影響と、時空間に並ぶ異次元的作用によって成されるような、摩訶不思議な手相ではありますね。ヒヒッ、稀有な運命によって選ばれた、お人のようで。」"},
      {"name":""+rand_name+"","text":"「俺は、これからどうすれば良い？」"},
      {"name":"占いババア","text":"「ならば、あの人の流れに付いて行かれると良いでしょう。そこにあなた様の求めている、何かがあります。」"},
      {"name":""+rand_name+"","text":"chose_event"}
    ],
    "audio":{"file_path":"audio/bgm_town.mp3"},
    "next_page_option":[
        {"text":"人の流れに付いて行く","value":"C1A"},
        // {"text":"人の流れに付いて行かず、都市を散策する","value":"C1B"}
    ]
  },
  "C1A":{
    "text_data":[
      {"name":""+rand_name+"","text":""},
      {"name":""+rand_name+"","text":""}
    ],
    "audio":{"file_path":""},
    "next_page_option":[
        {"text":"","value":""},
        {"text":"","value":""}
    ]
  }
};

//後で追加する各テキストの演出データ初期値
var add_prop={
  "text_data":{
    "stop":false,
    "se":""
  }
};

var add_prop_changed={
  "A7":{
    "index":4,
    "effect":"stop",
    "value":true
  },
  "A8":{
    "index":5,
    "effect":"stop",
    "value":true
  }
}

// console.log(text_data);
//text_dataの総数
var text_data_all_num=Object.keys(text_data).length;

// console.log(text_data_all_num);

for(let i=0;i<text_data_all_num;i++){
  // console.log(text_data[Object.keys(text_data)[i]]["text_data"]);
  //各ページ配列が持つ総数
  let t_array_length=text_data[Object.keys(text_data)[i]]["text_data"].length;
  // console.log(Object.keys(text_data)[i]);
  // console.log(t_array_length);

  //key名text_dataに追加する
  for(let j=0;j<t_array_length;j++){
    // console.log(text_data[Object.keys(text_data)[i]]["text_data"][j]);

    text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]=add_prop["text_data"];
    // text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]={};
    // text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]["stop"]=false;
    // text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]["se"]="";

  }

}

console.log(text_data);

var add_prop_changed_all_num=Object.keys(add_prop_changed).length;

// for(let i=0;i<add_prop_changed_all_num;i++){
//   let prop_key=Object.keys(add_prop_changed)[i];
//   let index=add_prop_changed[prop_key]["index"];
//   let value=add_prop_changed[prop_key]["value"];
//   let effect=add_prop_changed[prop_key]["effect"];
//   console.log(prop_key);
//   console.log(index);
//   console.log(value);
//   console.log(effect);
//   console.log(text_data[prop_key]["text_data"][index]);
//   console.log(text_data[prop_key]["text_data"][index]["effect"][effect]);
//   text_data[prop_key]["text_data"][index]["effect"][effect]=value;
//   // text_data[prop_key]["text_data"][add_prop_changed[prop_key]["index"]]["effect"]["stop"]=add_prop_changed[prop_key]["value"];
//   console.log(text_data);

// }
// console.log(text_data);
