let Editor;
let EditorContent;
let Label1;
let NumsColumn;

let editorIsSelected = false;
let lines = [];

let lineCurrentIndex = -1;
let globalCursorPosition = 1;
let localCursorPosition = 1;


document.addEventListener("DOMContentLoaded", (e) => {
    Label1 = document.getElementById("label1");
    Editor = document.getElementById("editor");    
    EditorContent = document.getElementById("linesColumn");
    NumsColumn = document.getElementById("numsColumn");

    console.log(EditorContent);

    addLine("Falta añadir mejores controles para el cursor, y mejor sistema para localizar en el editor");

    console.log(lines)

    updateEditor();

    globalCursorPosition = getTotalLinesSize();
    localCursorPosition = getTotalLinesSize();

    initCursorPosition();

    let elements = [
            "<p>Current line index: " + lineCurrentIndex + "</p>",
            "<p>Current Lines: " + lines.length + "</p>",
            "<p>GLOBAL Cursor Position: " + globalCursorPosition +"</p>",
            "<p>LOCAL Cursor Position: " + localCursorPosition +"</p>"
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

// navigator.clipboard.readText().
//     then((e)=>{
//         console.log("xd", e);
//     });

document.addEventListener("keydown", (e) => {
    // if ((e.key <= 'z' && e.key >= 'a')||(e.key <= 'Z' && e.key >= 'A'))console.log("Letra!");
    console.log(e.key, e);
    
    e.preventDefault();
    
    if(editorIsSelected){
        
        EditorContent.innerHTML = '';
        NumsColumn.innerHTML = '';
        switch(e.key){
            case "Enter":
                addLine()
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
                moveCursor(e.key);
                break;
            case "Tab":
                write("   ")
                break;
            case " ":
                write(" ")
                break;
            default:
                write(e.key)

                break;
        }

        
        updateEditor();


        let elements = [
            "<p>Current line index: " + lineCurrentIndex + "</p>",
            "<p>Current Lines: " + lines.length + "</p>",
            "<p>GLOBAL Cursor Position: " + globalCursorPosition +"</p>",
            "<p>LOCAL Cursor Position: " + localCursorPosition +"</p>"
        ]
        Label1.innerHTML=elements.join("");
        for (let line of lines){
            Label1.innerHTML += "<h1>" + line + "</h1>"
        }
        
    }

});


function updateEditor(){
       let i = 0;
        for(line of lines){
            line.updatePosition(i);
            if (line instanceof Line){
                EditorContent.innerHTML += line.toHTML();
                NumsColumn.innerHTML += `<p class="number">${i}</p>`
            }
            i++;
        }
}


