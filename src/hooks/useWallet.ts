import { useAccount, useBalance, useConnect, useDisconnect, useReconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useEffect } from 'react';

export function useWallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { reconnect } = useReconnect();
  const { data: balanceData } = useBalance({
    address,
  });

  useEffect(() => {
    reconnect();
  }, [reconnect]);

  const truncateAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const connectWallet = () => {
    try {
      connect({ connector: injected() });
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = () => {
    try {
      disconnect();
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  const formattedBalance = balanceData ? balanceData.formatted.slice(0, 6) : '0.0';

  return {
    address,
    isConnected,
    balance: formattedBalance, 
    truncatedAddress: address ? truncateAddress(address) : '',
    connectWallet,
    disconnectWallet,
    copyAddress,
  };
} 