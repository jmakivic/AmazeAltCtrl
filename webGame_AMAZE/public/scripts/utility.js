/**Classic Sprite functions**/

function pushAnimation(framesArray, spriteSheet, animationArray) {
    for(let i=0; i<framesArray.length; i++){
        let pos = framesArray[i].frame;
        let img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
        animationArray.push(img);
    }
}

function pushSprites(spriteArray, animationArray, xCoor, yCoor, speed, moving){
    for(let i=0; i<animationArray.length; i++){
        spriteArray[i] = new Sprite(animationArray, xCoor, yCoor, speed, moving);
    }
}

//move array based on direction of input 
function directionalSpriteAnimation(spriteArray, inputValue){

    let i = map(inputValue,-1,1,0,spriteArray.length-1);
    console.log("i"+i);
    console.log(int(i));

    spriteArray[int(i)].show();

    

}