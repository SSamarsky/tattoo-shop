const SvgGenerator = ({ name }) => {
  // eslint-disable-next-line default-case
  switch (name) {
    case "call":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 7.37753L8.30288 5.00627C8.30288 5.00627 8.39654 4.90627 9.00967 5.50499C9.6228 6.10371 11.7383 8.86252 11.7383 8.86252L11.0142 11.8828L16.633 17.4993L19.6524 16.7763L22.9923 19.2441L23.5089 20.2115L21.1375 23.5142L17.5132 23.4803L5.03389 11.0017L5 7.37753Z"
            stroke="#FAF6F2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.5 9.23408L14.7346 14.4982L14.3137 14.7835L13.8929 14.4982L5.5 8.80873V20.5H22.5V9.23408ZM6.24266 7.5L14.3137 12.9713L22.3848 7.5H6.24266ZM4 6H5.5H22.5H24V7.5V8.11329L24.0483 8.18451L24 8.21724V20.5V22H22.5H5.5H4V20.5V7.5V6Z"
            fill="#FAF6F2"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 4H9.25V4.75V7.75H5.5H4V9.25V22.25V23.75H5.5H22.5H24V22.25V9.25V7.75H22.5H18.75V4.75V4H18H10ZM17.25 9.25V10.75H18.75V9.25H22.5V22.25H5.5V9.25H9.25V10.75H10.75V9.25H17.25ZM17.25 7.75V5.5H10.75V7.75H17.25Z"
            fill="#FAF6F2"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.74399 13.7906C6.31564 13.3621 5.98384 12.847 5.77086 12.2798C5.55787 11.7127 5.46861 11.1065 5.50907 10.502C5.54952 9.89748 5.71875 9.30861 6.00542 8.77486C6.29208 8.24111 6.68955 7.77482 7.17118 7.40726C7.6528 7.03969 8.20744 6.77935 8.79792 6.64369C9.38839 6.50802 10.001 6.50017 10.5948 6.62066C11.1886 6.74115 11.7497 6.9872 12.2406 7.3423C12.7315 7.6974 13.1407 8.15336 13.441 8.67958H14.559C14.8592 8.15336 15.2685 7.6974 15.7594 7.3423C16.2503 6.9872 16.8114 6.74115 17.4052 6.62066C17.9989 6.50017 18.6116 6.50802 19.2021 6.64369C19.7925 6.77935 20.3472 7.03969 20.8288 7.40726C21.3104 7.77482 21.7079 8.24111 21.9946 8.77486C22.2812 9.30861 22.4505 9.89748 22.4909 10.502C22.5314 11.1065 22.4421 11.7127 22.2291 12.2798C22.0161 12.847 21.6843 13.3621 21.256 13.7906L14 21.0486L6.74399 13.7916V13.7906ZM21.962 14.5006C22.4741 13.9884 22.8747 13.3758 23.1386 12.7013C23.4025 12.0268 23.524 11.3049 23.4954 10.5812C23.4669 9.85747 23.2888 9.14748 22.9725 8.49589C22.6563 7.84429 22.2086 7.26519 21.6576 6.795C21.1067 6.32481 20.4644 5.97371 19.7712 5.76378C19.078 5.55384 18.3488 5.48962 17.6296 5.57514C16.9104 5.66067 16.2166 5.89409 15.592 6.26074C14.9673 6.62738 14.4253 7.11931 14 7.70558C13.5747 7.11931 13.0326 6.62738 12.408 6.26074C11.7833 5.89409 11.0896 5.66067 10.3704 5.57514C9.65113 5.48962 8.92198 5.55384 8.22877 5.76378C7.53556 5.97371 6.89328 6.32481 6.34234 6.795C5.7914 7.26519 5.34371 7.84429 5.02743 8.49589C4.71115 9.14748 4.53312 9.85747 4.50453 10.5812C4.47594 11.3049 4.59742 12.0268 4.86133 12.7013C5.12523 13.3758 5.52585 13.9884 6.03799 14.5006L14 22.4616L21.962 14.5016V14.5006Z"
            fill="#FAF6F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.04399 13.6673L14 20.6243L21.0438 13.5785L21.256 13.7906L14 21.0486L6.74399 13.7916V13.7906C6.31564 13.3621 5.98384 12.847 5.77086 12.2798C5.55787 11.7127 5.46861 11.1065 5.50907 10.502C5.54952 9.89748 5.71875 9.30861 6.00542 8.77486C6.29208 8.24111 6.68955 7.77482 7.17118 7.40726C7.6528 7.03969 8.20744 6.77935 8.79792 6.64369C9.38839 6.50802 10.001 6.50017 10.5948 6.62066C11.1886 6.74115 11.7497 6.9872 12.2406 7.3423C12.7315 7.6974 13.1407 8.15336 13.441 8.67958H14.559C14.8592 8.15336 15.2685 7.6974 15.7594 7.3423C16.2503 6.9872 16.8114 6.74115 17.4052 6.62066C17.9989 6.50017 18.6116 6.50802 19.2021 6.64369C19.7925 6.77935 20.3472 7.03969 20.8288 7.40726C21.3104 7.77482 21.7079 8.24111 21.9946 8.77486C22.2812 9.30861 22.4505 9.89748 22.4909 10.502C22.5314 11.1065 22.4421 11.7127 22.2291 12.2798C22.0161 12.847 21.6843 13.3621 21.256 13.7906L21.0438 13.5785C21.4419 13.1803 21.7503 12.7015 21.9483 12.1744C22.1462 11.6472 22.2292 11.0838 22.1916 10.522C22.154 9.96018 21.9967 9.41288 21.7303 8.91681C21.4638 8.42073 21.0944 7.98736 20.6468 7.64574C20.1992 7.30412 19.6837 7.06216 19.1349 6.93607C18.5861 6.80998 18.0167 6.80269 17.4648 6.91467C16.913 7.02666 16.3915 7.25533 15.9352 7.58537C15.479 7.91541 15.0986 8.33917 14.8196 8.82825L14.7332 8.97958H13.2668L13.1804 8.82825C12.9014 8.33917 12.521 7.91541 12.0647 7.58537C11.6085 7.25533 11.087 7.02666 10.5351 6.91467C9.98329 6.80269 9.41389 6.80998 8.86509 6.93607C8.3163 7.06216 7.80081 7.30412 7.35318 7.64574C6.90556 7.98736 6.53614 8.42073 6.26971 8.91681C6.00328 9.41288 5.846 9.96018 5.8084 10.522C5.7708 11.0838 5.85375 11.6472 6.05171 12.1744C6.24966 12.7015 6.55803 13.1803 6.95615 13.5785L7.04399 13.6673ZM6.03799 14.5006C5.52585 13.9884 5.12523 13.3758 4.86133 12.7013C4.59742 12.0268 4.47594 11.3049 4.50453 10.5812C4.53312 9.85747 4.71115 9.14748 5.02743 8.49589C5.34371 7.84429 5.7914 7.26519 6.34234 6.795C6.89328 6.32481 7.53556 5.97371 8.22877 5.76378C8.92198 5.55384 9.65113 5.48962 10.3704 5.57514C11.0896 5.66067 11.7833 5.89409 12.408 6.26074C12.9428 6.57466 13.4171 6.98043 13.8094 7.45862C13.8753 7.53893 13.9388 7.62128 14 7.70558C14.0611 7.62128 14.1247 7.53893 14.1906 7.45862C14.5829 6.98043 15.0571 6.57466 15.592 6.26074C16.2166 5.89409 16.9104 5.66067 17.6296 5.57514C18.3488 5.48962 19.078 5.55384 19.7712 5.76378C20.4644 5.97371 21.1067 6.32481 21.6576 6.795C22.2086 7.26519 22.6563 7.84429 22.9725 8.49589C23.2888 9.14748 23.4669 9.85747 23.4954 10.5812C23.524 11.3049 23.4025 12.0268 23.1386 12.7013C22.8747 13.3758 22.4741 13.9884 21.962 14.5006V14.5016L14 22.4616L6.03799 14.5006ZM22.262 14.6228V14.6259L14 22.8858L5.82587 14.7127C5.28446 14.1713 4.86093 13.5236 4.58195 12.8106C4.30296 12.0975 4.17454 11.3345 4.20476 10.5694C4.23498 9.80428 4.42319 9.05371 4.75755 8.36488C5.0919 7.67605 5.56517 7.06386 6.14759 6.5668C6.73002 6.06975 7.40899 5.69858 8.14181 5.47665C8.87463 5.25472 9.64545 5.18683 10.4058 5.27724C11.1661 5.36766 11.8995 5.61442 12.5599 6.00201C13.1066 6.32292 13.5935 6.73463 14 7.21856C14.4065 6.73463 14.8934 6.32292 15.4401 6.00201C16.1005 5.61442 16.8339 5.36766 17.5942 5.27724C18.3545 5.18683 19.1253 5.25472 19.8582 5.47665C20.591 5.69858 21.27 6.06975 21.8524 6.5668C22.4348 7.06386 22.9081 7.67605 23.2424 8.36488C23.5768 9.05371 23.765 9.80428 23.7952 10.5694C23.8254 11.3345 23.697 12.0975 23.418 12.8106C23.1543 13.4846 22.7615 14.1002 22.262 14.6228Z"
            fill="#FAF6F2"
          />
        </svg>
      );
    case "profile":
      return (
        <svg
          width="28"
          height="32"
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_13212_3245)">
            <path d="M23 23.5V19H6V23.5" stroke="#FAF6F2" stroke-width="1.4" />
            <circle
              cx="14.5"
              cy="10.5"
              r="4.8"
              stroke="#FAF6F2"
              stroke-width="1.4"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_13212_3245"
              x="-4"
              y="0"
              width="36"
              height="36"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_13212_3245"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_13212_3245"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "search":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="13.865"
            cy="13.865"
            rx="7.86499"
            ry="7.86499"
            stroke="#636B78"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.3353 19.7437L22.4188 22.8192"
            stroke="#636B78"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "btn1":
      return (
        <svg
          width="275"
          height="70"
          viewBox="0 0 275 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 17.5V1H259V17.5V26.25V26.8244L259.496 27.1138L273.015 35L259.496 42.8862L259 43.1756V43.75V52.5V69H16V52.5V43.75V43.1756L15.5039 42.8862L1.98463 35L15.5039 27.1138L16 26.8244V26.25V17.5Z"
            fill="#524336"
            stroke="#BB8C5F"
            stroke-width="2"
          />
        </svg>
      );
    case "btn2":
      return (
        <svg
          width="275"
          height="70"
          viewBox="0 0 275 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 17.5V1H259V17.5V26.25V26.8244L259.496 27.1138L273.015 35L259.496 42.8862L259 43.1756V43.75V52.5V69H16V52.5V43.75V43.1756L15.5039 42.8862L1.98463 35L15.5039 27.1138L16 26.8244V26.25V17.5Z"
            fill="#EEEEEE"
            stroke="#BB8C5F"
            stroke-width="2"
          />
        </svg>
      );
  }
};

export default SvgGenerator;
