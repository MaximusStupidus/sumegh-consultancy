
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  qualifications?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, qualifications }) => {
  return (
    <div className="card transition-all duration-300 hover:shadow-lg h-full">
      <div className="aspect-w-3 aspect-h-4 overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sumegh-primary font-medium mb-2">{role}</p>
        {qualifications && (
          <p className="text-gray-600 text-sm">{qualifications}</p>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
