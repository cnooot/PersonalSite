import video from './assets/starry-sunset.1920x1080.mp4'
import React from 'react';
import { useSpring, animated } from 'react-spring';


function AnimatedBackground () {
  const props = useSpring({
    from: { transform: 'translate3d(0%,0,0)' },
    to: { transform: 'translate3d(-100%,0,0)' },
    loop: true,
    config: { duration: 3000 },
  });

  return (
    <div className="animated-background" style={props}>
      <video src={video} autoPlay loop muted className="background-video">
        {video}
      </video>
    </div>
  );
};

export default AnimatedBackground;