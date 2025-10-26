import logo from "@/assets/logo.png";

export const Logo = () => {
    return (
        <div className="w-full flex justify-center lg:inline-block">
            <a href="/">
                <img src={logo} alt="SNB" className="h-16 w-auto"/>
            </a>
        </div>
    )
}