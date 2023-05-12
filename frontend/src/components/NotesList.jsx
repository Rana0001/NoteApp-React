import React, { useState, useEffect } from 'react';
import Note from './Note';
import noteServices from '../services/noteServices'


function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteServices.getAllNotes().then(notes => setNotes(notes.data.notes));
  }, []);
  return (
    <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {notes.map(note => (
                <Note key={note._id} note={note} />
            ))}
        </div>
    </div>
);
}


export default NotesList;
