import React from 'react';
import './Reviews.css'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Dmytro Kovalenko",
      role: "Tech Lead",
      text: "MakMouse helped resolve FPS drops during scrolling. He rewrote heavy animations using CSS transforms, and the site performance improved significantly. Clean code structure.",
      rating: 5
    },
    {
      id: 2,
      name: "Kateryna Boiko",
      role: "Project Manager",
      text: "It's a rare case where the final build looks identical to the Figma design. The margins, fonts, and responsiveness are perfect. Maks, delivered before the deadline.",
      rating: 5
    },
    {
      id: 3,
      name: "Sergiy Rudenko",
      role: "E-commerce Owner",
      text: "Needed to urgently improve load speed. Maksym optimized images and scripts, pushing us into the Google PageSpeed green zone (90+). Highly recommend for optimization tasks.",
      rating: 5
    }
  ];

  return (
    <section id="reviews">
      <div className="container">
        <h2 className="section-title">Client Feedback</h2>
        
        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="quote-icon-bg">
                <FaQuoteLeft />
              </div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="client-info">
                <div className="client-avatar-placeholder">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3>{review.name}</h3>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;