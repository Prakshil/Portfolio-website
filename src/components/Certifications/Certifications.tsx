import React from "react";
import { certifications } from "./data";

export default function Certifications() {
	return (
		<section
			id="certifications"
			data-reveal
			className="min-h-screen text-white px-6 py-24 bg-black"
		>
			<div className="container mx-auto max-w-6xl">
				<p className="text-center text-xs md:text-sm tracking-[0.35em] text-gray-400">
					CERTIFICATIONS
				</p>
				<h2 className="mt-4 text-center text-4xl md:text-6xl font-light text-white">
					Proof of{" "}
					<span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
						Learning
					</span>
				</h2>
				<p className="mx-auto mt-6 max-w-3xl text-center text-sm md:text-base leading-7 text-gray-300">
					A curated set of credentials that reflect my ongoing focus on full-stack
					development, data, APIs, and modern AI workflows.
				</p>

				<div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
					{certifications.map((cert) => {
						const hasUrl = typeof cert.url === "string" && cert.url.trim().length > 0;

						return (
							<div
								key={`${cert.title}-${cert.date ?? ""}`}
								className="group flex h-full flex-col rounded-2xl border border-white/10 bg-neutral-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-900/55"
							>
								<div>
									<div className="flex items-start justify-between gap-4">
										<h3 className="text-lg font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-500 group-hover:to-orange-500">
											{cert.title}
										</h3>
										{cert.date ? (
											<span className="shrink-0 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs text-gray-300">
												{cert.date}
											</span>
										) : null}
									</div>

									{cert.issuer ? (
										<p className="mt-2 text-sm text-gray-400">{cert.issuer}</p>
									) : null}

									{cert.description ? (
										<p className="mt-4 text-sm leading-6 text-gray-300">
											{cert.description}
										</p>
									) : null}
								</div>

								<div className="mt-auto pt-6">
									{hasUrl ? (
										<a
											href={cert.url}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/60 px-5 py-2 text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
										>
											View credential
										</a>
									) : (
										<span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/30 px-5 py-2 text-sm text-gray-400">
											Link not added yet
										</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
