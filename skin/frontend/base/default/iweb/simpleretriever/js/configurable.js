;(function($){
    if(Product.Config){
        Product.Config.prototype.configure = Product.Config.prototype.configure.wrap(function(parent, element){
            parent(element);

            var products;

            for(var i=this.settings.length-1;i>=0;i--){
                var selected = this.settings[i].options[this.settings[i].selectedIndex];
                if(!selected.config){
                    return;
                }

                if(!products){
                   products = selected.config.products.slice(0);
                }else{
                    for(var c = 0; c < products.length; c++){
                        if(selected.config.products.indexOf(products[c]) === -1){
                         products.splice(c, 1);
                         c--;
                        }
                    }
                }
            }

            // We should have one simple to work with, which is our selected product
            if(products.length == 1){
                if(this.config.urls[products[0]]){

                }
            }

        });
    }
}(jQuery));