import { useEffect } from "react";
import { NoteType } from "./NoteType";

interface UsePersistanceProps {
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
}

export function usePersistence({ setNotes, notes }: UsePersistanceProps) {
  useEffect(() => {
    try {
      const savedNotes = JSON.parse(
        window.localStorage.getItem("notes") ?? "[]"
      );

      if (savedNotes.length) {
        setNotes(savedNotes);
      }
    } catch (error) {
      console.log(
        "Something went wrong while getting notes from local storage ...."
      );
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
}
