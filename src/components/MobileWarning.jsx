import React from 'react';

const MobileWarning = () => {
  // Simple client-side checks
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const hasAccepted = typeof window !== 'undefined' && localStorage.getItem('mobileViewAccepted');
  
  if (!isMobile || hasAccepted) {
    return null;
  }

  const handleContinue = () => {
    localStorage.setItem('mobileViewAccepted', 'true');
    // Force a reload to update the view
    window.location.reload();
  };

  // Prevent scrolling and hide content behind warning
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="px-8 py-12 text-center">
        <h2 className="text-2xl font-medium text-black mb-8">
          Best viewed on desktop
        </h2>
        
        <button
          onClick={handleContinue}
          className="border-2 border-black px-8 py-3 text-black text-base font-medium hover:bg-black hover:text-white transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MobileWarning;
