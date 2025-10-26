import { Logo } from "@/components/Header/Logo";
import { Navigation } from "@/components/Navigation";

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-2 mt-2">
            <Logo />
            <Navigation />
        </div>
    )
}

export default Header;
