window.onload=function(){
    replacetext();
}

function replacetext(){
    document.getElementById('thingname').textContent=sessionStorage.getItem('thing');
    console.log('thing name replaced');
    sessionStorage.removeItem('thing');
    console.log('thing name deleted');
}
