import React, { useState } from 'react'

export default function Textarea(props) {
    // You can write your JS here 

    // Using useState to change the text
    const [text, setText] = useState("");
    // text is our first parameter i.e. 'start writing'
    // setText is a function used to update the value of text


    // Setting preview of text
    // if(text === ""){
        //     preview = "Please Enter some text inside text box to see the preview";
        // }
        // else{
    //     preview = text;
    // }

    
    
    let preview;

    function pre(){
        let validText = text.split(/\s+/).filter((valid) =>{return valid.length !== 0});
        if(validText.length === 0){
            preview = "Please Enter some text inside text box to see the preview";
            
        }
        else{
            preview = text;
            
        }
        return preview;
    }
    preview = pre();
    


    // Word count
    let words = text.split(/\s+/).filter((element) =>{return element.length !== 0}).length;
    let chars = text.length;


    // Changing text to uppercase
    function handleUpCase() {
        let capital = text.toUpperCase();
        setText(capital);   // Updating the value of text 

        if(text === ""){
            props.alert("Plzz Enter some text into textbox to make it capitalize", "warning");
        }
        else{
            props.alert("Converted to UPPERCASE.", "success");
        }

    }
    


    // Changing text to lowercase
    function handleLowCase() {
        let small = text.toLowerCase();
        setText(small);

        if(text === ""){
            props.alert("Plzz Enter some text into textbox to make it lowercase", "warning");
        }
        else{
            props.alert("Converted to lowercase.", "success");
        }

    }

    // Clearing our textarea
    function clearText() {
        setText("");

        if(text === ""){
            props.alert("Plzz Enter some text into textbox to clear it", "warning");
        }
        else{
            props.alert("Textbox Cleared.", "success");
        }
    }

    // Converting text into title case
    function titleCase() {
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = (arr[i].charAt(0).toUpperCase()) + ((arr[i].slice(1)).toLowerCase());
        }
        const titleText = arr.join(" ");
        setText(titleText);

        if(text === ""){
            props.alert("Plzz Enter some text into textbox to make it TitleCase ", "warning");
        }
        else{
            props.alert("Converted to TitleCase.", "success");
        }
    }

    // Converting text into Sentence case
    function sentenceCase() {
        const arr1 = text.split(".");
        arr1[0] = arr1[0].charAt(0).toUpperCase() + (arr1[0].slice(1).toLowerCase());

        for (let i = 1; i < arr1.length; i++) {
            arr1[i] = (arr1[i].charAt(1).toUpperCase()) + ((arr1[i].slice(2)).toLowerCase());
        }
        const titleText = arr1.join(". ");
        setText(titleText);

        if(text === ""){
            props.alert("Plzz Enter some text into textbox to make it Sentence case", "warning");
        }
        else{
            props.alert("Converted to Sentence case.", "success");
        }
    }


    // Using onChange function
    function handleChange(event) {
        setText(event.target.value);    // This line allow us to edit the textarea
    }


    return (
        <>
            {/* Text area */}
            <div className="allContent" >
                <div className="container1" >
                    <h1 className='subHeading'>Try TextConverter - Manipulate your Text</h1>
                    <textarea className="form-control area" value={text} placeholder="Start writing" onChange={handleChange} aria-label="With textarea" style={props.myStyle}></textarea>
                </div>

                {/* Convert buttons */}
                <div className="buttons">
                    <button className="btn btn-primary btn-dark convertButton upperCase" onClick={handleUpCase}>Convert to UPPERCASE</button>

                    <button className="btn btn-primary btn-dark convertButton lowerCase" onClick={handleLowCase}>Convert to lowercase</button>

                    <button className="btn btn-primary btn-dark convertButton clearText" onClick={clearText}>Clear Text</button>

                    <button className="btn btn-primary btn-dark convertButton titleCase" onClick={titleCase}>Convert to Title Case</button>

                    <button className="btn btn-primary btn-dark convertButton sentenceCase" onClick={sentenceCase}>Convert to Sentence case</button>
                </div>

                {/* Text Summary */}
                <div className="summary">
                    <h3>Text summary</h3>
                    <p>{words} words and {chars} characters</p>
                </div>

                {/* Text preview */}
                <div className="preview">
                    <h4>👇 Your Text Preview </h4>
                    <p>{preview}</p>
                </div>
            </div>
        </>

    )
}
