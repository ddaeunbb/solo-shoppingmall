import { useEffect, useRef, useState } from 'react'

export default function useUnlimitScroll(initialPage:number, dataLength: number) {
  const scrollRef = useRef<number | null>(null);
  const defaultPage: number = 8;
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const scrollListener = () => {
      scrollRef.current = window.scrollY;
      const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollPosition === scrollHeight){
        if(page >= dataLength) return;
        setPage(page + defaultPage);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [page, setPage]);

  return page;
}
