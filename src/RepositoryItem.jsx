import React from "react";
import PropTypes from "prop-types";

const RepositoryItem = ({ name, type, tech, size, updated }) => {
  return (
    <div className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center p-3">
      <div className="mb-2 mb-sm-0">
        <h6 className="mb-1">{name}</h6>
        <small className="text-muted">
          {tech} • {size} • Updated {updated}
        </small>
      </div>
      <span
        className={`badge bg-${type === "Public" ? "success" : "primary"} mt-2 mt-sm-0`}
      >
        {type}
      </span>
    </div>
  );
};

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

export default RepositoryItem;
