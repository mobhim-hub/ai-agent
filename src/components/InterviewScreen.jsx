import React, { useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const QUESTIONS = [
  "What is closure in JavaScript?",
  "Explain the concept of promises.",
  "How do you optimize React app performance?",
  "Describe RESTful APIs.",
  "What is the difference between var, let, and const?"
]

const InterviewScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const interviewId = location.state?.interviewId

  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill({ text: '', audio: null, video: null }))
  const [listening, setListening] = useState(false)
  const [recording, setRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [audioURL, setAudioURL] = useState(null)
  const [videoURL, setVideoURL] = useState(null)
  const videoRef = useRef(null)
  const chunks = useRef([])

  // Handle text input
  const handleInput = e => {
    const updated = [...answers]
    updated[current] = { ...updated[current], text: e.target.value }
    setAnswers(updated)
  }

  // Web Speech API for voice
  const handleSpeech = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported')
      return
    }
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    setListening(true)
    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript
      const updated = [...answers]
      updated[current] = { ...updated[current], text: transcript }
      setAnswers(updated)
      setListening(false)
    }
    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)
    recognition.start()
  }

  // Audio recording
  const handleAudioRecord = async () => {
    if (!navigator.mediaDevices) {
      alert('Audio recording not supported')
      return
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const recorder = new window.MediaRecorder(stream)
    setMediaRecorder(recorder)
    chunks.current = []
    recorder.ondataavailable = e => chunks.current.push(e.data)
    recorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: 'audio/webm' })
      const url = URL.createObjectURL(blob)
      setAudioURL(url)
      const updated = [...answers]
      updated[current] = { ...updated[current], audio: url }
      setAnswers(updated)
    }
    recorder.start()
    setRecording(true)
    setTimeout(() => {
      recorder.stop()
      setRecording(false)
    }, 10000) // 10 seconds max
  }

  // Video recording
  const handleVideoRecord = async () => {
    if (!navigator.mediaDevices) {
      alert('Video recording not supported')
      return
    }
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    if (videoRef.current) videoRef.current.srcObject = stream
    const recorder = new window.MediaRecorder(stream)
    setMediaRecorder(recorder)
    chunks.current = []
    recorder.ondataavailable = e => chunks.current.push(e.data)
    recorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      setVideoURL(url)
      const updated = [...answers]
      updated[current] = { ...updated[current], video: url }
      setAnswers(updated)
      if (videoRef.current) videoRef.current.srcObject = null
    }
    recorder.start()
    setRecording(true)
    setTimeout(() => {
      recorder.stop()
      setRecording(false)
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop())
      }
    }, 10000) // 10 seconds max
  }

  const handleNext = () => {
    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1)
      setAudioURL(null)
      setVideoURL(null)
    } else {
      // Save answers to localStorage
      const interviews = JSON.parse(localStorage.getItem('interviews') || '[]')
      const idx = interviews.findIndex(i => i.id === interviewId)
      if (idx !== -1) {
        interviews[idx].answers = answers
        interviews[idx].status = 'Completed'
        interviews[idx].score = Math.floor(Math.random() * 100) + 1
        interviews[idx].feedback = "Great effort! Review your answers for more depth."
        localStorage.setItem('interviews', JSON.stringify(interviews))
      }
      navigate('/dashboard')
    }
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Interview Questions</h2>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="mb-4 font-semibold text-gray-800">Question {current + 1} of {QUESTIONS.length}</div>
        <div className="mb-4 text-gray-700">{QUESTIONS[current]}</div>
        {/* Text Answer */}
        <textarea
          className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
          value={answers[current].text}
          onChange={handleInput}
          placeholder="Type your answer here..."
        />
        {/* Voice Answer */}
        <div className="flex gap-2 mb-3">
          <button
            type="button"
            className={`px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition ${listening ? 'opacity-50' : ''}`}
            onClick={handleSpeech}
            disabled={listening}
          >
            {listening ? 'Listening...' : 'Voice to Text'}
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition ${recording ? 'opacity-50' : ''}`}
            onClick={handleAudioRecord}
            disabled={recording}
          >
            {recording ? 'Recording...' : 'Record Audio'}
          </button>
          {audioURL && (
            <audio controls src={audioURL} className="ml-2" />
          )}
        </div>
        {/* Video Answer */}
        <div className="mb-3">
          <button
            type="button"
            className={`px-4 py-2 rounded bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200 transition ${recording ? 'opacity-50' : ''}`}
            onClick={handleVideoRecord}
            disabled={recording}
          >
            {recording ? 'Recording...' : 'Record Video'}
          </button>
          <div className="mt-2">
            <video ref={videoRef} controls src={videoURL || undefined} width={240} height={180} />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={handleNext}
          >
            {current < QUESTIONS.length - 1 ? 'Next' : 'Submit Interview'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InterviewScreen
