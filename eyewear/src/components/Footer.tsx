export default function Footer() {
	return (
		<footer className="mt-20 border-t border-white/10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-sm text-foreground/60">© {new Date().getFullYear()} Arcadia Eyewear</p>
				<nav className="flex items-center gap-6 text-sm">
					<a href="#" className="hover:text-foreground/90">Privacy</a>
					<a href="#" className="hover:text-foreground/90">Terms</a>
					<a href="#" className="hover:text-foreground/90">Support</a>
				</nav>
			</div>
		</footer>
	)
}