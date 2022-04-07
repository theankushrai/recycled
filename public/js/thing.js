window.onload=function(){
    replacething();
}

let text='{"person":{"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png","desciption":"Humans cannot be recycled","videourl":"https://www.youtube.com/embed/inpok4MKVLM"}}';
const obj = JSON.parse(text);

function replacething(){

    console.log(obj.person.description);
    document.getElementById('thingname').textContent=sessionStorage.getItem('thing');
    document.getElementById('thingdesciption').innerHTML= obj.person.desciption;
    document.getElementById('thingimage').setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png");
    document.getElementById('thingvideo').setAttribute('src',obj.person.videourl);
    console.log('thing replaced');
    sessionStorage.removeItem('thing');
    console.log('thing name deleted');
    
}
