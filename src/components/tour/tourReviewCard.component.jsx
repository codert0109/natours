import { FaRegStar } from 'react-icons/fa';
import { SERVER_BASE_URL } from '../../constants/serverConstants';

const TourReviewCard = ({ review }) => {
  return (
    <div className='reviews__card'>
      <div className='reviews__avatar'>
        <img
          className='reviews__avatar-img'
          src={`${SERVER_BASE_URL}/img/users/${review.user.photo}`}
          alt={review.user.name}
        />
        <h6 className='reviews__user'>{review.user.name}</h6>
      </div>
      <p className='reviews__text'>{review.review}</p>
      <div className='reviews__rating'>
        {[1, 2, 3, 4, 5].map(star => (
          <FaRegStar
            key={star}
            className={`reviews__star reviews__star--${
              review.rating >= star ? 'active' : 'inactive'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TourReviewCard;
