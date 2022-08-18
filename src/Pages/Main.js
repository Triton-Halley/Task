import NavigationMenu from "../Components/NavigationMenu";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import GridList from "../Components/Grid/GridList";
import EditModal from "../Components/EditModal";
function Main() {
  return (
    <>
      <EditModal />
      <NavigationMenu />
      <Search />
      <GridList />
      <Pagination />
    </>
  );
}
export default Main;
