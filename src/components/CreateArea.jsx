import React, { useState } from "react";

function CreateArea() {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    }


    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
