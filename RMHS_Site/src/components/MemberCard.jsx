import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const MemberCard = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-square cursor-pointer"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onHoverStart={() => { setIsFlipped(true); setIsHovered(true); }}
      onHoverEnd={() => { setIsFlipped(false); setIsHovered(false); }}
      animate={{ zIndex: isHovered ? 10 : 0 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0, scale: isHovered ? 1.75 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Card Front */}
        <div
          className="absolute w-full h-full bg-gray-800 border border-purple-500/30 rounded-lg flex items-center justify-center overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {member.image ? (
            <img-replace src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <User className="w-1/2 h-1/2 text-gray-600" />
          )}
        </div>

        {/* Card Back */}
        <div
          className="absolute w-full h-full bg-gray-900 border-2 border-amber-500 rounded-lg p-3 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-[10px] font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-1">{member.name}</h3>
          <p className="text-gray-300 text-[7px] leading-tight">{member.bio}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemberCard;