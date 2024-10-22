import React, { useContext } from "react";
import { NotesContext } from "./NotesContext";
import "./notes.css";

export const ListNotes = () => {
  const { Notes ,deleteNote} = useContext(NotesContext);
  console.log(Notes);

  return (
    <div>
      <div id="board">
        {/* <div class="note draggable">
            <div class="text">
              <textarea
                class="cnt"
                placeholder="Enter note description here"
              ></textarea>
              
            </div>
          </div> */}
        {Notes?.map((note) => {
          return (
            <div class="note draggable">
              <div class="text">
                <textarea
                  class="cnt"
                  placeholder="Enter note description here"
                ></textarea>
                <div>
                  <h6>{note.title}</h6>
                  <p>{note.description}</p>
                  <span>Start Time: {note.startTime.toLocaleString()}</span>
                  <span>End Time: {note.endTime.toLocaleString()}</span>
                </div>
                <div class="bottom">
                  <div class="delete">
                    <button onClick={()=>{deleteNote(note.id)}}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
