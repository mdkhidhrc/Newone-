export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--brand-primary) / 0.7), transparent 60%)' }} />
				<div className="absolute top-40 right-[-20%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--brand-accent) / 0.7), transparent 60%)' }} />
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
				<div className="grid items-center gap-10 md:grid-cols-2">
					<div className="space-y-6 animate-fade-up">
						<p className="text-sm tracking-widest text-foreground/60 uppercase">New Arrivals</p>
						<h1 className="text-4xl md:text-6xl font-bold leading-tight"><span className="text-gradient">See the future</span> in perfect clarity</h1>
						<p className="text-foreground/70 max-w-prose">Premium eyewear engineered for comfort, precision, and style. Neon-inspired aesthetics meet crystal optics—for everyday vision and standout nights.</p>
						<div className="flex flex-wrap gap-3">
							<a href="#collections" className="btn btn-primary glow-primary">Shop collections</a>
							<a href="#about" className="btn btn-ghost">Why Arcadia</a>
						</div>
					</div>
					<div className="relative">
						<div className="card p-4 md:p-6">
							<div className="aspect-[4/3] w-full rounded-[var(--radius-lg)] bg-gradient-to-br from-[hsl(var(--brand-primary)/0.35)] to-[hsl(var(--brand-accent)/0.35)] flex items-center justify-center">
								<span className="text-foreground/70">Product spotlight</span>
							</div>
							<div className="mt-4 flex items-center justify-between">
								<div>
									<h3 className="font-semibold">Neon Spectra</h3>
									<p className="text-sm text-foreground/60">Ultra-light titanium • Blue-light filter</p>
								</div>
								<button className="btn btn-ghost">Add to cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}