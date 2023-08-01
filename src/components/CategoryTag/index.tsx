import ManIcon from "@mui/icons-material/Man";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import TvIcon from "@mui/icons-material/Tv";
import WomanIcon from "@mui/icons-material/Woman";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Chip } from "@mui/material";

import { Category } from "domains/Product";

import "./CategoryTag.scss";

interface CategoryProps {
  category: Category;
}

const CategoryTag = ({ category }: CategoryProps) => {
  switch (category) {
    case Category.MEN_CLOTHING:
      return (
        <Chip
          icon={<ManIcon />}
          label={category}
          color="primary"
          variant="outlined"
        />
      );
    case Category.WOMEN_CLOTHING:
      return (
        <Chip
          icon={<WomanIcon />}
          label={category}
          variant="outlined"
          className="woman"
        />
      );
    case Category.JEWELERY:
      return (
        <Chip
          icon={<WorkOutlineIcon />}
          label={category}
          variant="outlined"
          color="warning"
        />
      );
    case Category.ELECTRONICS:
      return (
        <Chip
          icon={<TvIcon />}
          color="secondary"
          label={category}
          variant="outlined"
        />
      );
    default:
      return (
        <Chip icon={<QuestionMarkIcon />} label={category} variant="outlined" />
      );
  }
};

export default CategoryTag;
