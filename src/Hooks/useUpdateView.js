import { useDispatch } from "react-redux";
import { DisplayGridItemsAction } from "../Store/DisplayGirdItemsSlice";
import { cutData, findPosition } from "../lib/paginationUtil";

function useUpdateView(currentPage, dataArray) {
  const dispatch = useDispatch();

  dispatch(DisplayGridItemsAction.setCurrentPage({ currentPage }));
  const pos = findPosition(currentPage);
  dispatch(
    DisplayGridItemsAction.updateGridView({
      data: cutData(pos - 9, pos, dataArray),
    })
  );
}

export default useUpdateView;
