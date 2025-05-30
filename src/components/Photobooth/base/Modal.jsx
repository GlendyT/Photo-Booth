const Modal = ({ open, children }) => {
  return (
    <div className={`fixed z-10  ${open ? "" : "hidden"}`} id="modal">
      <div className="flex items-center justify-center min-h-screen px-4 pb-20 text-center sm:block">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

        <div
          className="inline-block align-center bg-purple-300 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-sm h-full w-full "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-purple-500 px-4 pb-4 sm:p-6 sm:pb-4  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
