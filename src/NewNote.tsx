import { useState } from "react";
import { NoteType } from "./NoteType";

export const NewNote = ({
  addNewNote,
}: {
  addNewNote: React.Dispatch<React.SetStateAction<NoteType[]>>;
}) => {
  const maxLen = 250;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > maxLen) return;
    setBody(value);
  };

  return (
    <section className="note-container yellow">
      <div className="flex-row">
        <p>Title:</p>{" "}
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <p>Write something:</p>
      <textarea
        rows={6}
        className="textArea"
        value={body}
        onChange={handleChangeBody}
      />
      <div className="button-container">
        <button
          className="add-button"
          onClick={() => {
            if (!title || !body) {
              return;
            }

            addNewNote((prev) => [
              ...prev,
              { id: String(prev.length + 1), title, body },
            ]);
            setBody("");
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </section>
  );
};
