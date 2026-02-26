import React, { useEffect, useState } from 'react'
import './notesapp.css'
const NotesApp = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState(() => {
    try {
      const raw = localStorage.getItem('notes')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(task))
    } catch (e) {}
  }, [task])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitHandler fired', { title, details })
    if (!title.trim() && !details.trim()) return
    const newNote = { title: title.trim(), details: details.trim() }
    setTask(prev => [newNote, ...prev])
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    console.log('deleteNote', idx)
    setTask(prev => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="notes-app">

      <form onSubmit={submitHandler} className="notes-form">

        <h1 className="form-title">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className='textarea'
          placeholder='Write Details here'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

         <button
          type='submit'
          className='add-button'
        >
          Add Note
        </button>

      </form>
      <div className='recent-column'>
        <h1 className='recent-title'>Recent Notes</h1>
        <div className='notes-grid'>
          {task.length === 0 && <p className='empty-text'>No notes yet</p>}
          {task.map(function (elem, idx) {

            return <div key={idx} className="note-card">
              <div>
                <h3 className='note-title'>{elem.title}</h3>
                <p className='note-details'>{elem.details}</p>
              </div>
              <button onClick={() => deleteNote(idx)} className='delete-button'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default NotesApp
