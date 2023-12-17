import React from 'react'
import img1 from '../Screenshot 2023-12-17 112915.png'

const Content = () => {
    return (
        <div className='content'>
            <div className="image-wrapper">
                <img src={img1} alt="" />
            </div>

            <div className="text-wrapper flex column">
                <h2>Think Health. Think Massage.</h2>
                <p>
                    We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment
                    with us, please call us at 987-654-3210 today!

                </p>

                <div className="btns">
                    <button className='btn'>Learn More About us</button>
                    <button className="btn">Contact us Today</button>
                </div>

            </div>

            <div className="bottom-text ">
                <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage<br />
                therapists who can provide clinical massage.
                </p>

                <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle.<br/>Enhance your health and improve your performance with our treatments.
                </p>

                <p>We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the <br/>best massage therapy in Mainland.
                </p>
            </div>

            <hr />
        </div>
    )
}

export default Content