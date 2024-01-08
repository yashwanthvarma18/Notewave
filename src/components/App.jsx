import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function onSubmitted(submittedContent) {
    setNotes((prevNotes) => {
      return [...prevNotes, submittedContent];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmitted={onSubmitted} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          notedelete={deleteNote} // Updated prop name to match the function name
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
