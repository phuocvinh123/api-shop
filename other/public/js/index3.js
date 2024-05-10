async function addToCart(productId) {
    console.log(productId);
    try {
        const response = await fetch('/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId })
        });

        if (response.ok) {
            console.log('Sản phẩm đã được thêm vào giỏ hàng.');
        } else {
            console.error('Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng.');
        }
    } catch (error) {
        console.error('Lỗi:', error);
    }
}