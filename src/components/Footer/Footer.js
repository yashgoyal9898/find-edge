import Image from "next/image"
import "./Footer.css"
import Link from "next/link"

function Footer() {
  return (
    <footer className="main-footer">
                <div className="footerleft">
                    <Image alt="" src="/image/footer.png" width="48" height="28" />
                    <div>
                        <p>Trademinia</p>
                        <span>© 2024. All Rights Reserved.</span>
                    </div>
                </div>
                <div className="footerright">
                    <Link href="/disclaimer"> Disclamier </Link>
                    <Link href="/privacy-policy"> Privacy Policy </Link>
                    <Link href="/sitemap"> Sitemap </Link>
                </div>
            </footer>
  )
}

export default Footer