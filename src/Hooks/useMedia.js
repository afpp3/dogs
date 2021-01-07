import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const ChangeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    window.addEventListener('resize', ChangeMatch);

    return () => window.removeEventListener('resize', ChangeMatch);
  }, [media]);
  return match;
};

export default useMedia;
