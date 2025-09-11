import React from 'react';
import { motion } from 'framer-motion';
import { User, X } from 'lucide-react';

const ExpandedMemberCard = ({ member, onClose }) => {
  return (
    <motion.div
      layoutId={`member-card-container-${member.id}`}
      className="w-full max-w-md h-[60vh] cursor-default"
      onClick={(e) => e.stopPropagation()}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card (visible during transition) */}
        <div
          className="absolute w-full h-full bg-gray-800 border-2 border-purple-500 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl shadow-purple-500/20"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {member.image ? (
            <img-replace src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <User className="w-2/3 h-2/3 text-gray-600" />
          )}
        </div>

        {/* Back of the card (final state) */}
        <div
          className="absolute w-full h-full bg-gray-900 border-2 border-amber-500 rounded-xl p-8 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl shadow-amber-500/20"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-24 h-24 bg-gray-800 border-2 border-purple-500 rounded-full flex-shrink-0 flex items-center justify-center mb-4">
             {member.image ? (
              <img-replace src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
            ) : (
              <User className="w-16 h-16 text-gray-600" />
            )}
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-2">{member.name}</h3>
          <p className="text-gray-300 leading-relaxed text-sm flex-grow overflow-y-auto p-2">{member.bio}</p>
        </div>
      </motion.div>
      <motion.button 
        onClick={onClose} 
        className="absolute -top-4 -right-4 text-gray-300 bg-gray-900 rounded-full p-2 hover:text-white hover:bg-purple-600 transition-colors z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <X size={24} />
      </motion.button>
    </motion.div>
  );
};

export default ExpandedMemberCard;