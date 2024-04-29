import React from 'react'

const Databinding = () => {
    const name = "Nguyễn Bá Thế Viễn";
    const prod = {
        id:1,
        name: "product1",
        price: 1000,
        img: "https://i.pravatar.cc?u=39"
    }
  return (
    <div className='container'>
        <span>{name}</span>
        <div className='card w-25'>
            <img src={prod.img} alt="..." />
            <div className='card-body'>
                <h1>{prod.name}</h1>
                <p>{prod.price}</p>
                <button className='btn btn-primary'>Detail</button>
            </div>
        </div>   
    </div>
  )
}

export default Databinding