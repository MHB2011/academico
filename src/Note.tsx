import { FaTrash } from "react-icons/fa";
import { NoteType } from "./NoteType";

export const Note = ({
  note,
  setNotes,
}: {
  note: NoteType;
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
}) => {
  return (
    <section className="note-container">
      <div className="title-row">
        <h1>{note.title}</h1>
        <span className="faTrash-wrapper">
          <FaTrash
            style={{ color: "currentColor" }}
            className="faTrash"
            onClick={() => {
              const shouldRemove = window.confirm(
                "Are you sure you want to remove this item ?"
              );

              if (shouldRemove) {
                setNotes((prevNotes) => {
                  const newNotes = prevNotes.filter((n) => n.id !== note.id);
                  return newNotes;
                });
              }
            }}
          />
        </span>
      </div>
      <p className="note-body">{note.body}</p>
    </section>
  );
};
