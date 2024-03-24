import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listner = () => setMatches(media.matches);
    if (matches !== media.matches) setMatches(media.matches);
    media.addEventListener("change", listner);
    return () => media.removeEventListener("change", listner);
  }, [query, matches]);

  return matches;
}

export default useMediaQuery;
