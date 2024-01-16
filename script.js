var count = 0;
 function backgroundChanger(){
    let color = ["red","orange","yellow","green",,"blue","indigo","violet"];
    document.getElementsByClassName("container")[0].style.background = color[count++];

    if(count>color.length-1){
        count = 0;
    }
 }