"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import WalletIcon from "@/assets/svg/wallet.svg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const styles = {
  backgroundColor: "transparent",
  border: "1px solid var(--border)",
  padding: "1rem",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

export default function ConnectButton() {
  const formatAddress = (address: string): string => {
    return `${address.slice(0, 4)}…${address.slice(address.length - 4, address.length)}`;
  };

  const { connected, disconnect, publicKey, connecting } = useWallet();


  return (
    <WalletMultiButton style={styles}>
      {connected ? (
        <p className="text-sm md:text-xl text-primary-foreground font-normal font-inter">
          {formatAddress(publicKey?.toBase58() || "")}
        </p>
      ) : (
        <>
          <Image src={WalletIcon} alt="wallet" className="hidden sm:block" />
          <p className="text-sm md:text-xl text-primary-foreground font-normal font-inter">
            {connecting ? "Connecting..." : "Connect Wallet"}
          </p>
        </>
      )}
    </WalletMultiButton>
  );
}
