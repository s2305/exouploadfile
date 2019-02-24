import React from 'react'
import {connect} from "react-redux";


class CustomDropZone extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.handleOnDrop= this.handleOnDrop.bind(this)
        this.handleDragOver= this.handleDragOver.bind(this)
        this.fileToDownload=null
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
                        this.props.setFileNameToDisplay(file.name)
                        this.fileToDownload=file
                    }
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (var k = 0; k < ev.dataTransfer.files.length; k++) {
                if(k===0) {
                    console.log('... file[' + k + '].name = ' + ev.dataTransfer.files[k].name);
                    this.props.setFileNameToDisplay(ev.dataTransfer.files[k].name)
                    this.fileToDownload=file=ev.dataTransfer.files[k]
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
        const displayCount = this.props.nbrDocs > 0 ? (<p>There're {this.props.nbrDocs} files on server</p>) : ""

        return (
                <div>
                    <div style={this.styleDZ} onDrop={this.handleOnDrop} onDragOver={this.handleDragOver}></div>
                    <p>{this.props.fileNameToDisplay}</p>
                    <button onClick={()=>{ if(this.fileToDownload){
                                      this.props.uploadFile(this.fileToDownload)}else{alert("veuillez selectionner un fichier")}}}>DOWNLOAD</button>
                    <hr/>
                    {displayCount}

                </div>
                   )
    }

}

const mapState = state => ({
    fileNameToDisplay: state.medicalDoc,
    nbrDocs : state.nbrDocs
})

const mapDispatch = (dispatch) => ({
    uploadFile: (fic) => {dispatch.medicalDoc.uploadFile(fic)},
    setFileNameToDisplay : (fileName)=>{dispatch.medicalDoc.setFileNameToDisplay(fileName)}
  }
)

export default connect(mapState, mapDispatch)(CustomDropZone)

