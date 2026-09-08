class Line{
    constructor(position, content){
        this.position = position;
        this.content = "";
        if (content != undefined){
            this.content = content
        }
    }

    updatePosition(newPos){
        this.position =  newPos;
    }

    getSize(){
        return this.content.length
    }
    
    toHTML(){
        let finalContent = this.content;
        let mod = "";

        if (lineCurrentIndex == this.position){
            mod = `id="currentLine"`;
        }

        if (this.position == lineCurrentIndex){
            finalContent+= `<div class="ghostChar" id="cursorHolder">[]</div>`
        }

        return `<div class="line" ${mod}> ${finalContent}  </div>`
    }

    toString(){
        return `Line  { position: ${this.position}, content: ${this.content}, size ${this.getSize()} }`
    }
}