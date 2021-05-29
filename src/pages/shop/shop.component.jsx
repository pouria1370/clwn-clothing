import React from "react";
import { Route } from "react-router-dom";
import { FetchCollectionStartAsync } from "../../redux/Shop/Shop-actions";
import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.containerxx c";
import CollectionPageContainer from "../collection/collection.container";

class SHOPPAGE extends React.Component {
  componentDidMount() {
    const { FetchCollectionStartAsync } = this.props;
    FetchCollectionStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  FetchCollectionStartAsync: () => dispatch(FetchCollectionStartAsync()),
});
export default connect(null, mapDispatchToProps)(SHOPPAGE);
