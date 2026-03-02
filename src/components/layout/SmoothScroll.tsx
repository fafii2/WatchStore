"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 0.7,
            }}
        >
            {/* @ts-expect-error - Bypass ReactNode version mismatch */}
            {children}
        </ReactLenis>
    );
}
