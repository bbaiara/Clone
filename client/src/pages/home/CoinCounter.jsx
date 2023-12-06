import { FaCoins } from "react-icons/fa6";

export default function CoinCounter(){
    return (
        <div style={{position:'absolute', top:24, right:48}}>
            <div style={{padding:'8px 12px', borderRadius:8, background:'var(--primary)', display:'flex', alignItems:'center', gap:12}}>
                <FaCoins />
                <p>300</p>
            </div>

        </div>
    )
}