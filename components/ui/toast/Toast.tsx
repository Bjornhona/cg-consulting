import { motion } from "framer-motion"
import clsx from "clsx"
import type { Toast } from "./types"

export default function ToastItem({ toast }: { toast: Toast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className={clsx(
        "rounded-lg px-4 py-3 shadow-lg text-sm",
        "border backdrop-blur",
        toast.type === "success" &&
          "bg-green-500/90 text-white border-green-400",
        toast.type === "error" &&
          "bg-red-500/90 text-white border-red-400",
        toast.type === "info" &&
          "bg-gray-900/90 text-white border-gray-700"
      )}
    >
      {toast.message}
    </motion.div>
  )
}
