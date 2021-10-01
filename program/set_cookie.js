// //cookieから取り出す
// console.log(document.cookie);

// const test_cookies_set_arr={"A":"a","B":"b"};

// //cookieにセット
// document.cookie="test_cokkie="+JSON.stringify(test_cookies_set_arr);
// console.log(document.cookie);

// //エスケープしてセット
// document.cookie="test_cokkie="+encodeURIComponent(JSON.stringify(test_cookies_set_arr));
// console.log(document.cookie);

// //エスケープしたものを取り出す
// const test_cookies = document.cookie;
// const test_cookiesArray = test_cookies.split(';');//配列にする
// console.log(test_cookiesArray);

// for(let c of test_cookiesArray){
//     const test_cArray = c.split('=');
//     if( test_cArray[0] === "test_cokkie"){ // 取り出したいkeyと合致したら
//         console.log(JSON.parse(decodeURIComponent(test_cArray[1])));  // 元の文字列 = エスケープ文字を正しく置き換えた文字列
//     }
// }

// const cookie_key="SunAndLow_Cokkie";

// function set_cookies(c_data) {
//   document.cookie=cookie_key+"="+encodeURIComponent(JSON.stringify(c_data));
//   console.log(document.cookie);
//   get_cookies();
// }

// function get_cookies() {
//   //エスケープしたものを取り出す
//   const get_cookies = document.cookie;
//   const get_cookiesArray = get_cookies.split(';');//配列にする
//   // console.log(get_cookiesArray);

//   for(let c of get_cookiesArray){
//       const get_cArray = c.split('=');
//       // console.log(typeof get_cArray[0]);
//       // console.log(typeof get_cArray[1]);
//       console.log(get_cArray[0]);
//       console.log(get_cArray[0]==cookie_key);
//       // console.log(get_cArray[1]);

//       // console.log(JSON.parse(decodeURIComponent(get_cArray[1])));
//       if( get_cArray[0] == cookie_key){ // 取り出したいkeyと合致したら
//           console.log(get_cArray[1]);
//           console.log(JSON.parse(decodeURIComponent(get_cArray[1])));  // 元の文字列 = エスケープ文字を正しく置き換えた文字列
//       }
//   }
// }