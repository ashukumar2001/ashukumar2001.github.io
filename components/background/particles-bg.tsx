"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Particles from "@/components/ui/particles";

const ParticlesBackground = () => {
  const [color, setColor] = useState("#ffffff");
  const { theme } = useTheme();
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
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
