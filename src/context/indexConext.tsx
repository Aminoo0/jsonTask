"use client";
import { createContext, useContext, useState } from "react";
interface ContextValue {
    index: number | undefined;
    setIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const AppContext = createContext<ContextValue | undefined>(undefined);

export default function Provider({ children }: { children: React.ReactNode }) {
    const [index, setIndex] = useState<number>();
    return (
        <AppContext.Provider value={{ index, setIndex }}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("use context not found");
    }
    return context;
}