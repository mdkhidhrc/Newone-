type Product = {
	id: string
	title: string
	price: string
	tags: string
	image: string
}

const products: Product[] = [
	{ id: 'neo-01', title: 'Neon Spectra', price: '$189', tags: 'Titanium • Photochromic', image: '/images/eyewear-1.svg' },
	{ id: 'neo-02', title: 'Arc Pulse', price: '$169', tags: 'Acetate • Blue-light', image: '/images/eyewear-2.svg' },
	{ id: 'neo-03', title: 'Crystal Flux', price: '$149', tags: 'Featherweight • Classic', image: '/images/eyewear-3.svg' },
	{ id: 'neo-04', title: 'Noir Prism', price: '$199', tags: 'Titanium • Polarized', image: '/images/eyewear-4.svg' },
]

export default function FeaturedProducts() {
	return (
		<section id="collections" className="py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-8 flex items-end justify-between">
					<div>
						<h2 className="text-2xl md:text-3xl font-semibold">Featured collections</h2>
						<p className="text-foreground/60">Curated picks for vision and vibe.</p>
					</div>
					<a className="btn btn-ghost" href="#">Browse all</a>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{products.map((p) => (
						<article key={p.id} className="card overflow-hidden group">
							<div className="aspect-square w-full bg-foreground/5">
								<img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" decoding="async" />
							</div>
							<div className="p-4">
								<h3 className="font-semibold">{p.title}</h3>
								<p className="text-sm text-foreground/60">{p.tags}</p>
								<div className="mt-3 flex items-center justify-between">
									<span className="font-semibold">{p.price}</span>
									<button className="btn btn-ghost">Add</button>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}