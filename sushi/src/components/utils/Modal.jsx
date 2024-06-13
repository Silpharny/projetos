const Modal = ({ click, modalVisibility, children }) => {
  return (
    <div
      className={` ${modalVisibility} fixed top-0 z-50 w-screen h-screen bg-[rgb(0,0,0,0.5)] backdrop-blur`}
    >
      <div className="flex flex-col items-center p-4 rounded-2xl shadow-md bg-[rgb(255,255,255)] fixed top-[16%] left-[38%] transform translate-[-50%, -50%] w-[540px] h-[600px] ">
        <button onClick={click} className="self-end">
          <i className="fa-solid fa-circle-xmark text-zinc-900 hover:text-zinc-700 text-4xl flex gap-2"></i>
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
