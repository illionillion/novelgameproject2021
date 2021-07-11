function endroll(){
  document.querySelector('#endroll_frame').classList.remove("none");
  setTimeout(() => {
    document.querySelector('#endroll').classList.add("endroll_start");
    
  }, "10");
}