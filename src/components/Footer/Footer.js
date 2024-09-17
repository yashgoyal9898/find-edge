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
            <Link className="tm-text-hover" href="/disclaimer"> Disclamier </Link>
            <Link className="tm-text-hover" href="/privacy-policy"> Privacy Policy </Link>
            <Link className="tm-text-hover" href="/terms-and-condition"> Terms and Conditions </Link>
        </div>
    </footer>
  )
}

export default Footer