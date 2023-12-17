import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="text">
                <h2>Family Wellness</h2>
                <small>MASSAGE THERAPY</small>
            </div>
            <div className="menu_items">
                <ul className='flex'>
                    <li>HOME</li>
                    <li>ABPUT</li>
                    <li>SERVICES</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </header>
    )
}

export default Header