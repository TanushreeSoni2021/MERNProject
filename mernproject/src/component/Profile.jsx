import React from 'react'
import "./Profile.css"
const Profile = () => {
    return (
        <>

            <header>
                <h1>John Doe</h1>
                <p>Web Developer</p>
            </header>
            <div className="contact container">
                <section className="profile">
                    <img src="profile" alt="" />
                    <h2>johndoe  </h2>
                    <h3>company name</h3>
                    <p>what products tou sell </p>
                    <h4>How many proucts post </h4>
                    <p>rating</p>
                    <h2>Contact Information</h2>
                    <ul>
                        <li>Email: john@example.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Website: <a href="https://www.example.com">www.example.com</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/johndoe">linkedin.com/in/johndoe</a></li>
                    </ul>
                </section>
            </div>

        </>
    )
}

export default Profile