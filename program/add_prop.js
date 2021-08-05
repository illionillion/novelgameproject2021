//後で追加する各テキストの演出データ初期値
var add_prop={
  "effect":{
    "stop":false,
    "se":""
  },
  "character_position":{
    "character_first":"img/test_character_01.png",
    "character_center":"img/transparent_background.png",
    "character_second":"img/test_character_02.png"
  },
  "background_image":{
    "image":".sougen"
  }
};

var add_prop_changed={
  "A1":[
    {
      "index":0,
      "type":"character_position",
      "value":{
        "character_first":"character_img/guildtyo.jpg",
        "character_center":"img/transparent_background.png",
        "character_second":"character_img/gorotsuki.jpg"
      }
    },
    {
      "index":1,
      "type":"character_position",
      "value":{
        "character_first":"img/test_character_01.png",
        "character_center":"img/transparent_background.png",
        "character_second":"img/transparent_background.png"
      }
    },
    {
      "index":2,
      "type":"character_position",
      "value":{
        "character_first":"img/test_character_02.png",
        "character_center":"img/transparent_background.png",
        "character_second":"img/transparent_background.png"
      }
    },
    {
      "index":3,
      "type":"character_position",
      "value":{
        "character_first":"img/transparent_background.png",
        "character_center":"img/test_character_02.png",
        "character_second":"img/transparent_background.png"
      }
    },
    {
      "index":4,
      "type":"character_position",
      "value":{
        "character_first":"img/transparent_background.png",
        "character_center":"img/test_character_02.png",
        "character_second":"img/test_character_02.png"
      }
    },
    {
      "index":5,
      "type":"character_position",
      "value":{
        "character_first":"img/transparent_background.png",
        "character_center":"img/transparent_background.png",
        "character_second":"img/test_character_02.png"
      }
    },
  ],
  "A7":[{
    "index":4,
    "type":"effect",
    "value":{
      "stop":true,
      "se":"audio/door.m4a"
    }
  },
  {
    "index":4,
    "type":"character_position",
    "value":{
      "character_first":"img/guildtyo_w.jpg",
      "character_center":"img/transparent_background.png",
      "character_second":"img/gorotsuki_w.jpg"
    }    
  }
  ],
  "A8":[{
    "index":5,
    "type":"effect",
    "value":{
      "stop":true,
      "se":""
    }
  }]
}

function add_propaty(text_data){
// console.log(text_data);
//text_dataの総数
var text_data_all_num=Object.keys(text_data).length;

for(let i=0;i<text_data_all_num;i++){
  // console.log(text_data[Object.keys(text_data)[i]]["text_data"]);
  //各ページ配列が持つ総数
  let t_array_length=text_data[Object.keys(text_data)[i]]["text_data"].length;
  // console.log(Object.keys(text_data)[i]);
  // console.log(t_array_length);

  //key名text_dataに追加する
  for(let j=0;j<t_array_length;j++){
    for(let s=0;s<Object.keys(add_prop).length;s++){
      text_data[Object.keys(text_data)[i]]["text_data"][j][Object.keys(add_prop)[s]]=add_prop[Object.keys(add_prop)[s]];
    }

  }

}

console.log(text_data);

  var add_prop_changed_all_num=Object.keys(add_prop_changed).length;

  for(let i=0;i<add_prop_changed_all_num;i++){

    var add_prop_changed2=new Object;
    for(let s=0;s<Object.keys(add_prop_changed).length;s++){
      add_prop_changed2[Object.keys(add_prop_changed)[s]]=add_prop_changed[Object.keys(add_prop_changed)[s]];
    }
    let prop_key=Object.keys(add_prop_changed2)[i];
    let prop_num=add_prop_changed2[prop_key].length;
    // console.log(prop_key);
    // console.log(prop_num);
    for(let m=0;m<prop_num;m++){

      let index=add_prop_changed2[prop_key][m]["index"];
      let value=add_prop_changed2[prop_key][m]["value"];
      let type=add_prop_changed2[prop_key][m]["type"];

      console.log(prop_key);
      console.log(index);
      console.log(value);
      console.log(type);
      console.log(text_data[prop_key]["text_data"][index]);
      console.log(text_data[prop_key]["text_data"][index][type]);
      text_data[prop_key]["text_data"][index][type]=value;

      // console.log(text_data);    
    }

  }
  console.log(text_data);
}