import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PostActions } from '../actions'

class AddPostComponent extends Component {
	renderField(field) {
		const { meta } = field;
		const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type='text'
					{...field.input}
				/>
				{meta.touched && meta.error &&
			    <span className="error">{meta.error}</span>}
			</div>
		)
	}
	onSubmit(values) {
		this.props.savePost(values);
	}
	componentDidUpdate(prevProps) {
		if(this.props.postCreated != prevProps.postCreated && this.props.postCreated) {
			this.props.history.push('/');
		}
	}
	render() {
		const { handleSubmit } = this.props;
		return (
			<form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					name="title"
					label="Title for Post"
					component={this.renderField}
				/>
				<Field
					name="categories"
					label="Categories"
					component={this.renderField}
				/>
				<Field
					name="content"
					label="Post Content"
					component={this.renderField}
				/>
				<button
					type='submit'
					className="btn btn-primary"
				> Save </button>
				<Link to= '/' className="btn btn-danger ml-10">Cancel</Link>
			</form>
		)
	}
}

function validate(values) {
	const errors = {};
	const title = values.get('title');
	const categories = values.get('categories');
	const content = values.get('content');
	if(!title) {
		errors.title = 'Enter a title'
	}
	if(!categories) {
		errors.categories = 'Enter Category'
	}
	if(!content) {
		errors.content = 'Enter a content'
	}
	return errors;
}

function mapStateToProps(state) {
	return {
		postCreated: state.get('blogObject').get('postCreated')
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	validate
})(
	connect(mapStateToProps, { ...PostActions})(AddPostComponent)
);