import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/Shop/shop.selector";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";
const mapStateToProps = createStructuredSelector({
    isLoading: state=>!selectIsCollectionLoaded(state),
  });
  
  const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionPage);
  
  export default CollectionPageContainer