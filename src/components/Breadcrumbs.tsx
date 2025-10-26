import { ChevronRight } from "lucide-react"

export const Breadcrumbs = () => {
    // Again, this trail should become dynamic once this app gets additional pages.
    return (
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 pt-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
                <li>
                    <a className="hover:underline" href="#">Home</a>
                </li>
                <ChevronRight className="h-4 w-4" />
                <li className="font-medium text-slate-900">Shop</li>
            </ol>
        </nav>
    )
}