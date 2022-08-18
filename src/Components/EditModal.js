import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataSliceAction } from "../Store/DataSlice";
import { ModalAction } from "../Store/ModalSlice";
function EditModal() {
  const modalStatus = useSelector((state) => state.modal.isOpen);
  const { title, id, desc } = useSelector((state) => state.modal.currentData);
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState(title);
  const saveChangesHandler = () => {
    dispatch(DataSliceAction.editItem({ titleInput, id, desc }));
    dispatch(ModalAction.closeModal());
  };
  const closeModalHandler = () => {
    dispatch(ModalAction.closeModal());
  };
  const InputOnchangeHandler = (e) => {
    const data = e.target.value;
    setTitleInput(data);
  };
  return (
    <>
      {modalStatus && (
        <div className=" fixed z-50 w-full flex justify-center items-center h-screen">
          <div className="bg-white flex flex-col w-1/3 p-4 rounded-lg">
            <div className="mb-6">
              <input
                // ref={usernameInputRef}
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Title"
                value={titleInput}
                onChange={InputOnchangeHandler}
              />
            </div>

            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
              value={desc}
            ></textarea>

            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                onClick={closeModalHandler}
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={saveChangesHandler}
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
