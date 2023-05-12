import axios from 'axios';

const baseUrl = 'http://localhost:3001';

function getAllNotes(){
  return axios.get(baseUrl)
}

function getNote(id){
  return axios.get(`${baseUrl}/${id}`)
}

function addNote(note){
  return axios.post(baseUrl, note)
}

function updateNote(id){
  return axios.put(`${baseUrl}/${id}`)
}
function deleteNote(id){
  return axios.delete(`${baseUrl}/${id}`)
}

export default {getAllNotes, addNote, updateNote, deleteNote,getNote}