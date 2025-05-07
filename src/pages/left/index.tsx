import '../index.css'
import usePriceStore from '../../store/price'
export default function Left() {
    const { incrementPrice,decrementPrice,resetPrice } = usePriceStore();
    return (
        <div className="left">
            <h1>A组件</h1>
            <button onClick={incrementPrice}>增加+1</button>
            <button onClick={decrementPrice}>减少-1</button>
            <button onClick={resetPrice}>重置</button>
        </div>
    )
}
