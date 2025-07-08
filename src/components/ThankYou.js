import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <div className=" py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <p className="text-xl text-gray-600">Thanks for Visiting Us</p>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-8xl mt-4"
          >
            🙏
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
