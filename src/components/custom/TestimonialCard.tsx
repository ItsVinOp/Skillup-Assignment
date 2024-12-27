interface TestimonialCardProps {
  imageSrc: string;
  review: string;
  reviewerName: string;
}

export default function TestimonialCard(
  { imageSrc, review, reviewerName }: TestimonialCardProps = {
    imageSrc: "/placeholder.svg?height=80&width=80",
    review:
      "Skillup has been an amazing platform for my career growth. The courses are well-structured and the instructors are top-notch.",
    reviewerName: "Jane Doe",
  }
) {
  return (
    <div className="w-full lg:max-w-md bg-white border-2 border-green-primary rounded-lg shadow-md p-6 font-sans">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={imageSrc}
            alt={reviewerName}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600 text-sm italic mb-2 leading-relaxed">
            "{review}"
          </p>
          <p className="text-green-600 font-semibold text-sm">{reviewerName}</p>
        </div>
      </div>
    </div>
  );
}
