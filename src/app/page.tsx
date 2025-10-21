'use client';

import { useState } from 'react';
import AddressInput from '@/components/AddressInput';
import MetricsDashboard from '@/components/MetricsDashboard';

export default function Home() {
  const [address, setAddress] = useState<string | null>(null);

  const handleSubmit = (submittedAddress: string) => {
    setAddress(submittedAddress);
  };

  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      {!address ? (
        <AddressInput onSubmit={handleSubmit} />
      ) : (
        <MetricsDashboard address={address} />
      )}
    </main>
  );
}