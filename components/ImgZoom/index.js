import React, { PropTypes, Component } from 'react';
import { Row, Col} from 'antd';
import DocCookies from './docCookies.js'
import R from 'ramda';

// add remove to Array.prototype for delete the given index element
Array.prototype.remove=function(dx) {
　　if(isNaN(dx)||dx>this.length){return false;}
　　for(var i=0,n=0;i<this.length;i++)
　　{
　　　　if(this[i]!=this[dx])
　　　　{
　　　　　　this[n++]=this[i]
　　　　}
　　}
　　this.length-=1
　}
let cookie = [];
const ImgZoom = React.createClass({
  getInitialState() {
     return {
     }
  },
  setCookies() {
		let date = new Date();
		// cookie's expired in 15 days for default
		const expired = this.props.duration || 1000 * 60 * 60 * 24 * 15
		date = date.getTime() + expired;
		DocCookies.setItem('LT_favrorate_login_entry', JSON.stringify(cookie), date);
	},
	getCookies() {
		 if(this.hasCookies() === true) {
		 		return JSON.parse(DocCookies.getItem('LT_favrorate_login_entry'));
		 } else {
	 		 return this.props.data;
		 }
	},
	hasCookies() {
		return DocCookies.hasItem('LT_favrorate_login_entry');
	},
	removeCookies() {
		DocCookies.removeItem('LT_favrorate_login_entry');
	},
  // sort the images, default by last 3 Click Time desc.
  sort(title) { 
  	console.log(title);
  	let temp = [];
  	let data = this.props.data;
		for(let i= 0; i< data.length; i++) {
			if (data[i].title === title) {
				temp[0] = data[i];
				data.remove(i);
			}	
		}
		cookie = R.clone(temp.concat(data));
		// set cookie for zooming the favorate_login_entry next time he/she login
		this.setCookies();
  },
  render() {
  	const data = this.getCookies() || this.props.data;
    return (
    	<div>
				<Row>
					<Col span="10" push="7">
						<a href={data[0].link} onClick={this.sort.bind(this, data[0].title)}><image src={data[0].image} style={{margin: '10px auto 10px auto'}}/></a>
					</Col>
				</Row>
				<Row style={{margin: '20px auto 20px auto'}}>
						{
							R.clone(data).slice(1).map((dat) => {
								return (
							 		<Col span="2" push="5">
						 				{this.props.titleVisible ? dat.title : ''}
						 				<a href={dat.link} onClick={this.sort.bind(this, dat.title)}>
						 					<image src={dat.thumbnail} style={{marginBottom: '-4px', width:20, height: 20}}/>
					 					</a>
				 					</Col>
							 );
							})
						}
				</Row>
			</div>
    )
  }
});

ImgZoom.propTypes = {
  titleVisible: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}

export default ImgZoom;
module.exports = exports['default'];
