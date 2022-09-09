import React from 'react';
import spinStyle from "../../styles/Spinner.module.scss"

export const Spinner = () => {
  return (
    <div className={spinStyle.loader}>
      Loading
    </div>
  );
};

