import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RouterPage from './routes/RouterPage'

export default function App() {
  // TODO: Add nøvendig logikk

  return (
    <div data-testid="layout">
      <Navbar />
      <main className="h-full">
        <RouterPage />
      </main>
      <Footer />
    </div>
  )
}
