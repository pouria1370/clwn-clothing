import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/Shop/shop.selector";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);


export default CollectionsOverviewContainer;
