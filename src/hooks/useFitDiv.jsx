import { useEffect, useRef, useState } from 'react';

const useFitDiv = () => {
  const ref = useRef(null);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setInnerHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    if (!ref.current) return;
    const { y } = ref.current.getBoundingClientRect();
    const { height: footer_height } = document
      .querySelector('footer')
      .getBoundingClientRect();
    const { y: header_y, height: header_height } = document
      .querySelector('header')
      .getBoundingClientRect();
    ref.current.style.y = `${header_y + header_height}px`;
    ref.current.style.height = `${window.innerHeight - y - footer_height}px`;

    return () => window.removeEventListener('resize', handleResize);
  }, [innerHeight]);

  return ref;
};

export default useFitDiv;
