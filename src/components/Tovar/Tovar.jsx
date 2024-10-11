import s from './Tovar.module.css';

export function Tovar() {
    return (
        <div className={s.tovar}>
            <img src='src/assets/Rectangle 3.png'></img>
            <p className={s.name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
            <div className={s.block}>
                <h3 className={s.price}>335 ₽</h3>
                <button className={s.btn}>Добавить в корзину</button>
            </div>
        </div>
    )
}