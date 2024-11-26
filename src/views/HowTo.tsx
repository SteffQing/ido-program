import { Button } from "@/components/ui/button";
import Image from "next/image";

import Wallet from "@/assets/svg/HowTo/wallet.svg";
import KYC from "@/assets/svg/HowTo/kyc.svg";
import Stake from "@/assets/svg/HowTo/stake.svg";

import SoonPurchase from "@/assets/images/purchase_soon.png";

function HowTo() {
  return (
    <section className="py-6 md:py-12 px-5 md:px-10">
      <Button variant="outline" className="rounded-none bg-secondary border-primary-foreground border-b-0 uppercase">
        HOW TO GET STARTED
      </Button>
      <h4 className="font-inter font-semibold text-2xl md:text-4xl border-t border-b border-primary-foreground py-2 capitalize">
        Here is how to participate in Web3 IDOs with Greendot
      </h4>
      <aside className="mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[url('/checkers.png')] bg-contain bg-top bg-no-repeat px-4 sm:px-6 py-6 sm:py-10 gap-6 sm:gap-10 flex flex-col border border-gradient">
          <div className="flex items-center justify-center flex-1">
            <Image src={Wallet} alt="wallet" />
          </div>
          <div>
            <h5 className="text-xl sm:text-2xl font-semibold font-inter">Purchase $SOON Tokens</h5>
            <p className="text-sm sm:text-lg font-inter font-normal">
              Purchase $SOON tokens from any available exchange to get started
            </p>
          </div>
        </div>
        <div className="px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-10 border border-gradient">
          <div className="flex items-center justify-center flex-1">
            <Image src={Stake} alt="stake or farm soon" />
          </div>
          <div>
            <h5 className="text-xl sm:text-2xl font-semibold font-inter">Stake/Farm your $SOON</h5>
            <p className="text-sm sm:text-lg font-inter font-normal">
              Purchase $SOON tokens from any available exchange to get started
            </p>
          </div>
        </div>
        <div className="bg-[url('/checkers_inverted.png')] bg-contain bg-bottom bg-no-repeat px-4 sm:px-6 py-6 sm:py-10 gap-6 sm:gap-10 flex flex-col border border-gradient">
          <div>
            <h5 className="text-xl sm:text-2xl font-semibold font-inter">Complete your KYC</h5>
            <p className="text-sm sm:text-lg font-inter font-normal">
              Complete your KYC and get verified to be eligible to participate in any IDO
            </p>
          </div>
          <div className="flex items-center justify-center flex-1">
            <Image src={KYC} alt="kyc" />
          </div>
        </div>
      </aside>

      <aside className="flex flex-col sm:flex-row items-center justify-between gap-12 border border-primary-foreground p-4 md:p-7">
        <div className="flex flex-col gap-4 items-start w-full">
          <h6>$SOON tokens can be gotten from a faucet for free</h6>
          <Button variant="outline">Get $SOON</Button>
        </div>

        <div className="flex items-center justify-center">
          <Image src={SoonPurchase} alt="SoonPurchase illustration" className="max-w-[400px] max-sm:w-full" objectFit="cover" />
        </div>
      </aside>
    </section>
  );
}

export default HowTo;
