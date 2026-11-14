'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [glucose, setGlucose] = useState('')
  const [activity, setActivity] = useState('')
  const [logs, setLogs] = useState([])
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem('sugarfit_logs') || '[]')
    const savedActs = JSON.parse(localStorage.getItem('sugarfit_activities') || '[]')
    setLogs(savedLogs)
    setActivities(savedActs)
  }, [])

  const addGlucose = () => {
    if (!glucose) return
    const newLog = { value: glucose, time: new Date().toLocaleString(), type: 'glucose' }
    const updated = [newLog, ...logs].slice(0, 20)
    setLogs(updated)
    localStorage.setItem('sugarfit_logs', JSON.stringify(updated))
    setGlucose('')
  }

  const addActivity = () => {
    if (!activity) return
    const newAct = { name: activity, time: new Date().toLocaleString() }
    const updated = [newAct, ...activities].slice(0, 20)
    setActivities(updated)
    localStorage.setItem('sugarfit_activities', JSON.stringify(updated))
    setActivity('')
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-emerald-600 text-white p-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">SugarFit</Link>
        <span className="text-sm">Free Club Member</span>
      </header>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Log Blood Glucose</h2>
          <div className="flex gap-2">
            <input
              type="number"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
              placeholder="mg/dL"
              className="flex-1 border rounded-xl px-4 py-3"
            />
            <button onClick={addGlucose} className="bg-emerald-600 text-white px-6 rounded-xl font-semibold">
              Log
            </button>
          </div>
          <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
            {logs.map((l, i) => (
              <div key={i} className="text-sm flex justify-between border-b pb-1">
                <span>{l.value} mg/dL</span>
                <span className="text-gray-500">{l.time}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Post-Meal Movement</h2>
          <div className="flex gap-2">
            <input
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="e.g. 10 min walk"
              className="flex-1 border rounded-xl px-4 py-3"
            />
            <button onClick={addActivity} className="bg-emerald-600 text-white px-6 rounded-xl font-semibold">
              Done
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {activities.map((a, i) => (
              <div key={i} className="text-sm flex justify-between border-b pb-1">
                <span>{a.name}</span>
                <span className="text-gray-500">{a.time}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Today's Challenge</h2>
          <p className="text-lg font-semibold text-emerald-700">Walk 5 minutes after every meal</p>
          <p className="text-gray-600 mt-2">Peer goal: 3 members completed this today. You're next!</p>
          <div className="mt-4 bg-emerald-50 p-3 rounded-xl text-sm">
            Educational tip: Post-meal walks help lower blood glucose spikes naturally.
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Quick Exercises</h2>
          <ul className="space-y-2 text-sm">
            <li>• 5-min desk stretches</li>
            <li>• 10-min brisk walk</li>
            <li>• 3-min standing marches</li>
            <li>• Chair squats (10 reps)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
