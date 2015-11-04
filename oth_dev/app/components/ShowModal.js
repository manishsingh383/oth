import React from 'react';
import ShowModalAction from '../actions/ShowModalAction';
import ShowModalStore from '../stores/ShowModalStore';
import OfferPopup from './OfferPopup';
import Footer from './Footer'


class ShowModal extends React.Component {

	componentDidMount() {
		$(this.refs.modal.getDOMNode()).modal({
            show: false
        });
	}

	clickShow(){
		// ShowModalAction.showClickData()
		$(this.refs.modal.getDOMNode()).modal("show");
	}

	// clickClose(){
	// 	 $(this.refs.modal.getDOMNode()).modal("hide");
	// }


    render() {
    		return(
    			<div>
    				<a href="#" onClick={this.clickShow.bind(this)} >How To Avail</a>
	    			<div id="othModalLg" role="dialog" ref="modal" className="modal fade">
		                <div className="modal-dialog modal-lg">
		                    <div className="modal-content">
		                    	 <button type="button" className="close" data-dismiss="modal">&times;</button>
		                        <div className="modal-body">
		                           <OfferPopup />
		                        </div>
		                      
		                    </div>
		                </div>
		            </div>
		            <Footer />
	            </div>
    		);
    }
}

ShowModal.contextTypes = {
 router: React.PropTypes.func.isRequired
};

export default ShowModal;

