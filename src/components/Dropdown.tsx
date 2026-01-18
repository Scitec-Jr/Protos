"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Dropdown({ trigger, children, active }: any) {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative flex flex-col sm:inline-block">
			<button
				type="button"
				aria-expanded={open}
				onClick={() => setOpen((prev) => !prev)}
				className={`
            flex items-center pb-2 sm:pb-0 border-b sm:border-b-0 cursor-pointer
            ${active ? "text-white" : ""}
        `}
			>
			    {trigger}
			</button>

			<div
				className={`
            transition-all duration-300 ease-out
            grid overflow-hidden
            ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
            sm:absolute sm:left-0 sm:top-full
            sm:grid sm:overflow-visible
            sm:${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
			>
				<div className="overflow-hidden sm:overflow-visible">
					<div className="mt-2 flex flex-col gap-2 bg-(--main-color) sm:shadow-lg sm:p-3">{children}</div>
				</div>
			</div>
		</div>
	);
}
