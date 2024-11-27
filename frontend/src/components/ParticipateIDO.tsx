import { PROGRAM_ID, SOON_DEVNET_RPC } from "@/constants";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";

function Participate() {
  const { publicKey, sendTransaction, connect, connected, connecting } = useWallet();
  const programId = new PublicKey(PROGRAM_ID
  );
  const connection = new Connection(SOON_DEVNET_RPC);
  const GREETING_SIZE = 4; // (4 bytes for u32)

  async function sayHello(): Promise<void> {
    try {
      if (!publicKey) {
        alert("Please connect your wallet!");
        return;
      }

      console.log(`Using program ${programId.toBase58()}`);

      // Derive the address (public key) of the greeting account
      const GREETING_SEED = "hello";
      const greetedPubkey = await PublicKey.createWithSeed(publicKey, GREETING_SEED, programId);

      // Check if the greeting account has already been created
      const greetedAccount = await connection.getAccountInfo(greetedPubkey);

      if (greetedAccount === null) {
        console.log("Creating account", greetedPubkey.toBase58(), "to say hello to");

        const lamports = await connection.getMinimumBalanceForRentExemption(GREETING_SIZE);

        const transaction = new Transaction().add(
          SystemProgram.createAccountWithSeed({
            fromPubkey: publicKey,
            basePubkey: publicKey,
            seed: GREETING_SEED,
            newAccountPubkey: greetedPubkey,
            lamports,
            space: GREETING_SIZE,
            programId,
          })
        );

        const signature = await sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, "processed");

        alert("Account created successfully!");
      } else {
        console.log("Greeting account already exists:", greetedPubkey.toBase58());
      }

      // Proceed with saying hello (sending the transaction)
      const instruction = new TransactionInstruction({
        keys: [{ pubkey: greetedPubkey, isSigner: false, isWritable: true }],
        programId,
        data: Buffer.alloc(0), // All instructions are hellos
      });

      const signature = await sendTransaction(new Transaction().add(instruction), connection);
      await connection.confirmTransaction(signature, "processed");

      alert("Hello sent successfully!");
    } catch (error) {
      console.error("Error in sayHello:", error);
      alert("Error occurred while processing.");
    }
  }

  if (!connected)
    return (
      <div
        onClick={connect}
        className="w-full p-5 cursor-pointer bg-[#0C1F11] flex justify-center items-center uppercase border border-primary-foreground text-base md:text-xl font-normal font-inter text-primary-foreground"
      >
        {connecting ? "Connecting..." : "Connect Wallet"}
      </div>
    );

  return (
    <div
      className="w-full p-5 bg-[#0C1F11] cursor-pointer flex justify-center items-center uppercase border border-primary-foreground text-base md:text-xl font-normal font-inter text-primary-foreground"
    >
      Coming Soon
    </div>
  );
}

export default Participate;
