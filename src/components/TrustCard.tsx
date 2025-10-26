export const TrustCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string; }) => {
    return (
        <div className="rounded-2xl border bg-white p-6">
            <div className="flex items-start gap-3">
                <div className="rounded-xl p-2 border bg-white">{icon}</div>
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{desc}</p>
                </div>
            </div>
        </div>
    )
}