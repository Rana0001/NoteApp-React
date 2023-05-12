import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import noteServices from '../services/noteServices';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, content };

    const newNote = await noteServices.addNote(data);

    console.log(newNote);
    window.alert('New Added Successful');
    window.location.reload();
    window.location.replace('/');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-5">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note content"
        className="appearance-none block w-full h-48 bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      />
      <button
        type="submit"
        className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create note
      </button>
    </form>
  );
}

export default CreateNote;
