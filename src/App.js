import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import NotFound from "./Pages/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DataSliceAction } from "./Store/DataSlice";
import { DisplayGridItemsAction } from "./Store/DisplayGirdItemsSlice";
import NumberOfPages from "./lib/paginationUtil";
import Overlay from "./Components/Overlay";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(DataSliceAction.fetchItem(data));
      const cutData = data.slice(0, 9);
      dispatch(DisplayGridItemsAction.updateGridView({ data: cutData }));
      dispatch(DisplayGridItemsAction.setPages({ pages: NumberOfPages(data) }));
    }
    fetchData();
  }, []);
  return (
    <>
      <Overlay />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
