import React from 'react'

const statusColors = {
  Completed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700'
}

const InterviewList = ({ interviews }) => (
  <div className="grid gap-5 md:grid-cols-2">
    {interviews.map(interview => (
      <div key={interview.id} className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">{interview.role}</span>
          <span className={`text-xs px-2 py-1 rounded ${statusColors[interview.status] || 'bg-gray-100 text-gray-700'}`}>
            {interview.status}
          </span>
        </div>
        <div className="text-gray-600 text-sm">Skills: <span className="font-medium">{interview.skills}</span></div>
        <div className="text-gray-600 text-sm">Experience: <span className="font-medium">{interview.experience} years</span></div>
        <div className="text-gray-400 text-xs">Date: {interview.date}</div>
      </div>
    ))}
    {interviews.length === 0 && (
      <div className="col-span-full text-center text-gray-500 py-8">No interviews found.</div>
    )}
  </div>
)

export default InterviewList
