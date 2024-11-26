import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

function Participate() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const getAirdropOnClick = async () => {
    try {
      if (!publicKey) {
        throw new Error("Wallet is not Connected");
      }
      const [latestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL),
      ]);
      const sigResult = await connection.confirmTransaction({ signature, ...latestBlockhash }, "confirmed");
      if (sigResult) {
        alert("Airdrop was confirmed!");
      }
    } catch (err) {
      alert("You are Rate limited for Airdrop");
    }
  };

  return  <div onClick={getAirdropOnClick} className="w-full p-5 bg-[#0C1F11] flex justify-center items-center uppercase border border-primary-foreground text-base md:text-xl font-normal font-inter text-primary-foreground">
  Connect Wallet
  </div>
}


export default Participate