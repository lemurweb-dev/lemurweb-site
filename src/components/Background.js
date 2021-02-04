import React from "react"

import Particles from "react-tsparticles"
import leaf_1 from "../images/leaf1.png"
import leaf_2 from "../images/leaf2.png"
import leaf_3 from "../images/leaf3.png"
import leaf_4 from "../images/leaf4.png"

const Background = props => {

  return (
    <>
      <Particles
        id="back-particles"
        options={{
          fpsLimit: 30,
          particles: {
            collisions: {
              enable: false,
            },
            rotate: {
              enable: true,
              value: 0,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 300,
              },
              value: 45,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "image",
              image: [
                {
                  src: leaf_1,
                },
                {
                  src: leaf_2,
                },
                {
                  src: leaf_3,
                },
                {
                  src: leaf_4,
                },
              ],
            },
            size: {
              random: false,
              value: 24,
            },
          },
          detectRetina: true,
        }}
      />

      {/* <Particles
        id="front-particles"
        options={{
          fpsLimit: 30,
          pauseOnOutsideViewport: true,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: repulseAmount,
                duration: 0.1,
              },
            },
          },
          particles: {
            collisions: {
              enable: false,
            },
            life: {
              duration: 2,
            },
            rotate: {
              enable: true,
              value: 0,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 300,
              },
              value: 30,
            },
            opacity: {
              value: 0.75,
            },

            shape: {
              type: "image",
              image: [
                {
                  src: leaf_1,
                },
                {
                  src: leaf_2,
                },
                {
                  src: leaf_3,
                },
                {
                  src: leaf_4,
                },
              ],
            },
            size: {
              random: false,
              value: 32,
            },
          },
          detectRetina: true,
        }}
      /> */}
    </>
  )
}

// export default withGetScreen(Background);
export default Background;
