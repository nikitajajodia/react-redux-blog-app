import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { PostActions } from '../actions';

class PostShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}
	componentDidUpdate(prevProps) {
		if(this.props.postDeleted != prevProps.postDeleted && this.props.postDeleted) {
			this.props.history.push('/');
		}
	}
	deletePost() {
		const { id } = this.props.match.params;
		this.props.deletePost(this.props.post.id);
	}
	render() {
		const { post } = this.props;
		if(post.length == 0) {
			return <div className="container show-post-container"><p>Loading your post...</p></div>
		}
		return (
			<div className="container show-post-container">
				<Link to="/" className="home-btn btn btn-primary">Home</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.deletePost.bind(this)}>Delete Post</button>
				<h3>{post.title}</h3>
				<h6>categories: {post.categories}</h6>
				<p>content: {post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.get('blogObject').get('post'),
		postDeleted: state.get('blogObject').get('postDeleted')
	}
}

export default connect(mapStateToProps, { ...PostActions})(PostShow);