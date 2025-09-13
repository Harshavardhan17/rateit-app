import {useState} from "react";
import ReviewCard from "../components/viewCards/ReviewCard";
import ReviewForm from "../components/forms/ReviewForm";
import {seriesApi} from "../services/api";

function HomePage() {

    const [reviews, setReviews] = useState([])
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleAddReview = async (data) => {
        setLoading(true);
        try {
            const response = await seriesApi.createSeries({ name: data.title, rating: data.rating });
            if (response.success) {
                const newReview = {
                    id: response.data.id,
                    title: response.data.name,
                    description: data.description,
                    rating: response.data.rating
                };
                setReviews(prev => [...prev, newReview]);
            }
        } catch (error) {
            console.error('Failed to add review:', error);
        } finally {
            setLoading(false);
            setShowForm(false);
        }
    };


    return (
        <div>
            <h2>Browse Reviews</h2>
            <button onClick={() => setShowForm(true)}>Add Review</button>

            {loading && <p>Adding review...</p>}

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review}/>
                ))}
            </div>

            <ReviewForm
                isOpen={showForm}
                onClose={() => setShowForm(false)}
                onSubmit={handleAddReview}
            />

        </div>
    );
}

export default HomePage;