import React, { useState } from "react";
import TagInput from "../../component/Input/TagInput";
import { MdClose } from "react-icons/md";

const EditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState([]);
  const [error, setError] = useState(null);

  const addNewNote = async () => {};
  const EditNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("please enter title");
      return;
    }
    if (!content) {
      setError("please enter the content");
      return;
    }
    setError("");
    if (type === "edit") {
      EditNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full items-center justify-center absolute -top-3 -right-3 p-2 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="go to college"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">content</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          type="text"
          placeholder="content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="mt-2">
        <label className="input-label">Tags</label>
        <TagInput tags={tag} setTags={setTag} />
      </div>
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
      <button className="btn-primary font-medium  p-3" onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
};

export default EditNotes;
