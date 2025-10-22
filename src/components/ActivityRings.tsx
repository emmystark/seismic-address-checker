'use client';
import ActivityRings from 'react-activity-rings';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ActivityRingsProps {
  impact: number; // 0-1
  creativity: number; // 0-1
  behavior: number; // 0-1
}

export default function ActivityRingsComponent({ impact, creativity, behavior }: ActivityRingsProps) {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to avoid SSR issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Clamp values between 0 and 1
  const activityData = [
    { value: Math.max(0, Math.min(1, impact)), color: '#FF3B30', label: 'Impact' },
    { value: Math.max(0, Math.min(1, creativity)), color: '#00FF9F', label: 'Creativity' },
    { value: Math.max(0, Math.min(1, behavior)), color: '#FFD700', label: 'Behavior' },
  ];

  const activityConfig = {
    width: 200,
    height: 200,
    ringGap: '2%', // Space between rings
    legend: false, // We'll use custom labels below for better control
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center"
    >
      {isClient ? (
        <ActivityRings
          data={activityData}
          config={activityConfig}
          theme="dark" // Matches your dark mode UI
        />
      ) : (
        <div className="text-gray-300 text-sm">Loading rings...</div>
      )}
      {/* Custom responsive labels with percentages */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm text-gray-300 w-full max-w-xs">
        <div className="text-center">
          <span className="block font-medium">Impact</span>
          <p>{Math.round(impact * 100)}%</p>
        </div>
        <div className="text-center">
          <span className="block font-medium">Creativity</span>
          <p>{Math.round(creativity * 100)}%</p>
        </div>
        <div className="text-center">
          <span className="block font-medium">Behavior</span>
          <p>{Math.round(behavior * 100)}%</p>
        </div>
      </div>
    </motion.div>
  );
}