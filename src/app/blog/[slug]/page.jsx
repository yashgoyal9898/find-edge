import React from 'react'

function BlogPost({params}) {
    console.log(params);
  return (
    <div>BlogPost {params.slug} </div>
  )
}

export default BlogPost