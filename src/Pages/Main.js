import NavigationMenu from "../Components/NavigationMenu";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import GridList from "../Components/Grid/GridList";
import EditModal from "../Components/EditModal";
import { useSelector } from "react-redux";
function Main() {
  const modalSate = useSelector((state) => state.modal.isOpen);
  return (
    <>
      {modalSate && <EditModal />}
      <NavigationMenu />
      <Search />
      <GridList />
      <Pagination />
    </>
  );
}
export default Main;
