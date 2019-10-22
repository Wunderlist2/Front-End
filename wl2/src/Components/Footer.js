import React, { useState } from "react";
import { SearchButton, CreateButton } from "./";

const Footer = props => {
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const {
    showSearch,
    // , lists
    // , setLists
    plusAction
  } = props;

  const toggleSearchDialog = () => {
    setShowSearchDialog(!showSearchDialog);
  };

  return (
    <footer>
      <div className="footerItems">
        {showSearch === true && (
          <React.Fragment>
            <SearchButton
              toggleSearchDialog={toggleSearchDialog}
              showSearchDialog={showSearchDialog}
            />
            <span></span>
            <span></span>
          </React.Fragment>
        )}
        <CreateButton plusAction={plusAction} />
      </div>
      {/* <h5 className="copyright">&copy;2019 Wunderlist</h5> */}
    </footer>
  );
};

export default Footer;
