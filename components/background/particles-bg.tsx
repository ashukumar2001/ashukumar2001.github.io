"use client";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";

const ParticlesBackground = () => {
  const { theme } = useTheme();
  const color = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Particles
      className="absolute inset-0"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
  );
};

export default ParticlesBackground;
