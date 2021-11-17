import React from 'react'
import image from '../assets/rocket.svg'
const Loading = () => {
    return (
        <section className="loading-section">
                <div className="image">
                    <img src={image} alt="" />
                </div>
        </section>
    )
}

export default Loading
