import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch("https://api.ipapi.is/?q=");
        const data = await response.json();
        console.log("Visitor Info:", {
          ip: data.ip,
          city: data.city,
          country: data.country,
          region: data.region,
          timezone: data.timezone,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default VisitorTracker;