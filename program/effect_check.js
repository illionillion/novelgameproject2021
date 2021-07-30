var se_file_path;
var se_file=null;

function effect_play(value,output_charname,output_text){
  console.log(value);
 if(value["stop"]==true){
    character_name.innerHTML="";
    text_frame.innerHTML="";
    setTimeout(() => {

      event_check(output_charname,output_text);    
    }, 1000); 

  }
  //効果音再生
  if(value["se"]){
    se_file_path=value["se"];
    se_file=new Audio(se_file_path);
    se_file.play();
  }
}

function position_select(value){
  // console.log(value);
  var value_num=Object.keys(value).length;
  // console.log(value_num);

  for(let i=0;i<value_num;i++){
    let char_key=Object.keys(value)[i];
    let char_url=value[Object.keys(value)[i]];
    // console.log(char_key);
    // console.log(char_url);
    // console.log(document.querySelector("#"+char_key).querySelector("img"));
    document.querySelector("#"+char_key).querySelector("img").setAttribute("src",char_url);
  }
}