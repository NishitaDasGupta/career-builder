// use local storage to manage cart data
const addToDb = id => {
    let ApplyCart = getApplyCart();
    // add quantity
    const quantity = ApplyCart[id];
    if (!quantity) {
        ApplyCart[id] = 1;
    }
    localStorage.setItem('Apply-cart', JSON.stringify(ApplyCart));
}

const removeFromDb = id => {
    const ApplyCart = getApplyCart();
    if (id in ApplyCart) {
        delete ApplyCart[id];
        localStorage.setItem('Apply-cart', JSON.stringify(ApplyCart));
    }
}

const getApplyCart = () => {
    let ApplyCart = {};

    //get the Apply cart from local storage
    const storedCart = localStorage.getItem('Apply-cart');
    if (storedCart) {
        ApplyCart = JSON.parse(storedCart);
    }
    return ApplyCart;
}

const deleteApplyCart = () => {
    localStorage.removeItem('Apply-cart');
}

export {
    addToDb,
    removeFromDb,
    getApplyCart,
    deleteApplyCart
}
