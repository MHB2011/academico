import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./App.css";
import { Drawer } from "./Drawer";
import { NewNote } from "./NewNote";
import { Note } from "./Note";
import { NoteType } from "./NoteType";
import { usePersistence } from "./usePersistence";

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  usePersistence({ notes, setNotes });

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <header className="header">
        <h1>Academico</h1>
        <span className="faBars-wrapper">
          <FaBars style={{ color: "currentColor" }} onClick={openDrawer} />
        </span>
      </header>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      <main className="container">
        <div className="note-wrapper">
          {notes.map((note) => {
            return <Note key={note.id} note={note} setNotes={setNotes} />;
          })}
          <NewNote addNewNote={setNotes} />
        </div>
      </main>
    </>
  );
}

export default App;
