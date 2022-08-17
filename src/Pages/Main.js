import NavigationMenu from "../Components/NavigationMenu";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import GridList from "../Components/Grid/GridList";
function Main() {
  return (
    <>
      <NavigationMenu />
      <Search />
      <GridList />
      <Pagination />
    </>
  );
}
export default Main;
