import React from 'react'

const Logout = () => {
    alert('logging out')
    localStorage.removeItem('username')
    window.location.href = '/'
}



export default Logout