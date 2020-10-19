import React from 'react';
import { Col } from 'react-bootstrap';
import customer1 from '../../../images/customer-1.png'

const FeedbackSingle = ({ review}) => {
    return (
        <Col md={4}>
            <div className="feedback-card mb-3">
                <div className="feedback-header d-flex align-items-center">
                    <img src={customer1} className="feedbackImg mr-3" alt="" />
                    <div className="feedback-heading">
                        <h5 className="feedbackTitle">{review.name}</h5>
                        <h6 className="feedbackSubTitle">{review.companyName}</h6>
                    </div>
                </div>
                <p className="feedbackDescription">
                    {review.description}
                </p>
            </div>
        </Col>
    );
};

export default FeedbackSingle;