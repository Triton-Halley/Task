import React from "react";
import GridItem from "./GridItem";
import { useSelector } from "react-redux";
function GridList() {
  const fetchedData = useSelector((state) => state.gridView.gridListItems);
  console.log("fetched data", fetchedData);
  return (
    <>
      <div className="grid lg:grid-cols-2  xl:grid-cols-3  md:grid-cols-1  md:w-full items-center justify-center gap-4 m-auto lg:w-2/3 ">
        {fetchedData.map((item) => {
          return (
            <GridItem
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.body}
            />
          );
        })}
      </div>
    </>
  );
}

export default GridList;
