
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

    const [notes, setNotes] = useState("");

    function addNote(note) {
        console.log(note);
    }

    return (<div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((note) => {
            return <Note
                key={note.key}
                title={note.title}
                content={note.content}
            />;
        })}

        <Footer />
    </div>);
}

export default App;