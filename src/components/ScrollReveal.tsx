"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
	useEffect(() => {
		const nodes = Array.from(
			document.querySelectorAll<HTMLElement>("[data-reveal]")
		);
		if (!nodes.length) return;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (prefersReducedMotion) {
			nodes.forEach((el) => el.classList.add("is-visible"));
			return;
		}

		const observers = new Map<string, IntersectionObserver>();

		const getObserver = (optionsKey: string, options: IntersectionObserverInit) => {
			const existing = observers.get(optionsKey);
			if (existing) return existing;

			const io = new IntersectionObserver((entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					(entry.target as HTMLElement).classList.add("is-visible");
					io.unobserve(entry.target);
				}
			}, options);

			observers.set(optionsKey, io);
			return io;
		};

		nodes.forEach((el) => {
			const threshold = Number.parseFloat(el.dataset.revealThreshold ?? "0.06");
			const rootMargin = el.dataset.revealMargin ?? "0px 0px 10% 0px";
			const key = `${threshold}|${rootMargin}`;
			getObserver(key, { threshold, rootMargin }).observe(el);
		});

		return () => {
			observers.forEach((io) => io.disconnect());
			observers.clear();
		};
	}, []);

	return null;
}
