import React, { useContext } from "react";
import { NotesContext } from "./NotesContext";
import { useForm } from "react-hook-form";

export const AddNotes = () => {
  const { addNote } = useContext(NotesContext);
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    addNote({
      id: Math.floor(Math.random() * 1000),
      title: data.title,
      description: data.description,
      startTime: new Date(),
      endTime: new Date(),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <input
            type="text"
            placeholder="Enter title"
            {...register("title", { required: true })}
          />
        </div>
        <div>
          <textarea
            placeholder="Enter description"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div>
          <button type="submit">Add Note</button>
        </div>
      </form>
    </div>
  );
};
