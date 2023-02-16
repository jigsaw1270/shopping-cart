
function updatenumber1(isIncrese,id){
    const casenumberfield1 = document.getElementById(id);
    const casenumberstring1 = casenumberfield1.value ;
    const previouscase1 = parseInt(casenumberstring1);
  let newcasenumber1 ;
  if(isIncrese==true){
    newcasenumber1 = previouscase1 + 1;

  }
  else {
    newcasenumber1 = previouscase1 - 1;
  }
  casenumberfield1.value = newcasenumber1;

  return newcasenumber1 ;
}


function updatetotalcase1(gg){ 
    const totalcaseprice1 = gg * 1219 ;
    const casetotalelement1 = document.getElementById('phone-total-price');
    casetotalelement1.innerText = totalcaseprice1;

}




















document.getElementById('btn-phone-plus').addEventListener('click',function(){
const phonenum = updatenumber1(true,'phone-number-field');
updatetotalcase1(phonenum);
settotalvalue();

})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
const phonenum = updatenumber1(false,'phone-number-field');
updatetotalcase1(phonenum);
settotalvalue();

})