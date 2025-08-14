import { useState } from 'react'

export default function Navbar() {
	const [open, setOpen] = useState(false)
	return (
		<header className="navbar">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<a href="#" className="flex items-center gap-2">
						<span className="h-6 w-6 rounded-full bg-gradient-to-br from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))] shadow-[var(--shadow-glow)]" />
						<span className="font-semibold tracking-tight">Arcadia Eyewear</span>
					</a>
					<nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
						<a href="#collections" className="hover:text-foreground transition">Collections</a>
						<a href="#about" className="hover:text-foreground transition">About</a>
						<a href="#contact" className="hover:text-foreground transition">Contact</a>
					</nav>
					<div className="flex items-center gap-3">
						<button className="btn btn-ghost glow-primary">Sign in</button>
						<button className="btn btn-primary glow-primary">Shop now</button>
						<button className="md:hidden btn btn-ghost" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
						</button>
					</div>
				</div>
			</div>
			{open && (
				<div className="md:hidden border-t border-white/10 bg-background/80 backdrop-blur">
					<nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-sm">
						<a href="#collections" className="py-2">Collections</a>
						<a href="#about" className="py-2">About</a>
						<a href="#contact" className="py-2">Contact</a>
					</nav>
				</div>
			)}
		</header>
	)
}