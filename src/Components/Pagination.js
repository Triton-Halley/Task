import { useSelector, useDispatch } from "react-redux";
import { DisplayGridItemsAction } from "../Store/DisplayGirdItemsSlice";
import { cutData } from "../lib/paginationUtil";
function Pagination() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.gridView.pages);
  const currentPage = useSelector((state) => state.gridView.currentPage);
  const AllPosts = useSelector((state) => state.data.data);

  const numbers = [];

  for (let i = 0; i < pages; i++) {
    numbers.push(i + 1);
  }
  const PageHandler = (e) => {
    const num = +e.target.textContent;
    move(num);
  };
  function move(currentNum) {
    dispatch(
      DisplayGridItemsAction.setCurrentPage({ currentPage: currentNum })
    );
    const pos = (currentNum * 9) % 100;
    dispatch(DisplayGridItemsAction.updatePosition({ pos: pos }));
    console.log("cut :", cutData(pos - 9, pos, AllPosts), AllPosts);
    dispatch(
      DisplayGridItemsAction.updateGridView({
        data: cutData(pos - 9, pos, AllPosts),
      })
    );
  }
  const nextPage = () => {
    let curr = currentPage;
    curr++;
    if (curr >= pages) move(pages);
    else move(curr);
  };
  const previousPage = () => {
    let curr = currentPage;
    curr--;
    if (curr <= 1) move(1);
    else move(curr);
  };
  return (
    <>
      <div className="flex justify-center m-4">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item " onClick={previousPage}>
              <span className="page-link cursor-pointer relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none">
                Previous
              </span>
            </li>
            {numbers.map((num) => {
              return (
                <li data-num={num} key={num} className="page-item">
                  {/*   */}
                  <span
                    onClick={PageHandler}
                    className={`${currentPage === num ? "active" : "normal"}`}
                  >
                    {num}
                  </span>
                </li>
              );
            })}
            <li className="page-item" onClick={nextPage}>
              <span className="normal">Next</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;
