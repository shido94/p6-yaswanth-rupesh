import React from 'react'

export default function ContactPage() {
    return (
        <>
        <div className="container">
            <div className="inner">
                <div className="panel-content">
                    <div className="form">
                        <h2>Add Comment</h2>
                        <div className="group">      
                            <input type="text" placeholder="Enter name" required />
                        </div>
                        <div className="group">      
                            <input type="text" placeholder="Enter Email" required />
                        </div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
