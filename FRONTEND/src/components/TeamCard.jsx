import React, { useRef } from 'react';

// Optional: If using React Router, uncomment this and replace <a> tags.
import { Link } from 'react-router-dom';

export const TeamCard = ({ name, position, imageSrc, links = [], className = '' }) => {
  const isPointerInside = useRef(false);
  const refElement = useRef(null);
  const state = useRef({
    rotate: {
      x: 0,
      y: 0,
    },
  });

  const containerStyle = {
    '--r-x': '0deg',
    '--r-y': '0deg',
    '--duration': '300ms',
    '--radius': '48px',
    '--easing': 'ease',
  };

  const updateStyles = () => {
    if (refElement.current) {
      const { rotate } = state.current;
      refElement.current.style.setProperty('--r-x', `${rotate.x}deg`);
      refElement.current.style.setProperty('--r-y', `${rotate.y}deg`);
    }
  };

  return (
    <div
      style={containerStyle}
      ref={refElement}
      className={`relative isolate [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] w-[320px] [aspect-ratio:17/21] ${className}`}
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { rotate } = state.current;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current.style.setProperty('--duration', '0s');
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty('--duration');
          refElement.current.style.setProperty('--r-x', `0deg`);
          refElement.current.style.setProperty('--r-y', `0deg`);
        }
      }}
    >
      <div className="h-full will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-slate-800 overflow-hidden bg-slate-950 shadow-lg">
        
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={imageSrc || '/placeholder.svg'}
            alt={`${name} - ${position}`}
            className="object-cover w-full h-full"
          />

          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
          
          {/* Name and Position */}
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="text-slate-300 mt-1">{position}</p>

          {/* Social Links */}
          {links.length > 0 && (
            <div className="flex gap-4 mt-4">
              {links.map((link, index) => (
                // <a
                //   key={index}
                //   href={link.url}
                //   target="_blank"
                //   rel="noopener noreferrer"
                //   className="text-white hover:text-slate-300 transition-colors"
                //   aria-label={link.label}
                // >
                //   {link.icon}
                // </a>
                // If using React Router:
                <Link
                  key={index}
                  to={link.url}
                  className="text-white hover:text-slate-300 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
