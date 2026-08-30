class Line{
    constructor(position, content){
        this.position = position;
        this.content = "";
        if (content != undefined){
            this.content = content
        }
    }

    addChars(){

    }

    getSize(){
        return this.content.length
    }

    toHTML(){
        let finalContent = this.content;
        let mod;

        if (lineCurrentIndex == this.position){
            mod = `id="currentLine"`;
        }

        // if ()

        return `<div class="line" ${mod}> ${finalContent}  </div>`
    }

    toString(){
        return `Line  { position: ${this.position}, content: ${this.content}, size ${this.getSize()} }`
    }
}