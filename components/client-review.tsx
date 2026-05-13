import React from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  title?: string;
  location?: string;
  rating: number;
  review: string;
  avatar: string;
}

interface StarRatingProps {
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Kamreen",
    title: "Product Designer, Gradient",
    rating: 4.95,
    review:
      "Our trip to Hunza Valley was unforgettable. The mountains, food, and local hospitality were beyond expectations!”",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c24e?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Olivia",
    location: "New York",
    rating: 4.95,
    review:
      "Loved every moment in Skardu. The tour was well organized, safe, and full of breathtaking views.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "David",
    location: "Canada",
    rating: 4.95,
    review:
      "Exploring Fairy Meadows was like a dream. Everything from transport to accommodation was perfectly managed.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah",
    location: "France",
    rating: 4.95,
    review:
      "A wonderful experience through Naran and Kaghan Valley. Highly recommend for nature lovers!",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },

];

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      ))}

      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}

      <span className="ml-2 text-sm font-medium text-gray-700">
        {rating}
      </span>
    </div>
  );
};

const ClientReviews: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="md:text-6xl sm:text-5xl text-4xl text-blue-400 font-medium mb-4 heading">
          Client Reviews
        </h2>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            {/* Rating */}
            <StarRating rating={review.rating} />

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {review.review}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  — {review.name}
                </h4>

                <p className="text-gray-500 text-xs">
                  {review.title || review.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;