import React, { useState } from "react";
import { NotesContext } from "./NotesContext";
import { AddNotes } from "./AddNotes";
import { ListNotes } from "./ListNotes";

export const Notes = () => {
  const [Notes, setNotes] = useState([
    {
      id:101,
      title: "Goind to market",
      description: "Buy some fruits",
      startTime: new Date(),
      endTime: new Date(),

    },
    {
      id:102,
      title: "Going to school",
      description: "Attend some classes",
      startTime: new Date(),
      endTime: new Date(),
    }
  ]);
  const addNote = (note) => {
    setNotes([...Notes, note]);
  };
  const deleteNote = (id) => {
    setNotes(Notes.filter((note) => note.id !== id));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Notes</h1>
      <NotesContext.Provider value={{ Notes, addNote, deleteNote }}>
        <AddNotes />
        <ListNotes />
      </NotesContext.Provider>
    </div>
  );
};
