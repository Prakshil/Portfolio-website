"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (prefersReducedMotion) return;

		const lenis = new Lenis({
			lerp: 0.08,
			smoothWheel: true,
			wheelMultiplier: 0.8,
		});

		let rafId = 0;
		const raf = (time: number) => {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		};
		rafId = requestAnimationFrame(raf);

		const onAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			const anchor = target?.closest?.("a[href^='#']") as
				| HTMLAnchorElement
				| null;
			if (!anchor) return;

			const href = anchor.getAttribute("href");
			if (!href || href === "#") return;

			const el = document.querySelector(href);
			if (!el) return;

			e.preventDefault();
			lenis.scrollTo(el as HTMLElement, {
				offset: -96,
				duration: 1.6,
			});
		};

		document.addEventListener("click", onAnchorClick);

		return () => {
			document.removeEventListener("click", onAnchorClick);
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);

	return null;
}
