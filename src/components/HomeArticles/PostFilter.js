// PostFilter.js
import React from 'react';

function PostFilter() {
  return (
    <div className="post-filter container max-width-1 m-auto ">
      <span className="filter-item active-filter" data-filter="all">All</span>
      <span className="filter-item" data-filter="design">Design</span>
      <span className="filter-item" data-filter="tech">Tech</span>
      <span className="filter-item" data-filter="mobile">Mobile</span>
    </div>
  );
}

export default PostFilter;
