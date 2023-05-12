import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateNote() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${id}`);
        const fetchedNote = response.data.note;
        setNote(fetchedNote);
        setTitle(fetchedNote.title);
        setContent(fetchedNote.content);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedNote = { title, content };

    try {
      const response = await axios.put(`http://localhost:3001/${id}`, updatedNote);
      window.alert(response.data.message)
      window.location.replace('/')
    } catch (error) {
      console.log(error);
    }
  };

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleUpdate} className="w-full max-w-md mx-auto mt-5">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={title}
        className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter content"
        className="appearance-none block w-full h-48 bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      />
      <button
        type="submit"
        className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update note
      </button>
    </form>
  );
}

export default UpdateNote;
