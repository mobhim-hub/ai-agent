import React, { useState } from 'react'

const initialState = {
  role: '',
  skills: '',
  experience: ''
}

const InterviewForm = ({ onSubmit }) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.role) errs.role = 'Role is required'
    if (!form.skills) errs.skills = 'Skills are required'
    if (!form.experience) errs.experience = 'Experience is required'
    else if (isNaN(form.experience) || form.experience < 0) errs.experience = 'Enter a valid number'
    return errs
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      onSubmit(form)
      setForm(initialState)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">Role</label>
        <input
          type="text"
          name="role"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.role}
          onChange={handleChange}
        />
        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Skills</label>
        <input
          type="text"
          name="skills"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.skills}
          onChange={handleChange}
          placeholder="e.g. JavaScript, Python"
        />
        {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Experience (years)</label>
        <input
          type="number"
          name="experience"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.experience}
          onChange={handleChange}
          min="0"
        />
        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Create Interview
      </button>
    </form>
  )
}

export default InterviewForm
