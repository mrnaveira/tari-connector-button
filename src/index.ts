import { MetaMaskInpageProvider, TariProvider } from '@tari-project/tarijs';
import { TariConnectButton } from './TariConnectButton'
export { TariConnectButton }

declare global {

    interface Window {
      tari: TariProvider;
      ethereum: MetaMaskInpageProvider;
    }
  }