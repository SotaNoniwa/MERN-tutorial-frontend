import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch all notes from the database
    const fetchNotes = async () => {
      try {
        // Make a GET request to the server
        const res = await axios.get(process.env.REACT_APP_API_BASE_URL);

        console.log(res);

        setNotes(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    // Call fetchNotes function each time component mounts
    fetchNotes();
  }, []);

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            setNotes={setNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
