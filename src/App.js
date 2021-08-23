import {useEffect} from "react";
import {tx} from '@binance-chain/bcw';

const myPrepareParams = {
    "from": "0xFf21ddc5b114a5E4F1ee813180276dDdE7160C73",
    "to": "0xFf21ddc5b114a5E4F1ee813180276dDdE7160C73",
    "value": "0.01",
    "network": {"chainType": "eth", "url": "https://eth-mainnet.raptoken.io"},
    "asset": {
        "networkSymbol": "ETH",
        "contractAddress": "0x0000000000000000000000000000000000000000",
        "decimals": 18,
    }

}

function App() {
    useEffect(() => {
        const f = async () => {
            const {send} = await tx.getGasFees(myPrepareParams)
        }
        f()
    }, [])
    return (
        <div className="App">
        </div>
    );
}

export default App;
