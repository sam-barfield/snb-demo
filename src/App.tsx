import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { UtilityBar } from '@/components/UtilityBar'
import { DemoBanner } from '@/components/DemoBanner'
import { ShopPage } from '@/pages/Shop'

// Implementing Tanstack Router will eliminate this, and this'll be replaced with a layout component, where the current page is inserted via <Outlet />
function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DemoBanner
        message="This is a demo site."
        subtext="It is non functional and for demonstration purposes only."
        color="#f59e0b" // Todo: use root theme definition in index.css
      />
      <Header />
      <UtilityBar />
      <ShopPage />
      <Footer />
    </div>
  )
}

export default App
