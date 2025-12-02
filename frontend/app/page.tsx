'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<string>('Loading...');

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`);
        if (response.ok) {
          setApiStatus('✅ API Connected');
        } else {
          setApiStatus('❌ API Error');
        }
      } catch (error) {
        setApiStatus('❌ Cannot reach API');
      }
    };
    checkApi();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">📚 Study Planner</h1>
        <p className="text-gray-600 mb-6">AI-powered study planner for CBSE exams</p>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">Backend Status:</p>
          <p className="text-lg font-semibold mt-2">{apiStatus}</p>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg mb-3 hover:shadow-lg transition">
          🚀 Get Started
        </button>
      </div>
    </main>
  );
}
