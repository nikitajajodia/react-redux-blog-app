import React from 'react';
import { PostIndex } from '../components';

export default function LoginPage() {
  return (
    <div className='wrapper'>
      <section className='login-box'>
        <div className='login-box-body'>
          <h1 className='text-center'>
            <PostIndex />
          </h1>
        </div>
      </section>
    </div>
  );
}
