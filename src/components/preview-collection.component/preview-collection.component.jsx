import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((index) => index.id < 5)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps}></CollectionItem>
        ))}
    </div>
  </div>
);
export default CollectionPreview;