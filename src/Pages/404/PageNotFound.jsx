import React from "react";

import "./PageNotFound.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
