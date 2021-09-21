import { Link } from "react-router-dom";

const TagLinkButton = ({ tag }) => {
  return (
    <Link to={`/tags/${tag.slug}`}>
      <button name={`${tag.text}-link`} className="btn btn-primary">
        {tag.text}
      </button>
    </Link>
  );
};

export default TagLinkButton;
