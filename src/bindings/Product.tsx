import { connect } from 'react-redux'
//Import action dùng để dispatch
import {actLoadData} from '../actions';

import Product from '../component/Product';

const mapStateToProps = (state : any, ownProps : any) => {
    return {
      items: state.load.items
    }
  }
  
  const mapDispatchToProps = (dispatch : any) =>  {
    return {
      load: (content : any[]) => {
        dispatch(actLoadData(content))
      
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Product);