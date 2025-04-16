import React, { useEffect } from 'react';

const MobileWarning = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) {
      const trackVisitor = async () => {
        try {
          const response = await fetch("https://api.ipapi.is/?q=");
          const data = await response.json();
          console.log("Mobile Visitor Info:", {
            ip: data.ip,
            city: data.city,
            country: data.country,
            region: data.region,
            timezone: data.timezone,
            userAgent: navigator.userAgent
          });
        } catch (error) {
          console.error("Error tracking visitor:", error);
        }
      };

      trackVisitor();
    }
  }, [isMobile]);
  
  if (!isMobile) {
    return null;
  }

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
          onClick={() => window.location.reload()}
          className="border-2 border-black px-8 py-3 text-black text-base font-medium hover:bg-black hover:text-white transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MobileWarning;
