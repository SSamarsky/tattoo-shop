import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__inner}>
        <a className={styles.phone} href="tel:88006006191">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 7.37753L8.30288 5.00627C8.30288 5.00627 8.39654 4.90627 9.00967 5.50499C9.6228 6.10371 11.7383 8.86252 11.7383 8.86252L11.0142 11.8828L16.633 17.4993L19.6524 16.7763L22.9923 19.2441L23.5089 20.2115L21.1375 23.5142L17.5132 23.4803L5.03389 11.0017L5 7.37753Z"
              stroke="#FAF6F2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>8 800 600-61-91</span>
        </a>
        <div className={styles.social}>
          <a
            href="https://web.telegram.org/k/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                d="M8.67357 12.0683L8.33328 17.1664C8.83328 17.1664 9.0542 16.9377 9.33328 16.6664L11.7355 14.3305L16.7333 18.0229C17.653 18.5304 18.3168 18.2676 18.5459 17.169L21.8268 1.70849C22.1627 0.361793 21.3134 -0.249007 20.4335 0.15046L1.16855 7.57896C-0.146468 8.10641 -0.138802 8.84006 0.928848 9.16696L5.87268 10.71L17.3182 3.48918C17.8585 3.16153 18.3544 3.33768 17.9474 3.69891L8.67328 12.0681L8.67357 12.0683Z"
                fill="#BB8C5F"
              />
            </svg>
          </a>
          <a href="https://www.viber.com/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M22.7737 18.4066C22.7298 18.278 22.6273 18.0795 22.5541 17.9656C22.0929 17.2674 19.6149 15.3233 18.3777 14.6875C17.6713 14.3237 17.1479 14.2025 16.7599 14.3163C16.3426 14.434 16.123 14.6287 15.4239 15.4997C15.142 15.8488 14.8529 16.1759 14.776 16.2273C14.5857 16.3596 14.2123 16.4663 13.9488 16.4663C13.3375 16.4625 12.2284 16.0656 11.3756 15.5438C10.7131 15.1396 9.86393 14.4156 9.21236 13.699C8.44366 12.8574 7.92031 12.115 7.50665 11.2771C6.97227 10.2004 6.83684 9.54252 7.06009 9.06108C7.115 8.93982 7.18822 8.81123 7.22112 8.77075C7.25409 8.73405 7.59818 8.45104 7.9788 8.14233C8.72554 7.54702 8.84631 7.41104 8.9854 7.00311C9.16109 6.4849 9.11353 5.95571 8.84267 5.42286C8.63401 5.01859 8.08863 4.1366 7.69334 3.56699C7.16991 2.81732 5.86684 1.21502 5.60692 0.998129C5.13842 0.615967 4.53818 0.549776 3.87561 0.807079C3.17655 1.07903 1.86613 2.13742 1.30609 2.87611C0.800967 3.54494 0.607034 4.019 0.577721 4.64375C0.552117 5.15823 0.596025 5.37138 0.866892 6.02923C2.9862 11.1889 6.14865 15.3086 10.4935 18.5794C12.7628 20.2882 15.1164 21.5892 17.5578 22.4786C18.9816 22.9967 19.6003 23.0224 20.3286 22.5962C20.6361 22.4124 21.3975 21.6296 21.822 21.06C22.5248 20.1118 22.7847 19.6745 22.8579 19.3254C22.9092 19.0865 22.8689 18.6713 22.7737 18.4066Z"
                fill="#BB8C5F"
              />
            </svg>
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.4565 12.0443C24.4539 18.6 19.121 23.9342 12.564 23.9368H12.5591C10.5687 23.9361 8.61291 23.4368 6.87587 22.4893L0.571411 24.1431L2.25859 17.9804C1.21786 16.1768 0.670227 14.131 0.671119 12.0349C0.673728 5.47781 6.00876 0.143066 12.5639 0.143066C15.7453 0.144439 18.7313 1.38295 20.9766 3.63091C23.2219 5.87875 24.4578 8.86668 24.4565 12.0443ZM3.42682 21.3176L7.16797 20.3362L7.52892 20.5504C9.04657 21.451 10.7862 21.9276 12.56 21.9283H12.564C18.0121 21.9283 22.4464 17.4939 22.4485 12.0436C22.4496 9.40232 21.4224 6.91889 19.5561 5.05047C17.6899 3.18206 15.2081 2.1526 12.5679 2.15168C7.11552 2.15168 2.68122 6.58557 2.67906 12.0355C2.67829 13.9033 3.20089 15.7223 4.19036 17.296L4.42538 17.67L3.42682 21.3176Z"
                fill="#BB8C5F"
              />
              <path
                d="M18.3201 15.6156C18.2459 15.4917 18.0478 15.4173 17.7507 15.2685C17.4535 15.1198 15.9926 14.401 15.7201 14.3017C15.4478 14.2026 15.2496 14.1531 15.0515 14.4504C14.8535 14.7479 14.284 15.4173 14.1106 15.6156C13.9373 15.8139 13.7639 15.8388 13.4669 15.69C13.1697 15.5413 12.2122 15.2275 11.0772 14.2151C10.1938 13.4271 9.59744 12.454 9.4241 12.1565C9.25076 11.859 9.40562 11.6983 9.55438 11.5501C9.68808 11.4169 9.85156 11.2029 10.0001 11.0295C10.1487 10.856 10.1982 10.732 10.2973 10.5338C10.3963 10.3354 10.3468 10.1619 10.2725 10.0132C10.1982 9.86443 9.60394 8.40176 9.35632 7.80676C9.11509 7.22732 8.87012 7.30581 8.68773 7.29666C8.5146 7.28796 8.31628 7.28613 8.1182 7.28613C7.92012 7.28613 7.59816 7.36051 7.32579 7.65801C7.05342 7.95551 6.28577 8.67443 6.28577 10.137C6.28577 11.5997 7.35054 13.0127 7.49913 13.211C7.6477 13.4094 9.59449 16.4108 12.5754 17.6979C13.2844 18.0041 13.8379 18.1869 14.2695 18.3239C14.9813 18.5501 15.6291 18.5182 16.1411 18.4416C16.712 18.3563 17.8992 17.7228 18.1469 17.0287C18.3944 16.3345 18.3944 15.7395 18.3201 15.6156Z"
                fill="#BB8C5F"
              />
            </svg>
          </a>
        </div>
      </div>
      <p className={styles.info}>Время работы: с 9:00 до 20:00 по мск</p>
      <a className={styles.mail} href="mailto:Mr.Driskell@mail.ru">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5 3.23408L10.7346 8.49822L10.3137 8.7835L9.89289 8.49822L1.5 2.80873V14.5H18.5V3.23408ZM2.24266 1.5L10.3137 6.97133L18.3848 1.5H2.24266ZM0 0H1.5H18.5H20V1.5V2.11329L20.0483 2.18451L20 2.21724V14.5V16H18.5H1.5H0V14.5V1.5V0Z"
            fill="#FAF6F2"
          />
        </svg>
        <span>Mr.Driskell@mail.ru</span>
      </a>
    </div>
  );
};

export default Contacts;
