import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  firestore,
  ConvertCollectionsSnapshotsToMap,
} from "../../components/firbase/firebase.utility.js";
import { UpdateCollection } from "../../redux/Shop/Shop-actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinenr = WithSpinner(CollectionPage);

class SHOPPAGE extends React.Component {
  unsuscribeFromSnapShot = null;
  state = { Loading: true };
  componentDidMount() {
    const { collectionRevived } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsuscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = ConvertCollectionsSnapshotsToMap(snapShot);
      collectionRevived(collectionsMap);
      this.setState({ Loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { Loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner 
            isLoading={Loading} {...props} />
            )}
            />
            <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
            <CollectionPageWithSpinenr 
            isLoading={Loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  collectionRevived: (collection) => dispatch(UpdateCollection(collection)),
});
export default connect(null, mapDispatchToProps)(SHOPPAGE);
