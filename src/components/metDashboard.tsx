import ActivityRingsComponent from '@/components/ActivityRings';
import ProgressBar from '@/components/ProgressBar';
import { motion } from 'framer-motion';

interface MetricsDashboardProps {
  address: string;
}

export default function MetricsDashboard({ address }: MetricsDashboardProps) {
  // Mock data (replace with API fetch)
  const metrics = {
    impact: 0.7, // 70%
    creativity: 0.85,
    behavior: 0.5,
  };

  const overallScore = Math.round(((metrics.impact + metrics.creativity + metrics.behavior) / 3) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto space-y-8 p-6 bg-gray-900 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white text-center">Analysis for {address}</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl text-gray-200">Activity Rings</h3>
        <ActivityRingsComponent
          impact={metrics.impact}
          creativity={metrics.creativity}
          behavior={metrics.behavior}
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl text-gray-200">Progress Bars</h3>
        <ProgressBar label="Impact" value={metrics.impact * 100} color="linear-gradient(to right, #FF3B30, #FF9500)" />
        <ProgressBar label="Creativity" value={metrics.creativity * 100} color="linear-gradient(to right, #00FF9F, #00C853)" />
        <ProgressBar label="Behavior" value={metrics.behavior * 100} color="linear-gradient(to right, #FFD700, #FFA500)" />
        <ProgressBar label="Overall" value={overallScore} color="linear-gradient(to right, #4F46E5, #6366F1)" />
      </div>
    </motion.div>
  );
}