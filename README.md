## Simple Retriever ##
A simple module for retrieving data for simple propducts, when on a configurable's page

### Backend Events ###
Use this event to add data to the JSON config array, which is passed to the Product.Config object
```
iweb_simpleretriever_simple_data
```

### Javascript Events ###
Events are fired on a jQuery instance of the window.spConfig object

**No simple selected**
```js
$j(window.spConfig).on('simpleretriever_select_none', function(ev){
    // Function code
});
```

**Simple product selected**
```js
$j(window.spConfig).on('simpleretriever_select_simple', function(ev, data){
    // Function code access the data required from the data parameter
});
```