import { Tovar } from '../Tovar/Tovar';
import s from './Catalog.module.css';

export function Catalog() {
    return (
        <div className="container">
            <div className={s.catalog}>
                <h1 className={s.hh}>Каталог товаров</h1>
                <div className={s.catalogs}>
                    <Tovar />
                    <Tovar />
                    <Tovar />
                    <Tovar />
                    <Tovar />
                    <Tovar />
                </div>
            </div>
        </div>
    )
}