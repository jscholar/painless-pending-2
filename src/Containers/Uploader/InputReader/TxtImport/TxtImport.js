import React from 'react';

const TxtImport = (props) => {
    const fileInput = React.createRef();
    const reader = new FileReader();
    reader.onloadend = event => {
        console.log(reader.result);
        props.fileHandler(reader.result);
    }

    const handleInput = () => {
        if (!fileInput.current.files[0]) {
            props.cancelFileInput();
        } else if (!fileInput.current.files[0].name.match(/.txt$/)) {
            alert("Please upload a txt file");
        } else {
            reader.readAsText(fileInput.current.files[0])
        }
    }

    return (
        <div>
            <input type="file" ref={fileInput} onChange={handleInput}></input>
        </div>
    )
};

export default TxtImport;
