
import React from 'react';

class OfferPopup extends React.Component {
	render() {
		return(
			<div className="row modalSection userOfferPopup">
				<div className="col-md-6 aop_imgWrap">
					<img src="img/imgOffer.png" />
				</div>
				<div className="col-md-6 ">

					<div className="offerHead">Get Rs. 500 off on  purchase of furniture</div>
					<div><img src="img/ulLogo.png" /></div>
					<div className="logoText">Urban ladder is a online furniture company.</div>
					<div className="ov">
						Offer Value:<label>Rs 500 Off</label>
					</div>
					<input type="button" className="addTCart" value="Add To Cart" />
					<div className="vp">Validity Period:<label>25th Feb,2016</label></div>
					<div className="vr">Validity Region:<label>Pan India through website/App</label></div>
					<div className="redeem">
							How to Reddem the offer:<span>asdsdaakjsdbaskjdb asdmasdk asd ad asd asd as das dasd asd sa as</span>
							<p className="termshead">Terms of this offer</p>
							<p className="termstext">
								asndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd o
							</p>
					</div>
				</div>
			</div>
			);
	}
}

export default OfferPopup;