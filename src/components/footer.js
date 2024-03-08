import React from 'react'
import './footer.css'

export const Footer=()=> {
    let footerstyle={
        position: "sticky",
        top: "100vw",
        width: "100%"
    }
    return (
        <div className='bg-black text-light py-3' style={footerstyle}>
            <p className="text-center">
            Copyright &copy; 2019 my.com | All rights reserved
            </p>
        </div>
    )
}
