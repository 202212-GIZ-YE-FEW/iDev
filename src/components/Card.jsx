import { withTranslation } from "next-i18next";
import MasterCardSVG from "public/images/master-card.svg";

function Card({ t }) {
    const cards = [
        {
            cardType: "MasterCard",
            logo: MasterCardSVG,
            expireDate: "5/2030",
            name: "John Doe",
            cvv: "12345678901",
        },
        {
            cardType: "Visa",
            logo: MasterCardSVG,
            expireDate: "5/2040",
            name: "Tomas Smith",
            cvv: "23456789012",
        },
        {
            cardType: "MasterCard",
            logo: MasterCardSVG,
            expireDate: "5/2030",
            name: "John Doe",
            cvv: "12345678901",
        },
    ];
    return (
        <></>
        // <>
        //     <div class='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-red-500 to-red-100'>
        //       <div id="card" class="relative w-96 h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500" style={{ transition: '0.6s', transformStyle: 'preserve-3d'}}>
        //         <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr from-gray-900 to-gray-700 transition-all duration-100 delay-200 z-20" style={{ transform: 'rotateY(0deg)' }}>
        //           <div class="flex justify-between items-center">
        //             <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt='Smart card' class="w-12" />
        //             <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="Visa image" class="w-12" />
        //           </div>
        //           <div class="">
        //             <label for="" class="hidden">Card Number</label>
        //             <input type="text" id="" value="**** **** **** ****" readonly
        //                   class="outline-none w-full bg-transparent text-center text-2xl" />
        //           </div>
        //           <div class="w-full flex flex-row justify-between">
        //             <div class="w-full flex flex-col">
        //               <label for="">Card holder</label>
        //               <input type="text" id="" value="Daniel Castillo Guindos" readonly
        //                     class="outline-none bg-transparent" />
        //             </div>
        //             <div class="w-1/4 flex flex-col">
        //               <label for="">Expires</label>
        //               <input type="text" id="" value="12/34" readonly class="outline-none bg-transparent" />
        //             </div>
        //           </div>
        //         </div>
        //         <div class="absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center bg-gradient-to-tr from-gray-900 to-gray-700 transition-all z-10"
        //             style={{ transform: 'rotateY(180deg)' }}>
        //           <div class="w-full h-12 bg-black"></div>
        //           <div class="px-6 flex flex-col gap-6 justify-center">
        //             <div class="flex flex-col items-end">
        //               <label for="">CVV</label>
        //               <input type="text" id="" value="123" readonly
        //                     class="outline-none rounded text-black w-full h-8 text-right"
        //                     style={{ background: 'repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px)' }} />
        //             </div>
        //             <div class="flex justify-start items-center">
        //               <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
        //                   alt="" class="w-12" />
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>

        // </>
    );
}
export default withTranslation("common")(Card);
