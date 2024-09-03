import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "./spinner";
const Loader = ({ visible = false }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="grid place-items-center h-screen absolute top-0 left-0 w-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Spinner />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
