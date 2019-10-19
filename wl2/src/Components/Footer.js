import React from "react";
import {
  SearchButton
  ,CreateButton
} from "./";

const Footer = (props) => {
  const {
    showSearch
    // , lists
    // , setLists
    ,plusAction
  } = props;

  return(
    <footer>
      <div className="footerItems">
        {(showSearch === true) &&
          <React.Fragment>
            <SearchButton />
            <span></span>
            <span></span>
          </React.Fragment>
        }
        <CreateButton plusAction={plusAction} />
      </div>
      {/* <h5 className="copyright">&copy;2019 Wunderlist</h5> */}
    </footer>
  )
}

export default Footer;