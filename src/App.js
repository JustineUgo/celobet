import React, { useState, useEffect, useRef } from 'react';


import Header from "./components/Header";
import Banner from "./components/Banner";

import Web3 from 'web3'
import { newKitFromWeb3 } from '@celo/contractkit';
import BigNumber from "bignumber.js";

import NotificationSystem from 'react-notification-system';

import bet from './contracts/abis/bet.abi.json';
import erc20 from './contracts/abis/erc20.abi.json';
import List from './components/List';

const ERC20_DECIMALS = 18;

const contractAddress = "0xAf1A15568015D660A14AFd0cD91cCe2afE6E2998";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";



function App() {
  const [celoBalance, setCeloBalance] = useState(0);
  const [contract, setcontract] = useState(null);
  const [address, setAddress] = useState(null);
  const [kit, setKit] = useState(null);
  const [cUSDBalance, setcUSDBalance] = useState(0);
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [listOfWinners, setListOfWinners] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const notificationSystem = React.createRef();


  const connectCeloWallet = async () => {
    if (window.celo) {
      try {
        const notification = notificationSystem.current;
      notification.addNotification({
        message: 'Setting things up...',
        level: 'info'
      })
        await window.celo.enable();
        // notificationOff()
        const web3 = new Web3(window.celo);
        let kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const user_address = accounts[0];

        kit.defaultAccount = user_address;

        await setAddress(user_address);


        await setKit(kit);

      } catch (error) {
        console.log('There is an error')
        console.log({ error });
        const notification = notificationSystem.current;
        notification.addNotification({
        message: `${error}`,
        level: 'error'
      })
      }
    } else {
      console.log("please install the extension");
      const notification = notificationSystem.current;
      notification.addNotification({
        message: 'Please Install the CeloExtensionWallet',
        level: 'info'
      })
    }
  };

  useEffect(() => {
    connectCeloWallet();    
  }, []);

  useEffect(() => {
    if (kit && address) {
      return getBalance();
    } else {
      console.log("no kit or address");
    }
  }, [kit, address]);

  useEffect(() => {
    if (address && contract) {
      checkIfAdmin(address);
      getListOfPlayersAndWinners();
    };
  }, [address, contract]); 

  // get balance of player
  const getBalance = async () => {
    
    const notification = await notificationSystem.current;
      notification.addNotification({
        message: 'Getting Balance...Please wait',
        level: 'info'
    });
    const balance = await kit.getTotalBalance(address);
    const celoBalance = balance.CELO.shiftedBy(-ERC20_DECIMALS).toFixed(2);
    const USDBalance = balance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);

    const contract = new kit.web3.eth.Contract(bet, contractAddress); 
    setcontract(contract);
    setCeloBalance(celoBalance);
    setcUSDBalance(USDBalance);

  };

  // check if a user is admin and set state
  const checkIfAdmin = async(_address)=>{
    const notification = notificationSystem.current;
      notification.addNotification({
        message: 'Checking If Admin...Please wait',
        level: 'info'
      })
    const truth = await contract.methods.isAdminFunction(_address).call();
    console.log(truth)
    setIsAdmin(truth);
  }

  const getListOfPlayersAndWinners = async()=>{
    const notification = notificationSystem.current;
      notification.addNotification({
        message: 'Getting List of players and winners...Please wait',
        level: 'info'
      });
    const listOfPlayers = await contract.methods.getListOfPlayers().call();
    const listOfWinners = await contract.methods.getListOfWinners().call();

    setListOfPlayers(listOfPlayers);
    setListOfWinners(listOfWinners);
  }

  // makeguess function
  const makeGuess = async (_randomNumber) => {
    const cUSDContract = new kit.web3.eth.Contract(erc20, cUSDContractAddress);
    const cost = new BigNumber(1).shiftedBy(ERC20_DECIMALS).toString();

    console.log(cUSDContract);
    console.log(cost);
    const notification = notificationSystem.current;
    try{
        notification.addNotification({
          message: 'Please wait...',
          level: 'info'
        })
      await cUSDContract.methods
        .approve(contractAddress, cost)
        .send({ from: address });
        
        notification.addNotification({
          message: 'Please wait...',
          level: 'info'
        })
        await contract.methods.makeGuess(_randomNumber).send({ from: address });
      }catch (error) {
        console.log(error.message )
        notification.addNotification({
          message: error.message,
          level: 'error'
        })
      }
    getBalance();
  }

  // function for admin to distribute rewards
  const claimRewards = async ()=>{
    const cUSDContract = new kit.web3.eth.Contract(erc20, cUSDContractAddress);
    const cost = new BigNumber(3).shiftedBy(ERC20_DECIMALS).toString();
    const notification = notificationSystem.current;
      notification.addNotification({
        message: 'Please wait...',
        level: 'info'
      })
    await cUSDContract.methods
    .approve(contractAddress, cost)
    .send({ from: address });
    
      notification.addNotification({
        message: 'Please wait...',
        level: 'info'
      })
  await contract.methods.claimReward().send({ from: address });
  getBalance();
  }

  return (
    <div>
      <Header balance={cUSDBalance} />
      <Banner makeGuess={makeGuess} isAdmin = {isAdmin} listOfWinners = {listOfWinners} claimReward = {claimRewards} />
      <List listOfPlayers = {listOfPlayers} listOfWinners = {listOfWinners} />
      <NotificationSystem ref={notificationSystem} />
    </div>
  );
}

export default App;
