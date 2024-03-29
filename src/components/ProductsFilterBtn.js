import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

import Grid from "@mui/material/Grid";

const ProductsFilterBtn = ({ tag }) => {
  const [tagOn, setTagOn] = useState(false);
  const { tagsFilter, setTagsFilter } = useContext(MyContext);

  const onClickFilterBtn = (e) => {
    const tag = e.target.innerText;
    if (!tagOn) {
      setTagsFilter([...tagsFilter, tag]);
      setTagOn(true);
    } else {
      setTagsFilter(
        tagsFilter
          .slice(0, tagsFilter.indexOf(tag))
          .concat(tagsFilter.slice(tagsFilter.indexOf(tag) + 1))
      );

      setTagOn(false);
    }
  };

  return (
    <Grid
      item
      xs={1}
      style={{ color: `${tagOn ? "red" : "gold"}` }}
      onClick={onClickFilterBtn}
    >
      {tag}
    </Grid>
  );
};

export default ProductsFilterBtn;
