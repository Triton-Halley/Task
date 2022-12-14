import { useDispatch } from "react-redux";
import { ModalAction } from "../../Store/ModalSlice";
function GridItem({ title, id, desc }) {
  const dispatch = useDispatch();
  const openEditModal = () => {
    dispatch(ModalAction.setData({ title, desc, id }));
    dispatch(ModalAction.openModal());
  };
  return (
    <>
      <div className="flex md:justify-center">
        <div className="flex flex-col p-6  rounded-lg shadow-lg bg-white max-w-sm h-[278px]">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {title}
          </h5>
          <p className="text-gray-700 w-[336px] h-[200px] text-base mb-4">
            {desc}
          </p>
          <button
            onClick={openEditModal}
            type="button"
            className=" inline-block w-fit px-6 justify-self-end py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            edit
          </button>
        </div>
      </div>
    </>
  );
}
export default GridItem;
