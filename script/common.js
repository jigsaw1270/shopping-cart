function getElementByvalueId (element) {
    const a = document.getElementById(element);
    const b =  a.innerText ;
    const c = parseInt(b);
    return c ;

}

function settottal (elementid , value){

    const subtotalelement = document.getElementById(elementid);
    subtotalelement.innerText =  value ;
}

 function settotalvalue(){
    const currentcasetotal = getElementByvalueId('case-total-price');
    const currentphonetotal = getElementByvalueId('phone-total-price');

    const cursubtotal = currentcasetotal + currentphonetotal ;
    settottal('sub-total', cursubtotal);

    const taxtotalstring = (cursubtotal * 0.1).toFixed(2) ;
    const taxtotal = parseFloat(taxtotalstring);
    settottal('tax-total',taxtotal);


    const finaltotal = cursubtotal + taxtotal ;
    settottal('final-total', finaltotal);
 }