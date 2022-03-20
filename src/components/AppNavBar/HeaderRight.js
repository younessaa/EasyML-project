import Button from '../Button'
import React from 'react';
function HeaderRight() {
  return (
    <div className="header-right">
          <a href="/">Home</a>
          <a href="/">Models</a>
          <a className="active" href="/">Blogs</a>
          <a href="/">About</a>
          <Button color="rgba(196, 110, 184)" title="Sing Up"/>
        </div>
  )
}

export default HeaderRight
