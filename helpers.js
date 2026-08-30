function addLine(content){
    localCursorPosition = 0;
    let Content = (content == undefined) ? "" : content
    lineCurrentIndex++
    lines.push(new Line(lineCurrentIndex, Content))
    globalCursorPosition++;
    localCursorPosition++;
}

function write(chars, position){
    lines[lineCurrentIndex].content+=chars
    globalCursorPosition++
    localCursorPosition++;
}

function erase(chars, start, end){
    if (lines.length == 0) return;
    if (lines.length == 1 && lines[lineCurrentIndex].content.length == 0) return;

    let lineContent = lines[lineCurrentIndex].content;
    if (lines[lineCurrentIndex].content.length < 1){
        lines.pop();
        lineCurrentIndex--;
        localCursorPosition = lines[lineCurrentIndex].content.length;
        console.log("Line Erased Succesfully");
    } else {
        lines[lineCurrentIndex].content = lines[lineCurrentIndex].content.slice(0,lines[lineCurrentIndex].content.length-1)
        localCursorPosition--;
    }
    globalCursorPosition--;
    
    
    
}

function getCursorPosition(){
    return null;
}

function moveCursor(direction){
    cursorX+=10;

    // let moveX = (direction == "ArrowRight") - (direction == "ArrowLeft");
    // let moveY = (direction == "ArrowDown") - (direction == "ArrowUp");
    // cursorX += moveX;
    // cursorY += moveY;

    Cursor.style = "left: "+ cursorX + "px;";

    console.log(Cursor.style);
}


function getTotalLinesSize(){
    let finalSize = 0;
    for (line of lines){
        finalSize += line.getSize();
    }
    return finalSize
}