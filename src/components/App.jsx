
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes((prev) => {

            return [...prev, note];
        });

    }

    function deleteNote(id) {
        setNotes(() => {
            return notes.filter((note, index) => {
                return index !== id;
            })
        });
    }

    return (<div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((note, index) => {
            return <Note
                key={index}
                id={index}
                onDelete={deleteNote}
                title={note.title}
                content={note.content}
            />;
        })}

        <Footer />
    </div>);
}

export default App;