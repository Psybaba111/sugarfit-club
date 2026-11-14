'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-emerald-700">SugarFit Club</h1>
        <Link href="/dashboard" className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold">
          Join Free
        </Link>
      </header>
      
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Move Together.<br />Control Sugar.<br />Live Better.
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Free digital + physical community for Type 2 diabetes, prediabetes & at-risk individuals. Build sustainable habits with short exercises, peer accountability, glucose tracking & challenges.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-bold text-lg mb-2">Short Exercises</h3>
            <p className="text-gray-600">Time-efficient post-meal movement routines designed for daily consistency.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-bold text-lg mb-2">Community Challenges</h3>
            <p className="text-gray-600">Peer accountability, group goals, and supportive community feed.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-bold text-lg mb-2">Glucose & Progress</h3>
            <p className="text-gray-600">Track blood glucose, activities, and see your progress over time. Completely free.</p>
          </div>
        </div>

        <Link href="/dashboard" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-10 py-4 rounded-full font-bold">
          Start Free Today →
        </Link>
        <p className="mt-4 text-sm text-gray-500">No signup required. All features free forever.</p>
      </main>
    </div>
  )
}
