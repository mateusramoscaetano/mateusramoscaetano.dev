'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ModalProps } from '../../../lib/types';
import Button from '../Button/Button';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-500 ease-out ${className}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-200 group"
        >
          <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
        </button>
        
        {/* Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 