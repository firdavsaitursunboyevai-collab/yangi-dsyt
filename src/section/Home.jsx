import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Lorem</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sed dolorum perspiciatis quis! Illo veniam voluptatum eius incidunt velit, modi numquam sed quae. Deleniti aliquid laudantium unde corrupti molestias. Minus.
                        </p>
                        <button className='btn btn-primary'>start</button>
                    </div>
                    <div className="col-md-6">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6SjXi2pmGmkqjSaUtmS3FP6fuU3AJnKrc8enW95KbA&s=10" 
                            alt="Home Banner"
                            className='w-100 rounded shadow' 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
