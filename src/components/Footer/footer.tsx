"use client";

import React, { useMemo } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Footer() {
	const links = useMemo(
		() => ({
			github: "https://github.com/Prakshil",
			linkedin: "https://www.linkedin.com/in/prakshil-patel/",
			email: "mailto:prakshilmpatel@gmail.com",
		}),
		[]
	);

	return (
		<footer id="contact" className="bg-black text-white px-6 py-24">
			<div className="container mx-auto max-w-6xl">
				<p className="text-center text-xs md:text-sm tracking-[0.35em] text-gray-400">
					CONTACT
				</p>
				<h2 className="mt-4 text-center text-5xl md:text-7xl font-light text-white">
					Get{" "}
					<span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
						in touch
					</span>
				</h2>

				<div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
					<div className="space-y-6">
						<p className="text-gray-300 text-lg leading-relaxed">
							Have an idea, a project, or need help improving an existing
							product? Send a message — I usually reply within 24–48 hours.
						</p>

						<div className="flex items-center gap-3">
							<a
								href={links.github}
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub"
								className="h-12 w-12 rounded-full border border-white/10 bg-neutral-900/40 flex items-center justify-center transition-all hover:-translate-y-0.5 hover:bg-neutral-900/70 hover:border-white/20"
							>
								<Github className="h-5 w-5 text-gray-200" />
							</a>
							<a
								href={links.linkedin}
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn"
								className="h-12 w-12 rounded-full border border-white/10 bg-neutral-900/40 flex items-center justify-center transition-all hover:-translate-y-0.5 hover:bg-neutral-900/70 hover:border-white/20"
							>
								<Linkedin className="h-5 w-5 text-gray-200" />
							</a>
							<a
								href={links.email}
								aria-label="Email"
								className="h-12 w-12 rounded-full border border-white/10 bg-neutral-900/40 flex items-center justify-center transition-all hover:-translate-y-0.5 hover:bg-neutral-900/70 hover:border-white/20"
							>
								<Mail className="h-5 w-5 text-gray-200" />
							</a>
						</div>

						<div className="text-sm text-gray-400">
							<div>Mail: prakshilmpatel@gmail.com</div>
						</div>
					</div>

					<div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-6 md:p-8">
						<form
							action="https://api.web3forms.com/submit"
							method="POST"
							className="space-y-4"
						>
							<input
								type="hidden"
								name="access_key"
								value="0c9b6d31-e074-4c81-b401-680645f430e1"
							/>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<label className="space-y-2">
									<span className="text-sm text-gray-300">Name</span>
									<input
										name="name"
										type="text"
										required
										className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-white/20"
										placeholder="Your name"
										autoComplete="name"
									/>
								</label>

								<label className="space-y-2">
									<span className="text-sm text-gray-300">Email</span>
									<input
										name="email"
										className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-white/20"
										placeholder="you@example.com"
										type="email"
										autoComplete="email"
										required
									/>
								</label>
							</div>

							<label className="space-y-2 block">
								<span className="text-sm text-gray-300">Message</span>
								<textarea
									name="message"
									className="w-full min-h-40 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-white/20 resize-y"
									placeholder="Tell me about your project..."
									required
								/>
							</label>

							<button
								type="submit"
								className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-base px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
							>
								Send Message
								<Send className="h-4 w-4" />
							</button>
						</form>
					</div>
				</div>

				<div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
					<div>© {new Date().getFullYear()} Prakshil Patel</div>
					<div className="text-gray-500">All rights reserved</div>
				</div>
			</div>
		</footer>
	);
}
