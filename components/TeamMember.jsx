'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const TeamMember = ({ name, position, image, social }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="team-card"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-400">{position}</p>
      </div>
      <div className="team-card-overlay">
        <div className="flex space-x-4">
          {social?.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
          )}
          {social?.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter size={24} />
            </a>
          )}
          {social?.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
