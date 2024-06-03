"use client";

import { useTawkTo } from "@/hooks/useTawkTo";
import React, { useState, useContext, createContext } from "react";

const AppContext = createContext<any>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [heroHeight, setHeroHeight] = useState<number>(0);
	useTawkTo();

	return (
		<AppContext.Provider
			value={{
				heroHeight,
				setHeroHeight,
			}}
		>
			{/* <GlobalHooks /> */}
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
