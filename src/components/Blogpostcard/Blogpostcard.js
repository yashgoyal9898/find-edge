import Image from "next/image"
import "./Blogpostcard.css"

function Blogpostcard() {
  return (
    <div className="bpc-par-wrapper">
        <Image alt="" src="/image/blog-post-card.png" width="500" height="500"/>
        <div className="bpc-contnt">
            <span>Technology</span>
            <h4 className="post-title">Hello</h4>
            <div className="post-author-details">
                <div>
                    <Image alt="" src="/image/bpc-author.png" width="36" height="36"/>
                    <span>Jason Francisco</span>
                </div>
                <span>August 20, 2022</span>
            </div>
        </div>
    </div>
  )
}

export default Blogpostcard