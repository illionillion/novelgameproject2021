function effect_play(value,output_charname,output_text){
  console.log(value);
 if(value["stop"]==true){
    character_name.innerHTML="";
    text_frame.innerHTML="";
    setTimeout(() => {

      event_check(output_charname,output_text);    
    }, 1000); 

  }
}