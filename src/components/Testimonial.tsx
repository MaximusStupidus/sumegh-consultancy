
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  company: string;
  role?: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, company, role, image }) => {
  return (
    <div className="card h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg className="w-8 h-8 text-sumegh-secondary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={name} 
                className="w-10 h-10 rounded-full object-cover" 
              />
            </div>
          )}
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">
              {role && `${role}, `}{company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
