

const Layout = ({children} : {children:React.ReactNode}) => {
    return (
        <main className="min-h-screen text-gray-300">
            {/*<header></header>*/}
            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}
export default Layout
