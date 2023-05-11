define([],
    function () {
        'use strict';

        return function (Component){
            return Component.extend({
                defaults: {
                    template: 'PersonalProjects_CheckoutMessages/summary/cart-items',
                    exports: {
                        'totals.subtotal' : 'checkout.sidebar.guarantee:subtotal'
                    }
                },

                isItemsBlockExpanded: function () {
                    //this._super(); //to call this function from parent if you want execute it before execute this function
                    console.log(this.totals);
                    return true;
                }
            });
        }
    });
