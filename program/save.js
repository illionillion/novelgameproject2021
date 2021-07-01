var save_file={"data1":{},"data2":{},"data3":{},"data4":{}};

console.log(save_file);

function change_save_screen(){
  document.querySelector("#save_screen").classList.toggle("none");
  // document.querySelector("#save_screen").addEventListener();
  document.getElementById("saveorload").innerHTML="セーブするデータを選択してください。";
  for(let i=0;i<4;i++){
    // document.getElementsByClassName("option_count")[i].onclick=save(this);
    document.getElementsByClassName("option_count")[i].setAttribute('onclick', 'save(this)');
    console.log(document.getElementsByClassName("option_count")[i]);
    // document.getElementsByClassName("option_count")[i].addEventListener("click",function(){save(this)},false);
  }
}

function save(index){

  console.log(save_data);
  var index_data=index.getAttribute("index");
  var index_text_data=index.getAttribute("text");
  console.log(index_data);

  var flag=window.confirm(index_text_data+"にセーブしますか？");

  if(flag){
    var save_data2=new Object;
    //同じオブジェクトを代入できない
    for(let i=0;i<Object.keys(save_data).length;i++){
      save_data2[Object.keys(save_data)[i]]=save_data[Object.keys(save_data)[i]];
    }

    save_file[index_data]=save_data2;

    console.log(save_file);
    
    alert("セーブしました");
  }


}