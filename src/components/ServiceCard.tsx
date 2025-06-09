
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link }) => {
  return (
    <div className="card transition-all duration-300 hover:shadow-lg h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="rounded-full bg-sumegh-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="text-sumegh-primary w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link 
          to={link}
          className="text-sumegh-primary font-medium hover:text-sumegh-secondary flex items-center mt-auto"
        >
          Learn More
          <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
