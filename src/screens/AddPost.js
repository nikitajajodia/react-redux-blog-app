import React from 'react';
import { AddPostComponent } from '../components';

export default function AddPost(props) {
  return (
    <div className='wrapper'>
      <section className='login-box'>
        <div className='login-box-body'>
          <h1 className='text-center'>
            <AddPostComponent history={props.history} />
          </h1>
        </div>
      </section>
    </div>
  );
}
