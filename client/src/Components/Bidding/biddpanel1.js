import React, { Component } from 'react';
import './bidding.scss';

class Biddpanel1 extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}


	render() {
		return (
			<div>
				<div className="row">
					<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3"></div>
				</div>
				<div className="row">
					<div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
					<div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7">



						<div className="row">
							{/* all data render */}

							<div className="col-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
								<div className="mainbiddingCardDiv">
									<img 
									src='https://res.cloudinary.com/dxk0bmtei/image/upload/v1579687830/15_-_Ozone_Machine_ddgl3d.jpg'
									 alt="card" className="biddingCardImgs" />
									<p className="hoursLeftTag">
										{/* {`${elem.hours} Hrs Left`} */}
										</p>
									<div className="biddingDetailCardDiv">
										{/* {elem &&  */}
										<p className="biddingCardName">
											{/* {elem.billboardAddress} , {elem.billboardCity} */}
											</p>
											{/* } */}
										<p class="biddingCardText">DEAL EXPIRE IN:
												<span className="biddingPageTiming">
													 {/* {`${elem.calculateTime}`} */}
													 </span>
										</p>
										{/* <Link to={{ pathname: `/bidding_detail/${elem._id}`, state: elem }}> */}
										<button class="btn btn-primary">
											<span className="moredetailbiddingbtn">Start Bidding</span>
										</button>
										{/* </Link> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
				</div>

			</div>
		);
	}
}

export default Biddpanel1;