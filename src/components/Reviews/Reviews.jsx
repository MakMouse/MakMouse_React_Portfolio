import React from 'react';
import './Reviews.css'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "CEO at StartUp X",
      text: "MakMouse delivered the project ahead of schedule. The code is clean, and the UI is incredibly smooth. Highly recommended for any frontend tasks!",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Product Manager",
      text: "Amazing attention to detail. He transformed our complex Figma designs into a fully functional React app. Professional communication throughout.",
      rating: 5
    },
    {
      id: 3,
      name: "John Doe",
      role: "Tech Lead",
      text: "Great problem solver. When we had issues with responsiveness, he stepped in and fixed everything in no time. A true pro!",
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
              {/* Декоративна лапка на фоні */}
              <div className="quote-icon-bg">
                <FaQuoteLeft />
              </div>

              {/* Зірки */}
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Текст відгуку */}
              <p className="review-text">"{review.text}"</p>

              {/* Інфо про клієнта */}
              <div className="client-info">
                <div className="client-avatar-placeholder">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4>{review.name}</h4>
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