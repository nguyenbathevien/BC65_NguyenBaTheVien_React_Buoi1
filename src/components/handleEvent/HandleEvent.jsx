import React from 'react';

const HandleEvent = () => {
    const showMessage = (e) => {
        console.log("Chào em");
        // Kiểm tra className của phần tử được kích hoạt sự kiện
        if (e.target.className === "btn btn-danger b") {
            // Thay đổi className và nội dung của phần tử
            e.target.className = 'btn btn-primary';
            e.target.innerHTML = "clicked";
        }      
    }
    const showMessageName = (name) => {
        console.log(name);
    }
    return (
        <div className='container'>
            <h1>Handle Event</h1>
            <button className='btn btn-dark' onClick={() => console.log("click me")}>click me</button>
            <br /><br />
            {/* Sử dụng cùng một hàm xử lý sự kiện cho nhiều nút */}
            <button className='btn btn-danger a' onClick={showMessage}>showMessage</button>
            <button className='btn btn-danger b' onClick={showMessage}>showMess</button>
            <button className='btn btn-danger b' onClick={(e)=>{
                showMessageName("Viễn")
            }}>showMess</button>
            <input className='w-25 form-control' onInput={(e)=>{
                const value = e.target.value;
                document.getElementById("txt").innerHTML = value;
                console.log(value);
            }} />
            <span id='txt' className='d-block my-2'></span>
        </div>
    );
}

export default HandleEvent;
