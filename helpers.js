function addLine(content){
    localCursorPosition = 0;
    let Content = (content == undefined) ? "" : content
    
    lines.splice(lineCurrentIndex+1, 0, new Line(lineCurrentIndex, Content));

    lineCurrentIndex++
    // globalCursorPosition++;
    // localCursorPosition++;
}

function removeLine(){

    lines.splice(lineCurrentIndex, 1);

    lineCurrentIndex--;
    // globalCursorPosition--;
    // localCursorPosition--;

}

function write(chars, position){
    lines[lineCurrentIndex].content+=chars
    globalCursorPosition += chars.length
    localCursorPosition+= chars.length
}

function erase(chars, start, end){
    if (lines.length == 0) return;
    if (lines.length == 1 && lines[lineCurrentIndex].content.length == 0) return;

    let lineContent = lines[lineCurrentIndex].content;
    if (lines[lineCurrentIndex].content.length < 1){
        removeLine();
        localCursorPosition = lines[lineCurrentIndex].content.length;
        console.log("Line Erased Succesfully");
    } else {
        lines[lineCurrentIndex].content = lines[lineCurrentIndex].content.slice(0,lines[lineCurrentIndex].content.length-1)
        localCursorPosition--;
    }
    globalCursorPosition--;
    
}

function initCursorPosition(){

}

function moveCursor(direction){
    // if ((lineCurrentIndex + moveY) > -1) return;
    // if (lines.length < (lineCurrentIndex + moveY)) return;
    let moveX = (direction == "ArrowRight") - (direction == "ArrowLeft");
    let moveY = (direction == "ArrowDown") - (direction == "ArrowUp");

    if (lines.length > (lineCurrentIndex + moveY) && (lineCurrentIndex + moveY) > -1){
        globalCursorPosition += (lines[lineCurrentIndex].content.length) * moveY;
        lineCurrentIndex += moveY;
        localCursorPosition = lines[lineCurrentIndex].content.length;
    } else {
        console.log(lines.length,lineCurrentIndex + moveY,  lines.length < (lineCurrentIndex + moveY));
    }
    
    
}


function getTotalLinesSize(){
    let finalSize = 0;
    for (line of lines){
        finalSize += line.getSize();
    }
    return finalSize
}