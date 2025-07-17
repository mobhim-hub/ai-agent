import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import 'chart.js/auto'

const InterviewReport = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [interview, setInterview] = useState(null)
  const reportRef = useRef()
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  useEffect(() => {
    const interviews = JSON.parse(localStorage.getItem('interviews') || '[]')
    const found = interviews.find(i => String(i.id) === id)
    if (!found) navigate('/dashboard')
    setInterview(found)
  }, [id, navigate])

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)
    // Add color override to avoid oklch errors
    reportRef.current.classList.add('force-pdf-colors')
    // Wait for UI to update
    await new Promise(resolve => setTimeout(resolve, 100))
    const input = reportRef.current
    const canvas = await html2canvas(input)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()
    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('interview-report.pdf')
    // Remove color override after PDF generation
    reportRef.current.classList.remove('force-pdf-colors')
    setIsGeneratingPDF(false)
  }

  if (!interview) return null

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div ref={reportRef} className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Interview Report</h2>
        <div className="mb-2"><span className="font-semibold">Role:</span> {interview.role}</div>
        <div className="mb-2"><span className="font-semibold">Skill:</span> {interview.skill}</div>
        <div className="mb-2"><span className="font-semibold">Experience:</span> {interview.experience} years</div>
        <div className="mb-2"><span className="font-semibold">Date:</span> {interview.date}</div>
        <div className="mb-4"><span className="font-semibold">Score:</span> {interview.score}/100</div>
        <div className="mb-4"><span className="font-semibold">Feedback:</span> {interview.feedback}</div>
        <div className="mb-6">
          <Bar
            data={{
              labels: ['Skill', 'Communication', 'Problem Solving', 'Technical'],
              datasets: [
                {
                  label: 'Score',
                  data: [
                    interview.score,
                    Math.floor(interview.score * 0.8),
                    Math.floor(interview.score * 0.7),
                    Math.floor(interview.score * 0.9)
                  ],
                  backgroundColor: [
                    '#2563eb', '#60a5fa', '#818cf8', '#38bdf8'
                  ]
                }
              ]
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: { y: { beginAtZero: true, max: 100 } }
            }}
            height={200}
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Your Answers:</h3>
          <ol className="list-decimal pl-5 space-y-2">
            {Array.isArray(interview.answers) && interview.answers.map((ans, idx) => (
              <li key={idx} className="bg-gray-50 rounded p-2 flex flex-col gap-2">
                <div>{ans.text || <span className="text-gray-400 italic">No text answer</span>}</div>
                {!isGeneratingPDF && ans.audio && (
                  <audio controls src={ans.audio} className="mt-1" />
                )}
                {!isGeneratingPDF && ans.video && (
                  <video controls src={ans.video} className="mt-1" width={240} height={180} />
                )}
                {isGeneratingPDF && (ans.audio || ans.video) && (
                  <div className="text-gray-400 italic">[Audio/Video not included in PDF]</div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        onClick={handleDownloadPDF}
        disabled={isGeneratingPDF}
      >
        {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
      </button>
    </div>
  )
}

export default InterviewReport
