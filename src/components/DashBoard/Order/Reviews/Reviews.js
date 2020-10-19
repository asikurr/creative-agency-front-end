import React, { useState} from 'react';
import { Col } from 'react-bootstrap';
import DashBoardNav from '../../DashBoard/DashBoardNav';
import Sidebar from '../../SideBar/Sidebar';

const Reviews = () => {
    const [reviewInfo, setReviewInfo] = useState({})

       const handleReviewInfo = (e) => {
        const newReviewInfo = { ...reviewInfo }
        newReviewInfo[e.target.name] = e.target.value
        setReviewInfo(newReviewInfo)
    }

    const handleFormSubmit = () => {
        fetch('https://arcane-sierra-56056.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(reviewInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <>

            <DashBoardNav />
            <div className="d-flex">
                <Sidebar />
                <Col md={6} className="mt-5">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <input onBlur={handleReviewInfo} type="text" name="name" placeholder="Your Name/Company Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleReviewInfo} type="text" name="companyName" placeholder="Company name and designation" id="" className="form-control" />
                        </div>

                       
                        <div className="form-group">
                            <textarea onBlur={handleReviewInfo} name="description" placeholder="Description" id="" className="form-control" rows="5"></textarea>
                        </div>
                     

                       
                        <button className="btn btn-success">Send</button>
                    </form>
                </Col>
            </div>
        </>
    );
};

export default Reviews;