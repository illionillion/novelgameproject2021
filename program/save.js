var save_file={"data1":{},"data2":{},"data3":{},"data4":{}};

// console.log(save_file);

function toziru(){
  document.querySelector("#save_screen").classList.add("none");

}

function change_save_screen(){
  document.querySelector("#save_screen").classList.remove("none");
  // document.querySelector("#save_screen").addEventListener();
  document.getElementById("saveorload").innerHTML="セーブするデータを選択してください。";
  document.getElementById("switching_btn").setAttribute('onclick', 'change_load_screen()');
  document.getElementById("switching_btn").value="ロード";
  for(let i=0;i<4;i++){
    // document.getElementsByClassName("option_count")[i].onclick=save(this);
    document.getElementsByClassName("option_count")[i].setAttribute('onclick', 'save(this)');
    // console.log(document.getElementsByClassName("option_count")[i]);
    // document.getElementsByClassName("option_count")[i].addEventListener("click",function(){save(this)},false);
  }
  show_save_prop();
}

function change_load_screen(){
  document.querySelector("#save_screen").classList.remove("none");
  // document.querySelector("#save_screen").addEventListener();
  document.getElementById("saveorload").innerHTML="ロードするデータを選択してください。";
  document.getElementById("switching_btn").setAttribute('onclick', 'change_save_screen()');
  document.getElementById("switching_btn").value="セーブ";
  for(let i=0;i<4;i++){
    // document.getElementsByClassName("option_count")[i].onclick=save(this);
    document.getElementsByClassName("option_count")[i].setAttribute('onclick', 'load(this)');
    // console.log(document.getElementsByClassName("option_count")[i]);
  }
  show_save_prop();
}

function show_save_prop(){
  for(let i=0;i<Object.keys(save_file).length;i++){
    
    // console.log(save_file[Object.keys(save_file)[i]]);
    var data_page_text=save_file[Object.keys(save_file)[i]]["hero_name"]+"-"+save_file[Object.keys(save_file)[i]]["now_page"]+"-"+save_file[Object.keys(save_file)[i]]["num"];
    if(data_page_text!="undefined-undefined-undefined"){
      document.getElementsByClassName("data_page")[i].innerHTML=data_page_text;
    }
  }
}

function save(index){

  // console.log(save_data);
  var index_data=index.getAttribute("index");
  var index_text_data=index.getAttribute("text");
  // console.log(index_data);

  var flag=window.confirm(index_text_data+"にセーブしますか？");

  if(flag){
    var save_data2=new Object;
    //同じオブジェクトを代入できない
    for(let i=0;i<Object.keys(save_data).length;i++){
      save_data2[Object.keys(save_data)[i]]=save_data[Object.keys(save_data)[i]];
    }

    save_file[index_data]=save_data2;

    console.log(save_file);
    
    show_save_prop();
    alert("セーブしました");
  }

}


function load(index){
  // console.log(save_data);
  var index_data=index.getAttribute("index");
  var index_text_data=index.getAttribute("text");
  // console.log(index_data);

  var flag=window.confirm(index_text_data+"をロードしますか？");

  if(flag){

    if(save_file[index_data]["now_page"]){
        
        if(audio_file_path){
          music_file.pause();
          // audio_file_path=null;
          // audio_file=null;
          // console.log("pause");
        }
      now_page=save_file[index_data]["now_page"];
      num=save_file[index_data]["num"];
      // backnum=num-1;
      hero_name=save_file[index_data]["hero_name"];
      audio_file_path=save_file[index_data]["audio_file_path"];
      toziru();
      // music_file.pause();
      setTimeout(() => {
        if(num==0){
          next();
        }else{
          next();
          audio_restart();
        }

      }, 100);
    
    }else{
      alert('ロードできませんでした。');
    }
  }
}