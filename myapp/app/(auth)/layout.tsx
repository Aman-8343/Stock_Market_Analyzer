import Link from "next/link";
import Image from "next/image";

const Layout = ({children} : {children:React.ReactNode}) => {
    return (
        <main className="auth-layout">
            <section className="auth-left-section scollbar-hide-default">
                <Link href='/' className="auth-logo">
                    <Image src="/assests/icon/logo.svg" alt="logo" /
                </Link>
            </section>

        </main>
    )
}
export default Layout
