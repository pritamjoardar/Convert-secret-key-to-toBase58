"use client";
import React, { useState } from 'react';
import bs58 from 'bs58';
import { Keypair } from '@solana/web3.js';

const Page = () => {
  const [base58SecretKey, setBase58SecretKey] = useState<string>("");
  const [result, setResult] = useState<Uint8Array>();
  const [wallet, setWallet] = useState<string>();
  const convert = () => {
    try {
      const secretKeyArray = bs58.decode(base58SecretKey);
      const wallet: Keypair = Keypair.fromSecretKey(secretKeyArray);
      setResult(secretKeyArray);
      setWallet(wallet.publicKey.toBase58());
      console.log(wallet.publicKey.toBase58());
      console.log(result);
    } catch (error) {
      console.error("Error converting secret key:", error);
    }
  };

  return (
    <>
    <div className='relative'>
      <span className='text-red-600 font-bold text-xl flex justify-center mt-2 md:text-5xl'>Convert secret key to toBase58</span>
      <span className='flex flex-col justify-center items-center gap-2'>
        <input onChange={(e) => setBase58SecretKey(e.target.value)} className='border p-2 md:w-[40rem]' type="search" name="" id="" placeholder='Enter your wallet secret key' />
        <button onClick={convert} className='bg-gray-400 w-min p-1 rounded-md cursor-pointer'>CONVERT</button>
      </span>
      <div className='flex justify-center mt-2 flex-col items-center'>
        <h1>BS58</h1>
        <textarea className='border text-red-600 w-[20rem] h-[15rem] p-2 md:w-[40rem]' value={`${"["+result+"]"}`} name="" id=""></textarea>
        <h2>toBase58</h2>
        <p className='flex flex-wrap border text-[12px] p-1 md:w-[40rem] justify-center md:text-[20px]'>{wallet}</p>
      </div>
    <div className='flex justify-center text-[12px] mt-2'><p>Make with ❤️ by Pritam Joardar</p></div>
    </div>
    </>
  );
};

export default Page;
