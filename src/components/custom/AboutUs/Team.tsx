import TestimonialCard from "../TestimonialCard";

const Team = () => {
  return (
    <div className="my-4 lg:my-8 p-4">
      <h1 className="text-center text-xl lg:text-3xl font-semibold text-wrap px-6 lg:px-0">
        Meet Our Team: The Power Behind Hubnex Skillup
      </h1>

      <p className="text-lg font-medium text-center my-2 mx-8">
        Behind <b> Hubnex Skillup</b> is a diverse and dynamic team of
        educators, industry experts, and tech innovators. We are passionate
        about redefining professional education and committed to your success.
        Our mentors are not just teachers—they are leaders and trailblazers in
        their respective fields, bringing decades of practical experience to
        every workshop. They are dedicated to providing you with the insights,
        knowledge, and guidance you need to navigate your career journey
        successfully.
      </p>
      <p className="text-lg font-medium text-center my-2 mx-8">
        Our team also includes a dedicated group of developers, content
        creators, and support staff who work tirelessly to ensure that your
        learning experience is smooth, engaging, and impactful. Together, we are
        building a platform that is not just about education, but about
        transformation.
      </p>
      <h1 className="text-xl lg:text-3xl font-semibold  text-center my-4">
        Voices of Success
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 items-center">
        <TestimonialCard
          imageSrc="https://images.pexels.com/photos/7242901/pexels-photo-7242901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          review="Hubnex Skillup was a turning point in my career. The personalized mentorship helped me transition from an engineer to a data science professional, and it was a game-changer."
          reviewerName="Priya S., Data Scientist"
        />
        <TestimonialCard
          imageSrc="https://images.pexels.com/photos/6999225/pexels-photo-6999225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          review="The hands-on workshops were exactly what I needed. I could apply what I learned immediately in my job, and within months, I received a promotion. Hubnex Skillup truly delivered!"
          reviewerName="Anil K., Marketing Manager"
        />
        <TestimonialCard
          imageSrc="https://images.pexels.com/photos/6697327/pexels-photo-6697327.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          review="Flexibility and real-world application—these are what make Hubnex Skillup stand out. The mentorship and certifications have added immense value to my resume, and I’m now in a much stronger position in my career."
          reviewerName="Neha M., Business Analyst"
        />
      </div>
    </div>
  );
};

export default Team;
