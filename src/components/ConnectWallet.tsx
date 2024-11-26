"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import WalletIcon from "@/assets/svg/wallet.svg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { formatAddress } from "@/lib/utils";

const styles = {
  backgroundColor: "transparent",
  border: "1px solid #112C19",
  padding: "0.5rem",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
};

export default function ConnectButton() {

  const { connected, publicKey, connecting } = useWallet();


  return (
    <WalletMultiButton style={styles}>
      {connected ? (
        <p className="text-sm md:text-xl text-primary-foreground font-normal font-inter">
          {formatAddress(publicKey?.toBase58() || "")}
        </p>
      ) : (
        <>
          <Image src={WalletIcon} alt="wallet" className="hidden sm:block mr-3" />
          <p className="text-sm md:text-xl text-primary-foreground font-normal font-inter">
            {connecting ? "Connecting..." : "Connect Wallet"}
          </p>
        </>
      )}
    </WalletMultiButton>
  );
}
