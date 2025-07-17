import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InterviewList from './InterviewList'
import InterviewForm from './InterviewForm'
import { QUESTIONS } from './InterviewScreen' // Import demo questions if exported

const getInterviews = () => {
  const data = localStorage.getItem('interviews')
  return data ? JSON.parse(data) : []
}

const Dashboard = () => {
  const [interviews, setInterviews] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ skill: '', experience: '', role: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setInterviews(getInterviews())
  }, [])

  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleStartInterview = () => {
    const newInterview = {
      id: Date.now(),
      ...form,
      date: new Date().toLocaleDateString(),
      status: 'Pending',
      answers: [],
      score: null,
      feedback: '',
    }
    const updated = [newInterview, ...interviews]
    setInterviews(updated)
    localStorage.setItem('interviews', JSON.stringify(updated))
    setShowForm(false)
    setForm({ skill: '', experience: '', role: '' })
    setFormSubmitted(false)
    navigate(`/interview/new`, { state: { interviewId: newInterview.id } })
  }

  // Start interview for a pending interview
  const handleStartInterviewFromPending = (interviewId) => {
    navigate(`/interview/new`, { state: { interviewId } })
  }

  const handleViewReport = id => {
    navigate(`/interview/${id}/report`)
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Welcome, User!</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Previous Interviews</h2>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          onClick={() => setShowForm(true)}
        >
          + Create New Interview
        </button>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {interviews.map(interview => (
          <div key={interview.id} className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{interview.role}</span>
              <span className={`text-xs px-2 py-1 rounded ${interview.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {interview.status}
              </span>
            </div>
            <div className="text-gray-600 text-sm">Skill: <span className="font-medium">{interview.skill}</span></div>
            <div className="text-gray-600 text-sm">Experience: <span className="font-medium">{interview.experience} years</span></div>
            <div className="text-gray-400 text-xs">Date: {interview.date}</div>
            {/* View Report for completed */}
            {interview.status === 'Completed' && (
              <div className="flex gap-2 mt-2">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-blue-700 transition"
                  onClick={() => handleViewReport(interview.id)}
                >
                  View Report
                </button>
              </div>
            )}
            {/* Start Interview for pending */}
            {interview.status === 'Pending' && (
              <div className="flex gap-2 mt-2">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-green-700 transition"
                  onClick={() => handleStartInterviewFromPending(interview.id)}
                >
                  Start Interview
                </button>
              </div>
            )}
          </div>
        ))}
        {interviews.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-8">No interviews found.</div>
        )}
      </div>
      {/* Modal for Create Interview */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => { setShowForm(false); setFormSubmitted(false); }}
              aria-label="Close"
            >
              &times;
            </button>
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Skill</label>
                  <input
                    type="text"
                    name="skill"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={form.skill}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Experience (years)</label>
                  <input
                    type="number"
                    name="experience"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={form.experience}
                    onChange={handleFormChange}
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <input
                    type="text"
                    name="role"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={form.role}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg font-semibold text-center">Interview Created!</p>
                <button
                  className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                  onClick={handleStartInterview}
                >
                  Start Interview
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
