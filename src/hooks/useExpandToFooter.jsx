import { useEffect, useRef, useState } from 'react';

const useExpandToFooter = () => {
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
    ref.current.style.height = `${window.innerHeight - y - footer_height}px`;

    return () => window.removeEventListener('resize', handleResize);
  }, [innerHeight]);

  return ref;
};

export default useExpandToFooter;
