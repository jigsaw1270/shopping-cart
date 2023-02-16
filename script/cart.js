function updatenumber(isIncrese,id){
    const casenumberfield = document.getElementById(id);
    const casenumberstring = casenumberfield.value ;
    const previouscase = parseInt(casenumberstring);
  let newcasenumber ;
  if(isIncrese==true){
    newcasenumber = previouscase + 1;

  }
  else {
    newcasenumber = previouscase - 1;
  }
  casenumberfield.value = newcasenumber;

  return newcasenumber ;
}


function updatetotalcase(gg){ 
    const totalcaseprice = gg * 59 ;
    const casetotalelement = document.getElementById('case-total-price');
    casetotalelement.innerText = totalcaseprice;

}

document.getElementById('btn-case-plus').addEventListener('click', function(){
 const casenumber =  updatenumber(true,'case-number-field');
 updatetotalcase(casenumber);
 settotalvalue();
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
  const casenumber = updatenumber(false,'case-number-field');
  updatetotalcase(casenumber);
  settotalvalue();

})