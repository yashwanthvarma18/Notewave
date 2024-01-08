import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateArea({ onSubmitted }) { // Destructured onSubmitted prop
 const [zoom, setzoom]=useState(false); 
 const [newContent, setNewContent] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewContent(prevContent => ({
      ...prevContent,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitted(newContent); // Pass the newContent to the onSubmitted function
    console.log("New content:", newContent);
    setNewContent({
      title: "",
      content: ""
    }); // Reset the form after submission
  }
  function expand() {
    setzoom(true);
  }


  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
      {zoom && ( <input
          name="title"
          onChange={handleChange}
          value={newContent.title}
          placeholder="Title"
        />)}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={newContent.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={zoom}>
        <Fab type="submit"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
