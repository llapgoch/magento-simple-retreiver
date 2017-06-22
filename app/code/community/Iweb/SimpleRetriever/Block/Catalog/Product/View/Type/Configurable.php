<?php
class Iweb_SimpleRetriever_Block_Catalog_Product_View_Type_Configurable extends Mage_Catalog_Block_Product_View_Type_Configurable
{
    protected function _getAdditionalConfig()
    {
        $products = [];

        foreach($this->getAllowProducts() as $product){
            $products[$product->getId()]['url'] = $product->getProductUrl();
            $products[$product->getId()]['sku'] = $product->getSku();
        }

        $transport = new Varien_Object();
        $transport->setSimpleData($products);

        // Use this to add data to the simple products
        Mage::dispatchEvent('iweb_simpleretriever_simple_data', ["transport" => $transport]);
        $products = $transport->getSimpleData();

       return ['simpleData' => $products];
    }
}