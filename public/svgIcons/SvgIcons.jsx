const DownloadIcon = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z' />
    </svg>
  );
};

const DownloadIconBlue = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='#6267A1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z' />
    </svg>
  );
};

const ExternalLinkIcon = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14.2222 14.7222H1.77778V2.27778H8V0.5H1.77778C0.791111 0.5 0 1.3 0 2.27778V14.7222C0 15.7 0.791111 16.5 1.77778 16.5H14.2222C15.2 16.5 16 15.7 16 14.7222V8.5H14.2222V14.7222ZM9.77778 0.5V2.27778H12.9689L4.23111 11.0156L5.48444 12.2689L14.2222 3.53111V6.72222H16V0.5H9.77778Z' />
    </svg>
  );
};

const OpenNewTabIcon = (props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={props.color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z'
        fill={props.color}
      />
    </svg>
  );
};

const ChevronLeft = (props) => {
  return (
    <svg
      width='8'
      height='13'
      viewBox='0 0 8 13'
      fill={props.color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 11.4555L3.05533 6.5L8 1.54453L6.47773 0.0222625L-2.83151e-07 6.49999L6.47773 12.9777L8 11.4555Z'
        fill={props.color}
      />
    </svg>
  );
};

const ScrollToTop = (props) => {
  const { circleColor, arrowColor } = props;

  const setCircleColor = circleColor ? circleColor : '#4B4C53';
  const setArrowColor = arrowColor ? arrowColor : '#ffffff';

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <svg
      width='48px'
      height='48px'
      viewBox='0 0 48 48'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      onClick={() => handleClick()}
    >
      <g
        id='Page-1'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g id='Group-2-(3)' fillRule='nonzero'>
          <circle
            id='Oval'
            fill={setCircleColor}
            cx='24'
            cy='24'
            r='24'
          ></circle>
          <polygon
            id='Path'
            fill={setArrowColor}
            points='16 24 17.41 25.41 23 19.83 23 32 25 32 25 19.83 30.58 25.42 32 24 24 16'
          ></polygon>
        </g>
      </g>
    </svg>
  );
};

const BurgerMenu = (props) => {

    return (
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z" fill="#4B4C53"/>
        </svg>
    )

}

const ChevronUp = () => {

    return (
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.77737 8L6.73284 3.05533L11.6883 8L13.2106 6.47773L6.73284 0L0.255106 6.47773L1.77737 8Z" fill="white"/>
        </svg>
    )
}

const ChevronUpMob = () => {
  
    return (
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.68944 8L6.64491 3.05533L11.6004 8L13.1226 6.47773L6.64491 0L0.167177 6.47773L1.68944 8Z" fill="#4B4C53"/>
      </svg>
    )
}

const ChevronDown = () => {

    return (
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.166 0L7.21052 4.94467L2.25506 0L0.732788 1.52227L7.21052 8L13.6883 1.52227L12.166 0Z" fill="#4B4C53"/>
        </svg>
    )
}

const AudioPlayIcon = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='#6267A1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z' />
    </svg>
  )
}

const VideoPlayIcon = () => {
  return (
    <defs>
      <g id="video-play">
        <svg 
          width="54" 
          height="54" 
          viewBox="0 0 54 54" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.9999 0.333313C12.2799 0.333313 0.333252 12.28 0.333252 27C0.333252 41.72 12.2799 53.6666 26.9999 53.6666C41.7199 53.6666 53.6666 41.72 53.6666 27C53.6666 12.28 41.7199 0.333313 26.9999 0.333313ZM26.9999 48.3333C15.2399 48.3333 5.66659 38.76 5.66659 27C5.66659 15.24 15.2399 5.66665 26.9999 5.66665C38.7599 5.66665 48.3333 15.24 48.3333 27C48.3333 38.76 38.7599 48.3333 26.9999 48.3333ZM20.3333 39L38.9999 27L20.3333 15V39Z" fill="white"/>
        </svg>
      </g>
      </defs>
  )
}

export {
    DownloadIcon,
    ExternalLinkIcon,
    OpenNewTabIcon,
    ChevronLeft,
    ScrollToTop,
    BurgerMenu,
    ChevronUp,
    ChevronDown,
    DownloadIconBlue,
    ChevronUpMob,
    AudioPlayIcon,
    VideoPlayIcon
}
