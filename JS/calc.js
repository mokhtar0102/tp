
                    
function insert(num){
document.form.textview.value= document.form.textview.value+num;
}
function equale(){
    var exp= document.form.textview.value;
    if (exp){
document.form.textview.value= eval(exp);
}}
function efface(){
document.form.textview.value="";
}
function retour(){
var exp= document.form.textview.value;
document.form.textview.value=exp.substring(0,exp.length-1);
}
