import React, { useState, useEffect } from 'react';
import ProtectedContent from './permcomp';

function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ptext, setPtext] = useState("");

  useEffect(() => {
    const checkPermission = async () => {
      try {
        if (ptext === 'granted') {
          setPermissionGranted(true);
        } else {
          setPermissionGranted(false);
        }
      } catch (error) {
        console.error('Error checking permission:', error);
        setPermissionGranted(false);
      } finally {
        setLoading(false);
      }
    };

    if (ptext) {
      checkPermission();
    } else {
      setLoading(false); 
    }

  }, [ptext]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!permissionGranted) {
    return (
      <div>
        <input
          type="text"
          value={ptext}
          onChange={(e) => setPtext(e.target.value)}
        />
        <div>Permission not granted.</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Permission granted! Here's your protected content:</h1>
      <ProtectedContent />
    </div>
  );
}

export default App;
