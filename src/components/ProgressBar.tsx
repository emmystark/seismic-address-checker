import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  value: number; // 0-100
  color: string;
}

export default function ProgressBar({ label, value, color }: ProgressBarProps) {
  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-sm text-gray-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className={`h-full rounded-full`}
          style={{ background: color }}
        />
      </div>
    </div>
  );
}