import React from 'react'
import "./Profile.css"
import ProductList from './ProductList';
const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <>
            <div className="container-fluid overflow-hidden">
                <div className="row vh-100 overflow-hidden">
                    <div className="col-12 col-sm-6 col-md-6 col-xl-5 col-lg-5 px-sm-2 px-0 bg-custom d-flex sticky-top">
                        <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                            {/* <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5">B<span className="d-none d-sm-inline">rand</span></span>
                </a> */}
                            <div className='outer'>
                                <div className='bg-img'>
                                    <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='' />
                                </div>
                                <div className='profile-pic'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP7ARHenfnGXcxCIhmDxObHocM8FPbjyaBg&usqp=CAU' alt='' />
                                    <span>count products</span>
                                    <h3 className='text-capitalize' >{user.name}</h3>
                                    <h5>Company name</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col d-flex flex-column h-sm-100">
                        <main className="row overflow-auto">
                            <div className="col pt-4">
                                <ProductList />
                            </div>
                        </main>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile