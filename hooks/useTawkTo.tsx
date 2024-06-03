"use client";
import { useEffect } from "react";

export const useTawkTo = () => {
	useEffect(() => {
		const tawkToPropertyId = process.env.NEXT_PUBLIC_TAWK_TO_PROPERTY_ID;
		const tawkToWidgetId = process.env.NEXT_PUBLIC_TAWK_TO_WIDGET_ID;
		if (typeof window === "undefined") {
			return;
		}

		const tawkToScriptUrl = `https://embed.tawk.to/${tawkToPropertyId}/${tawkToWidgetId}`;
		const script = document.createElement("script");
		script.src = tawkToScriptUrl;
		script.async = true;
		document.body.appendChild(script);

		return () => {
			// Cleanup the script when the component unmounts
			document.body.removeChild(script);
		};
	}, []); // Only re-run the effect if script src changes
};
