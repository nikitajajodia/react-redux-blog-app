import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostActions } from '../actions'

class PostShow extends Component {
	componentDidMount() {
		const postId = this.props.match.params.id;
		this.props.fetchPost(postId);
	}
	render() {
		console.log("post", this.props.match.params.id, this.props.post);
		return (
			<div>
				Render posts !
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.get('blogObject').get('post')
	}
}

export default connect(mapStateToProps, { ...PostActions})(PostShow);