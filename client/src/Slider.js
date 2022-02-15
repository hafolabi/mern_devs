import React from 'react'
import slide1 from './banner/slide1.jpg'

class Slider extends React.Component {
    render() {
    

        return (
           
            <div class=" justify-content-center mt-5" data-aos="fade-up">
                
                <div className='slider'>

                    <img src={slide1} style={{ width: '100%', }} alt='slide1' />
                    
                        <div className=' box'>
                            <br />  <h1>You Are Welcome to</h1>
                            <h2>Theinsights</h2>
                            <h3><i>A Platform For Digital Solutions</i></h3>
                            </div>
                </div>
            </div>
        )

    }
}

export default Slider;