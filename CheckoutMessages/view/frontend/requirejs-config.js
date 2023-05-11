var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/cart-items' : {
                'PersonalProjects_CheckoutMessages/js/view/summary/cart-items-mixin': true
            }
        }
    },
    map: {
        '*': {
            'Magento_Checkout/template/sidebar' : 'PersonalProjects_CheckoutMessages/template/sidebar'
        }
    }
}
