import React from 'react'
import {useState} from 'react'; // for using state hook -> particular to react for updating the DOM 

export const AddTodo = (props) => {

    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Enter tite and Description !");
        }
        else{
            let impo= document.getElementById('impo');
            props.addTodo(title, desc, impo.checked);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className='container'>
            <h3 className="text-center my-4">Add a Todo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" value = {title} onChange={(e)=>{settitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="todoHelp" class="form-text">Enter your todo title.</div>
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <textarea type="text" value = {desc}  rows = {2} onChange={(e)=>{setdesc(e.target.value)}} class="form-control" id="desc" ></textarea>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="impo" />
                    <label class="form-check-label" for="impo">Mark Important</label>
                </div>
                <button type="submit" class="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
