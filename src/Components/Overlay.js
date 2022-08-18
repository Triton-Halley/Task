import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
function Overlay() {
  const modalState = useSelector((state) => state.modal.isOpen);
  const modal = ReactDOM.createPortal(
    <div className="bg-black fixed z-40 opacity-20 h-screen w-full"></div>,
    document.getElementById("overlay")
  );
  return <>{modalState && modal}</>;
}
export default Overlay;
