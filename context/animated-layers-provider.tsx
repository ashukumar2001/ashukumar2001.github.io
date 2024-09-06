"use client";
import ParticlesBackground from "@/components/backgrounds/particle";
import Loader from "@/components/ui/loader";
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";

export const AnimatedLayerContext = createContext<{
  particlesLoaded: boolean;
  setParticlesLoaded?: Dispatch<SetStateAction<boolean>>;
}>({ particlesLoaded: false });

const AnimatedLayersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  return (
    <AnimatedLayerContext.Provider
      value={{ particlesLoaded, setParticlesLoaded }}
    >
      <ParticlesBackground />
      <Loader visible={!particlesLoaded} />
      {particlesLoaded && children}
    </AnimatedLayerContext.Provider>
  );
};

export default AnimatedLayersProvider;
