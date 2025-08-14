import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import './index.css'

export default function App() {
	return (
		<div className="min-h-dvh flex flex-col">
			<Navbar />
			<main className="flex-1">
				<Hero />
				<FeaturedProducts />
			</main>
			<Footer />
		</div>
	)
}
