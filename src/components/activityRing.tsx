import ActivityRings from 'react-activity-rings'; // Default export
import { motion } from 'framer-motion';

interface ActivityRingsProps {
  impact: number; // 0-1
  creativity: number; // 0-1
  behavior: number; // 0-1
}

export default function ActivityRingsComponent({ impact, creativity, behavior }: ActivityRingsProps) {
  const ringData = [
    { 
      filledPercentage: impact, 
      color: '#FF3B30', // Red for impact
      label: 'Impact' // Optional: For tooltips or future legend
    },
    { 
      filledPercentage: creativity, 
      color: '#00FF9F', // Green for creativity
      label: 'Creativity'
    },
    { 
      filledPercentage: behavior, 
      color: '#FFD700', // Gold for behavior
      label: 'Behavior'
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-center"
    >
      <ActivityRings
        rings={ringData}
        options={{
          initialRadius: 40, // Adjust for size/responsiveness
          animationDurationMillis: 1500, // Smooth fill animation
          strokeWidth: 8, // Thinner for a sleeker look
          containerHeight: '200px', // Fixed height for consistency
        }}
      />
      {/* Optional: Add labels below for better UX */}
      <div className="flex justify-between mt-4 text-sm text-gray-300 w-48 mx-auto">
        <span>Impact</span>
        <span>{Math.round(impact * 100)}%</span>
        <span>Creativity</span>
        <span>{Math.round(creativity * 100)}%</span>
        <span>Behavior</span>
        <span>{Math.round(behavior * 100)}%</span>
      </div>
    </motion.div>
  );
}