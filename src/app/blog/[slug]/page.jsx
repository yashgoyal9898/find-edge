import "./blogpostpage.css"

function BlogPost({params}) {
  return (
    <div className='tm-bppage'>
      <div className="bppage-top">
        <h1>{params.slug}</h1>
      </div>
      <div className="bppage-bottom">
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
      </div>
    </div>
  )
}

export default BlogPost