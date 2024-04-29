import React from 'react'

const GianHang = (props) => {
    const {arrProduct,delItem,tangQuantity,giamQuantity} = props
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá Tiền</th>
            <th>Số Lượng</th>
            <th>Tổng Tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((itemCard)=>{
              return <tr key={itemCard.id}>
              <td>{itemCard.id}</td>
              <td>{itemCard.name}</td>
              <td><img src={itemCard.image} alt="" width={50}/></td>
              <td>{itemCard.price}</td>
              <td>
                <button className="btn btn-dark mx-2" onClick={()=>{
                  tangQuantity(itemCard.id)
                }}>
                  +
                </button>
                {itemCard.quantity}
                <button className="btn btn-dark mx-2" onClick={()=>{
                  giamQuantity(itemCard.id)
                }} >
                  -
                </button>
              </td>
              <td>2000</td>
              <td>
                <button className="btn btn-danger" onClick={()=>{
                  delItem(itemCard.id)
                }}>
                  <i className='fa fa-trash'></i>
                </button>
              </td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default GianHang