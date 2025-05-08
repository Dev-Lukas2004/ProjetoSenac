import React from 'react';

const TeamMemberCard = ({ image, name, role, linkedin, github }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        src={image}
        alt={`Foto de ${name}`}
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-blue-600 text-xl"></i>
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-gray-800 text-xl"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
