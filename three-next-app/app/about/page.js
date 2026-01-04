"use client"
import React from 'react'

const about = () => {
    return (
        <>
            <div className='container'>
                <h1>About Page</h1>
                <p>This is the about page content.</p>
                <style jsx>{`
                    .container {
                        width: 100vw;
                        height: 100vh;
                        background-color: black;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    },
                    .container h1 {
                        font-size: 3rem;
                        margin-bottom: 1rem;
                    },
                    .container p {
                        font-size: 1.5rem;
                    }
                `}</style>
            </div>
        </>
    )
}

export default about