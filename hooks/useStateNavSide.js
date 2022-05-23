import { useState, useEffect } from 'react';
import useWindowDimensions from './useWindowDimensions';

const useStateNavSide = () => {
  const { height, width} = useWindowDimensions()
  const [active, setActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(width < 800){
      if(active === false){
        setActive(true)
      }
      setIsMobile(true)
    } else {
      if(active){
        setActive(false)
      }
      setIsMobile(false)
    }
  }, [width])


  const handleIsMobile = () => {
    if(isMobile){
      return active ? "ml-0 -z-10" : ""
    }else {
      return active ? "ml-0 -z-10" : "ml-[250px]"
    }
  }

  return [
    active,
    {
      setIsMobile: handleIsMobile,
      setIsActive: setActive,
    },
  ];

}

export default useStateNavSide;