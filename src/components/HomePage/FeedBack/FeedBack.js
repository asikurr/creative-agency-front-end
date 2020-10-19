import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./feedback-style.css"
import FeedbackSingle from './FeedbackSingle';


const FeedBack = () => {
    const [reviewInfo, setReviewInfo] = useState([])

    useEffect(() => {
        fetch('https://arcane-sierra-56056.herokuapp.com/getReview')
       .then(res => res.json())
           .then(data => setReviewInfo(data))
    }, [])

    return (
        <section className="feedback-section py-5 py-5">
            <Container>
                <h3 className="py-5 text-center">Clients<span style={{ color: '#7AB259' }}> Feedback</span> </h3>
                <Row>
                   {
                        reviewInfo.map(review => <FeedbackSingle key={review._id} review={review} /> )
                   }
                </Row>
            </Container>
        </section>
    );
};

export default FeedBack;