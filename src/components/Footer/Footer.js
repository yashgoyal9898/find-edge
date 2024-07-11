import Image from "next/image"
import "./Footer.css"
import Link from "next/link"

function Footer() {
  return (
    <footer className="main-footer">
                <div className="footerleft">
                    <Image alt="" src="/image/footer-logo.svg" width="36" height="36" />
                    <div>
                        <p>MetaBlog</p>
                        <span>© JS Template 2023. All Rights Reserved.</span>
                    </div>
                </div>
                <div className="footerright">
                    <Link href="/blog"> Terms of Use </Link>
                    <Link href="/blog"> Privacy Policy </Link>
                    <Link href="/blog"> Cookie Policy </Link>
                </div>
            </footer>
  )
}

export default Footer