import React from 'react'


export default class CustomDropZone extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {fileName: "No File Selected"}
        this.handleOnDrop= this.handleOnDrop.bind(this)
        this.handleDragOver= this.handleDragOver.bind(this)
    }

    //j'aurais pu le passer par une props
    styleDZ={
        "width":"250px",
        "height":"250px",
        "backgroundColor":"green"
    }

    handleOnDrop=(ev)=>
    {
        console.log('File(s) dropped');

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {
                    if(i===0) {
                        var file = ev.dataTransfer.items[i].getAsFile();
                        console.log('... file[' + i + '].name = ' + file.name);
                        this.setState( (prevstate)=>({fileName:file.name}))
                    }
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (var k = 0; k < ev.dataTransfer.files.length; k++) {
                if(k===0) {
                    console.log('... file[' + k + '].name = ' + ev.dataTransfer.files[k].name);
                    this.setState( (prevstate)=>{return {fileName:file.name} })
                }
            }
        }
    }

    //pour empêcher le comportement par défaut
    handleDragOver=(ev)=>
    {
        ev.stopPropagation();
        ev.preventDefault();
    }

    render()
    {
        return (
                <div>
                    <div style={this.styleDZ} onDrop={this.handleOnDrop} onDragOver={this.handleDragOver}></div>
                    <p>{this.state.fileName}</p>
                </div>
                   )
    }

}

