import React from "react";
import { withTranslation } from "next-i18next";
function AuthSocialMedia(prop) {
    const { t, googleLogoOnclick, FbLogoOnClick } = prop;
    const or = "or";

    return (
        <div>
            <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-cyan after:mt-0.5 after:flex-1 after:border-t after:border-cyan'>
                <p className='mx-4 mb-0 text-center font-semibold dark:text-white'>
                    {t(`${or}`)}
                </p>
            </div>
            {/* FaceBook Logo */}
            <div className='flex flex-row items-center justify-center '>
                <button onClick={FbLogoOnClick}>
                    <svg
                        width='50px'
                        height='50px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-4'
                    >
                        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                        <g
                            id='SVGRepo_tracerCarrier'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                            <path
                                d='M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z'
                                fill='#2DD3E3'
                            ></path>
                        </g>
                    </svg>
                </button>
                {/* Google Logo */}
                <button onClick={googleLogoOnclick}>
                    <svg
                        width='50px'
                        height='50px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                        <g
                            id='SVGRepo_tracerCarrier'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                            <path
                                d='M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z'
                                fill='#2DD3E3'
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
}
export default withTranslation("signup")(AuthSocialMedia);
