// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

// type CustomThemeProviderProps = ThemeProviderProps & {
//   children: React.ReactNode;
// };

// export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

