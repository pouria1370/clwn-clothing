import React from "react";
import { Route } from "react-router-dom";
import { FetchCollectionStart } from "../../redux/Shop/Shop-actions";
import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
class SHOPPAGE extends React.Component {
  componentDidMount() {
    const { FetchCollectionStart } = this.props;
    FetchCollectionStart();
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
  FetchCollectionStart: () => dispatch(FetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(SHOPPAGE);
