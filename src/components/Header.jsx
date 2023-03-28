import Image from "next/image";

import Button from "./ui/Button";
export default function Hero() {
    const style = {
        backgroundImage: "url(/header.png)",
        position: "absolute",
        top: "0",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        minWidth: "100vw",
        height: "100vh",
    };
    return (
        <header
            style={style}
            className='container flex flex-col items-center justify-center md:flex-row md:space-s-20 space-y-10'
        >
            {/* <svg width="1440" height="745" viewBox="0 0 1440 745" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="1440" height="745" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_279_4816" transform="matrix(0.000569154 0 0 0.00110011 -0.0466725 0)"/>
          </pattern>
          </defs>
        </svg> */}
            <div className='flex flex-col'>
                <p className='text-xl md:text-2xl lg:text-3xl uppercase'>
                    we are here to
                </p>
                <span className='text-3xl md:text-5xl lg:text-9xl uppercase'>
                    help
                </span>
                <Button
                    content='book an appointment'
                    text-transform='uppercase'
                    filled='true'
                    size='large'
                    fontSize='text-lg md:text-xl lg:text-2xl'
                    radius='md'
                />
            </div>
            <div>
                <Image src='/hero.png' width={600} height={500} />
            </div>
        </header>
    );
}
