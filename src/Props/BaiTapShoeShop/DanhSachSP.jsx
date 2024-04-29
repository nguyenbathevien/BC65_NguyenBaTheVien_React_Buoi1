import React from 'react'

const DanhSachSP = (props) => {
    const {product, addToCart} = props
  return (
    <div>
        <div className="row">
            {product.map((prod,index)=>{
                return <div className="col-4 mt-3" key={index}>
                    <div className="card">
                        <img src={prod.image} alt="" />
                        <div className="card-body">
                            <h3>{prod.name}</h3>
                            <p>{prod.price}$</p>
                            <button className='btn btn-primary' onClick={()=>{
                                addToCart(prod)
                            }}>
                                add To Card
                            </button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default DanhSachSP