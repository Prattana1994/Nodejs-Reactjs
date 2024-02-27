import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FormProduct() {

    const [ data, setData ] = useState([])
    const [ form, setForm ] = useState({})


    useEffect(()=> {
        //code
        lodeData()
    },[])


    const lodeData = async () => {
        await axios.get('http://localhost:5000/api/product').then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name]: e.target.value
        })
        // console.log(form)
    }

  
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/api/product', form).then((res) => {
        console.log(res.data)
        lodeData()
        }).catch((err) => {
            console.log(err)
        })
    }


    const handleUpdate = async (id) => {
        await axios.put('http://localhost:5000/api/product/' + id).then((res) => {
        console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    const handleRemove = async (id) => {      
        await axios.delete('http://localhost:5000/api/product/' + id).then((res) => {
        console.log(res.data)
        lodeData()
        }).catch((err) => {
            console.log(err)
        })
    }

    

    
  return (
    <div>
        <h2>Hello</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='name' onChange={handleChange}/><br />
            <input type='text' name='detail' placeholder='detail' onChange={handleChange}/><br />
            <input type='text' name='price' placeholder='price' onChange={handleChange}/><br />
            <br /><button >Submit</button>
        </form>


        <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Detail</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data ? data.map((item, index)=> 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td scope="row">{item.name}</td>
                        <td>{item.detail}</td>
                        <td>{item.price}</td>   
                        <td onClick={() => handleUpdate(item._id)}> Edit</td>     
                        <td onClick={() => handleRemove(item._id)}> Delete</td>                                     
                    </tr>
                )
                    :null
            }

        </tbody>
        </table>
    </div>
  )
}

export default FormProduct
