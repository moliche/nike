import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container dark:bg-black dark:text-white">
      <h3 className="font-palanquin text-center text-4xl font-bold dark:bg-black dark:text-white">
        What Our
        <span className="text-coral-red "> Customers </span>
         Say?
      </h3>
      <p className="info-text m-auto mt-4 text-center dark:text-white">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          /> 
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews