import React, { useEffect, useState } from 'react'
import notesAPI from '../services/notes/notesAPI'
import './Notes.css'

const API = new notesAPI()

export const Notes = () => {
    const [note, setNote] = useState('')
    const [noteList, setNotesList] = useState()

    const fetchNotes = () => {
        API.getAllNotes().then(res => setNotesList(prev => res))
        console.log(noteList)
    }

    const deleteNode = (id) => {
        setNotesList(prev => prev.filter((item) => item.id !== id))
        API.deletNote(id)
    }

    const changeNote = (e) => {
        setNote(prev => prev = e.target.value)
    }

    const addNote = () => {
        const id = Math.random().toString()
        setNotesList(prev => [...prev, {
            id: id,
            note: note
        }])
        API.postNotes({
            id: id,
            note: note
        })
    }

    useEffect(() => {
        API.getAllNotes().then(res => setNotesList(prev => res))
    }, [])


    return (
        <div className="notes-wrapper">
            <div className="notes-title">
                Notes <span
                    onClick={() => { fetchNotes() }}
                    className='notes-refresh'>Refresh</span>
            </div>
            <div className="notes-itemlist">
                {noteList?.map((item) => {
                    return (
                        <div key={item.id} className="notes-item">
                            {item.note}
                            <span
                                onClick={() => deleteNode(item.id)}
                            >X</span>
                        </div>)
                }
                )}
            </div>
            <div className="notes-add-item">
                <input
                    value={note}
                    type="text"
                    onChange={(e) => { changeNote(e) }}
                /><span
                    onClick={() => { addNote() }}
                >ADD</span>
            </div>
        </div>
    )
}