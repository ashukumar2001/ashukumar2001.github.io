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
  init: boolean;
  setInit?: Dispatch<SetStateAction<boolean>>;
}>({ init: false });

const AnimatedLayersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [init, setInit] = useState(false);
  return (
    <AnimatedLayerContext.Provider value={{ init, setInit }}>
      <ParticlesBackground />
      <Loader visible={!init} />
      {init && children}
    </AnimatedLayerContext.Provider>
  );
};

export default AnimatedLayersProvider;
