var save_file={"data1":{},"data2":{},"data3":{},"data4":{}};
// var save_file=new Map;

// save_file["data1"]={"a":"a","b":"b"};
// save_file["data2"]={"c":"c","d":"d"};
// save_file["data1"]={"e":"e","f":"f"};

console.log(save_file);

function change_save_screen(){
  document.querySelector("#save_screen").classList.toggle("none");
}

function save(index){
  console.log(save_data);
  var index_data=index.getAttribute("index");
  console.log(index_data);

  save_file[index_data]=save_data;
  // save_file.set(index_data, save_data);


  // if(index_data=="data1"){
  //     save_file[index_data]=save_data;
  // }else if(index_data=="data2"){
  //   save_file[index_data]=save_data;
  // }else if(index_data=="data3"){
  //   save_file[index_data]=save_data;
  // }else if(index_data=="data4"){
  //   save_file[index_data]=save_data;
  // }

  // switch (index_data) {
  //   case "data1":
  //     save_file[index_data]=save_data;
  //   break;

  //   case "data2":
  //     save_file[index_data]=save_data;
  //   break;

  //   case "data3":
  //     save_file[index_data]=save_data;
  //   break;

  //   case "data4":
  //     save_file[index_data]=save_data;
  //   break;
  
  //   default:
  //     break;
  // }

  console.log(save_file);
}