import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

const CreateButton = props => {
  // const { plusAction } = props;

  return (
    <div onClick={() => props.plusAction()}>
      <FontAwesomeIcon icon={faPlus} className="button createButton" />
    </div>
  );
};

export default CreateButton;
