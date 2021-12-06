import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "@mui/material";
import { useHistory } from "react-router-dom";
import Warning from "src/components/Warning";

import "./NotFound.scss";

const NotFound = () => {
  const history = useHistory();

  const handleClick = () => history.push("/");

  return (
    <div className="not-found-container">
      <Warning
        icon={<SentimentVeryDissatisfiedIcon />}
        message="Page not found"
      />
      <Link onClick={handleClick}>Go to main page</Link>
    </div>
  );
};

export default NotFound;
