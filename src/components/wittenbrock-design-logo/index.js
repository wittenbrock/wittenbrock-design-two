import React from 'react';
import tw from 'twin.macro';

import {
  logoStrokeSize,
  logoSquareBorder,
  draw,
  slideInFwdCenter,
  bounceInTop,
} from './style';

const wittenbrockDesignLogo = () => (
  <figure
    class="wittenbrock-logo-container"
    tw="sm:h-32 md:h-40 xl:h-48 sm:w-32 md:w-40 xl:w-48"
  >
    <svg
      tw="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
    >
      <title>Wittenbrock Design</title>
      <g
        css={(tw`opacity-0 text-purple-darker fill-current`, slideInFwdCenter)}
      >
        <path d="M151.437,145.677h-18.5v-98h18.5Z" />
        <path d="M265.555,66.177v21.25h28v18.5h-28v21.25h28v18.5h-46.5v-98h46.5v18.5Z" />
        <path d="M356.283,47.677v98h-18.5l-21.1-50.227v50.227h-18.5v-98h18.5l21.1,50.46V47.677Z" />
        <path d="M126.437,272.742v21.25h25v18.5h-25v21.25h25v18.5h-43.5v-98h43.5v18.5Z" />
        <path d="M224.652,254.242v98h-18.5v-98Z" />
        <path d="M109.312,303.242A49.221,49.221,0,0,0,63.187,254.35v0l-.223-.011c-.293-.017-.585-.033-.879-.045-.448-.026-.9-.049-1.345-.049H44.687v98q7.623,0,15.248,0h.474c.155,0,.31-.009.465-.012q.339-.006.676-.017l.47-.018q.526-.022,1.048-.055l.119-.006h0A49.221,49.221,0,0,0,109.312,303.242ZM63.187,333.711V272.772a30.616,30.616,0,0,1,0,60.939Z" />
        <path d="M293.833,249.029H280.561a49,49,0,0,1,0-97.994h13.272v18.359H280.561a30.639,30.639,0,0,0,0,61.277h13.272Z" />
        <path d="M356.283,254.242v98h-18.5v-.084l-.159.067L316.711,302.2v50.038h-18.5v-98h18.5l21.072,50.4v-50.4Z" />
        <path d="M333.494,195.94l22.766,53.089h-18.5l-21.073-49.142v49.142h-18.5v-98h18.5v41.576l21.1-41.576h18.5Z" />
        <path d="M114.5,145.675v0H96v0l-9.8-50.41-9.8,50.41v0H57.9v0l-19.049-98h18.5l9.8,50.411,9.8-50.411h18.5l9.8,50.411,9.8-50.411h18.5Z" />
        <path d="M96.124,217.446a30.758,30.758,0,0,0-10.8-23.307,25.2,25.2,0,0,0,6.091-16.374c0-14.475-12.586-26.292-28.226-26.708v-.028h-18.5v98h18.5v0C81.363,248.942,96.124,234.809,96.124,217.446ZM72.913,177.765c0,4.237-4.373,7.847-9.726,8.2v-16.4C68.54,169.918,72.913,173.528,72.913,177.765Zm-9.726,52.76V204.366c7.975.078,14.437,5.914,14.437,13.08S71.162,230.448,63.187,230.525Z" />
        <path d="M204.919,321.433c-.028,11.556-5.854,21.648-15.585,27A33.708,33.708,0,0,1,173.306,353c-3.717.226-5.288,0-7.932,0a57.252,57.252,0,0,1-9.168-1,.766.766,0,0,0-.153,0q.078-9.217.157-18.433a63.306,63.306,0,0,0,8.9,1.114c4.187.185,4.25.3,8.1-.253a26.165,26.165,0,0,0,7.244-2.158c3.764-2.069,6.628-5.964,6.03-10.887-.489-4.027-4.723-8.275-9.765-12.766-22.382-16.951-21.626-31.42-19.094-38.649,2.424-6.924,8.514-12.157,17.147-14.736,6.729-2.009,14.456-2.67,20.832-.555,4.536,1.5,2.817.759,6.2,2.291v21.665a30.885,30.885,0,0,0-12.7-6.47c-6.715-1.751-12.045-.258-13.711,3.2-1.76,3.656,2.407,9.7,7.882,14.857C194.2,298.924,204.949,308.889,204.919,321.433Z" />
        <path d="M158.907,249.029l-18.958-44.212c6.582-5.207,9.8-13.982,9.8-24.123,0-16.2-13.848-29.4-30.971-29.653v-.012h-18.5v98h18.5V198.6l21.625,50.43Zm-27.654-68.335c0,6.012-5.55,10.926-12.471,11.153V169.54C125.7,169.767,131.253,174.682,131.253,180.694Zm-12.471,12.732.029.088h-.029Z" />
        <path d="M242.746,66.177H226.981v79.488h-18.5V66.177h-18.5v79.5h-18.5v-79.5H155.746v-18.5h52.735v-.012h18.5v.012h15.765Z" />
        <path d="M244.641,303.078a30.646,30.646,0,0,0,30.611,30.612h.238V312.334H258.533V293.992h35.3v58.04H275.252a48.954,48.954,0,0,1,0-97.908h18.581v18.343H275.252A30.646,30.646,0,0,0,244.641,303.078Z" />
      </g>
      <circle
        css={
          ((tw = `text-purple-darker stroke-current`),
          logoStrokeSize,
          bounceInTop)
        }
        cx="200"
        cy="200"
        r="39.625"
      />
      <polyline
        css={
          (tw`text-purple-darker stroke-current`,
          logoSquareBorder,
          logoStrokeSize,
          draw)
        }
        points="8.138 20.204 382.613 20.204 382.613 379.796 17.387 379.796 17.387 20.212"
      />
    </svg>
  </figure>
);

export default wittenbrockDesignLogo;
