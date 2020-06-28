import React from "react";
import PropTypes from "prop-types";

function NewsSelect(props) {
  return (
    <select name="berita-select" id="berita-select">
      <option value="detik">Detik.com (regional)</option>
      <option value="kompas">Kompas (nasional)</option>
    </select>
  );
}

NewsSelect.propTypes = {
  changeNewsSource: PropTypes.func,
};

export default NewsSelect;
