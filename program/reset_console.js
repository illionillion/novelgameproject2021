let remove_console_flag=false;                                            //フラグ
let save_console={};                                                      //console機能回復用

let ori={"a":"1","b":"2"};
let clone=Object.assign({},ori);                                          //オブジェクトのコピーはObject.assignを使う
ori["a"]=0;
// console.log(ori);
// console.log(clone);

function remove_console(){

  const all_num=Object.keys(window.console).length;                         //window.consoleのObjectの総数
  
  if(Object.keys(save_console).length){
    window.console=Object.assign({},save_console);
    save_console={};
  }


  if(remove_console_flag){
    save_console=Object.assign({},window.console);
    for(let i=0;i<all_num;i++){                                           //window.consoleの総数分繰り返す
        let change=String(window.console[Object.keys(window.console)[i]]);//log,trace,count...を取得
        change=(change.replace('function ', ''));                         //function log() { [native code] }になるのでlogだけになるように置き換える
        change=(change.replace('() { [native code] }', ''));              //上に同じく
        // save_console[change]=window.console[change];                   //ここに保存        
        window.console[change] = function(s){return;};                    //空の値を返す変数を上書き
    }
  }
}

function reset_console(){
  remove_console_flag=false;
  remove_console();

}

remove_console();