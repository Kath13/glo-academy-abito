import {useParams} from 'react-router';
import {cardArray} from '../constants';
import {ProductInfo} from '../components/ProductInfo/ProductInfo';
import {NotFound} from '../components/NotFound/NotFound';

export const Product = () => {
    const {id} = useParams()
    const product = cardArray.find(item => item.id === +id)

    return (
        <>
            <div className="product-container">
                {product ? <ProductInfo product={product}/> : <NotFound/>}
            </div>
        </>
    )
}