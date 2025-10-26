const brand = {
  primary: "#0f172a", // deep navy
  accent: "#f59e0b", // amber/orange accent for CTAs
  accentDark: "#d97706",
  logoRed: "#ff1a1a", // SNB logo red tone
};

export const Footer = () => {
    return (
        <footer style={{ background: brand.primary }} className="text-white">
            <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 items-start text-center md:text-left">
                <div>
                    <h3 className="text-lg font-semibold">Find Us</h3>
                    <div className="text-white/80 text-sm mt-1">
                        <p>SNB Electronic Services</p>
                        <p>Units 1 - 3, Blackburn Industrial Estate</p>
                        <p>Enterprise Way</p>
                        <p>Sherburn in Elmet</p>
                        <p>LS25 6NF</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <h3 className="text-lg font-semibold">Business Hours</h3>
                        <div className="text-white/80 text-sm mt-1">
                            <p>08:00 - 17:00 GMT</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <div className="text-white/80 text-sm mt-1">
                            <p>24 Hour Helpline: 07710 840361</p>
                            <p>Email: snb@metaldetector-rentals.co.uk</p>
                            <p>Tel: 01977 689555</p>
                            <p>Fax: 01977 683156</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:justify-end md:items-end m-4 md:m-0">
                    <img className="h-30" src="https://www.metaldetector-rentals.co.uk/images/site/isoBadge.png"></img>
                </div>
            </div>
        </footer>
    )
}