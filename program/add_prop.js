
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

// // console.log(text_data);
// //text_dataの総数
// var text_data_all_num=Object.keys(text_data).length;

// // console.log(text_data_all_num);
// var add_prop2_textdata=new Object;
// //同じオブジェクトを代入できない
// for(let i=0;i<text_data_all_num;i++){
//   add_prop2_textdata[Object.keys(text_data)[i]]=text_data[Object.keys(text_data)[i]]["text_data"];
// }
// for(let i=0;i<text_data_all_num;i++){
//   // console.log(text_data[Object.keys(text_data)[i]]["text_data"]);
//   //各ページ配列が持つ総数
//   let t_array_length=text_data[Object.keys(text_data)[i]]["text_data"].length;
//   // console.log(Object.keys(text_data)[i]);
//   // console.log(t_array_length);

//   //key名text_dataに追加する
//   for(let j=0;j<t_array_length;j++){
//     // console.log(text_data[Object.keys(text_data)[i]]["text_data"][j]);

//     // text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]=add_prop2["text_data"];
//     text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]=add_prop2_textdata;
//     // text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]={};
//     // text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]["stop"]=false;
//     // text_data[Object.keys(text_data)[i]]["text_data"][j]["effect"]["se"]="";

//   }

// }

// console.log(text_data);

// var add_prop_changed_all_num=Object.keys(add_prop_changed).length;
// var add_prop_changed2=new Object;
// for(let i=0;i<Object.keys(add_prop_changed).length;i++){
//   add_prop_changed2[Object.keys(add_prop_changed)[i]]=add_prop_changed[Object.keys(add_prop_changed)[i]];
// }
// for(let i=0;i<add_prop_changed_all_num;i++){
//   let prop_key=Object.keys(add_prop_changed2)[i];
//   let index=add_prop_changed2[prop_key]["index"];
//   let value=add_prop_changed2[prop_key]["value"];
//   let effect=add_prop_changed2[prop_key]["effect"];
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
