import React from "react";
import PropTypes from "prop-types";

function NewsSelect(props) {
  return (
    <select
      value={props.source}
      onChange={props.changeNewsSource}
      name="berita-select"
      id="berita-select"
    >
      <option value="tribun">Tribun News (regional)</option>
      <option value="detik">Detik.com (regional)</option>
      <option value="suara">Suara (regional)</option>
      <option value="kompas">Kompas (nasional)</option>
      <option value="cnbc">CNBC (internasonal)</option>
    </select>
  );
}

NewsSelect.propTypes = {
  changeNewsSource: PropTypes.func,
  source: PropTypes.string,
};

export default NewsSelect;
