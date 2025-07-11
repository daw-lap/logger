'use client';

import { useEffect, useState } from "react";

export default function Homee() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/logs`)
      .then(res => res.json())
      .then(data => setLogs(data.logs))
      .catch(err => console.error('Error fetching logs:', err));
  }, []);

  return (
    <main className="p-6">
      <pre className="bg-gray-100 p-6 rounded-md text-gray-800">
        {logs.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </pre>
    </main>
  )
}