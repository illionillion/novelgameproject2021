var save_file={"data1":{},"data2":{},"data3":{},"data4":{}};

console.log(save_file);

function change_save_screen(){
  document.querySelector("#save_screen").classList.toggle("none");
}

function save(index){
  console.log(save_data);
  var index_data=index.getAttribute("index");
  console.log(index_data);
  var save_data2=new Object;
  //同じオブジェクトを代入できない
  for(let i=0;i<Object.keys(save_data).length;i++){
    save_data2[Object.keys(save_data)[i]]=save_data[Object.keys(save_data)[i]];
  }

  save_file[index_data]=save_data2;

  console.log(save_file);
}