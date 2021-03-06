import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import { fetchProductsStart, setProducts } from './products.actions';
import { handleAddProduct, handleDeleteProduct, handleFetchProducts } from './products.helpers';
import productTypes from './products.types';

export function* addProduct({ payload: {
    productCategory,
    productName,
    productThumbnail,
    productPrice
}}) {

    try {
        const timestamp = new Date();

        yield handleAddProduct({
            productCategory,
            productName,
            productThumbnail,
            productPrice,
            productAdminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        });

        yield put(
            fetchProductsStart()
        );

    } catch (err) {
        // console.log(err);
    }

}

export function* onAddProductStart() {
    yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts() {
    try {
        const products = yield handleFetchProducts();

        yield put(
            setProducts(products)
        );

    } catch (err) {
        // console.log(err);
    }
}

export function* onFetchProductsStart() {
    yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
    try {
        yield handleDeleteProduct(payload);
        yield put (
            fetchProductsStart()
        );

    } catch (err) {
        // console.log(err);
    }
}

export function* onDeleteProductStart() {
    yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct);
}

export default function* productsSagas() {
    yield all([
        call(onAddProductStart),
        call(onFetchProductsStart),
        call(onDeleteProductStart)
    ])
}
