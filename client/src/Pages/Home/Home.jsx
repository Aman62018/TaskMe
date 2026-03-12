import { MdAdd } from "react-icons/md";
import NoteCard from "../../component/Cards/NoteCard";
import Navbar from "../../component/Navbar/Navbar";
import EditNotes from "./EditNotes";
import { useState } from "react";
import { data } from "react-router-dom";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meeting on 8th March"
            date="28th Feb 2026"
            content="Meeting on 8th March"
            tags="#Metting"
            isPinned={true}
            onDelete={() => {}}
            onEdit={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2b85ff] hover:bg-blue-600 absolute right-10 bottom-10 "
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[50%] max-h-2/3 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <EditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};
export default Home;
