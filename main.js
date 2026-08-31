
let editorIsSelected = false;
let Editor;
let EditorContent;
let lines = [];
let lineCurrentIndex = -1;
let Label1;
let globalCursorPosition = 1;
let localCursorPosition = 1;
let Cursor;
let totalLines


document.addEventListener("DOMContentLoaded", (e) => {
    Label1 = document.getElementById("label1");
    Editor = document.getElementById("editor");    
    EditorContent = document.getElementById("linesColumn");
    console.log(EditorContent);

    addLine("Hola :D");
    console.log(lines)

    for(let line of lines){
        if (line instanceof Line)EditorContent.innerHTML += line.toHTML();
    }

    globalCursorPosition = getTotalLinesSize() + 1;
    localCursorPosition = getTotalLinesSize() + 1;

    let elements = [
            "<p>Current line index: " + lineCurrentIndex + "</p>",
            "<p>Current Lines: " + lines.length + "</p>",
            "<p>GLOBAL Cursos Position: " + globalCursorPosition +"</p>",
            "<p>LOCAL Cursos Position: " + localCursorPosition +"</p>"
        ]
    Label1.innerHTML=elements.join("");
    for (let line of lines){
        Label1.innerHTML += "<h1>" + line + "</h1>"
    }

});

document.addEventListener("click", (e) => {
    console.log(e.target.id)

    if (clickOnEditor(e) && !editorIsSelected){
        editorIsSelected = true;
        Editor.style.borderColor = "rgb(224, 96, 96)";
        // console.log(editorIsSelected);
    } 
    else if (!clickOnEditor(e) && editorIsSelected){
        editorIsSelected = false;
        Editor.style.borderColor = "transparent";
        // console.log(editorIsSelected);
    }
});

function clickOnEditor(e){
    return (
        e.target.id == "editor" || 
        e.target.className == "line" ||
        e.target.id == "linesColumn" ||
        e.target.id == "numsColumn"
    )
}



document.addEventListener("keydown", (e) => {
    // if ((e.key <= 'z' && e.key >= 'a')||(e.key <= 'Z' && e.key >= 'A'))console.log("Letra!");
    console.log(e.key, e);
    
    if(editorIsSelected){
        e.preventDefault();
        EditorContent.innerHTML = '';
        switch(e.key){
            case "Enter":
                addLine()
                // Add line
                break;
            case "Backspace":
                erase()
                break;
            case "CapsLock":
            case "Shift":
            case "Control":
            case "Meta":
                //IGNORE
                break;
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
            case "ArrowDown":
                // moveCursor(e.key);
                break;
            case "Tab":
                write("   ")
                break;
            case " ":
                write(" ")
                break;
            default:
                console.log(lines,lineCurrentIndex, lines.length );
                write(e.key)
                // lines[lineCurrentIndex].content+=e.key
                // globalCursorPosition++
                break;
        }

        for(line of lines){
            if (line instanceof Line)EditorContent.innerHTML += line.toHTML();
            console.log(line)
        }


        let elements = [
            "<p>Current line index: " + lineCurrentIndex + "</p>",
            "<p>Current Lines: " + lines.length + "</p>",
            "<p>GLOBAL Cursos Position: " + globalCursorPosition +"</p>",
            "<p>LOCAL Cursos Position: " + localCursorPosition +"</p>"
        ]
        Label1.innerHTML=elements.join("");
        for (let line of lines){
            Label1.innerHTML += "<h1>" + line + "</h1>"
        }
        
    }

});


