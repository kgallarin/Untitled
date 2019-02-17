import React from "react";
import PropTypes from "prop-types";

const Form = props => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <input type="number" name="input_number" />
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
