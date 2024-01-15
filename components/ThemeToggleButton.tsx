"use client";
import { useTheme } from "next-themes";
import Icon from "@/components/Icon";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

export type Theme = "light" | "dark";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="cursor-pointer select-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon
        color="currentColor"
        path={theme === "dark" ? mdiWeatherSunny : mdiWeatherNight}
        size={1}
      />
    </div>
  );
}
