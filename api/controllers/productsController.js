const Products = require('../models/productsModel');

// controller function for listing the products
module.exports.list = async function(req,res){
    try {
        let products = await Products.find({});
        return res.json(200, {
            message: "product listed successfully",
            products: products
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//controller function for creating the product
module.exports.create = async function(req, res) {
    try {
        var new_product = await new Products(req.body);
        let product = await  new_product.save();
        return res.json(200,{
            message: "product created successfully",
            product: product
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};

//controller function for deleting the product
module.exports.delete = function(req, res) {

    Products.remove({
      _id: req.params.id
    }, function(err, product) {
      if (err)
        return res.send(err);
      return res.json({ message: 'Product successfully deleted' });
    });
};

//controller function for updating the products, a sample function
module.exports.update = function(req, res, query) {
    Products.findOneAndUpdate({_id: req.params.id}, {new: true}, function(err, product) {
        // Product found. Update  the quantity.
        product.quantity = Number(product.quantity) + Number(req.query.number);
        product.save(function (error, product) {
            if (error) {
              console.log(error);
            //   return res.send('Device update failed', error);
            }
            console.log('save was successful ? => \n', product);
            // return res.send(error, product);
          });
      if (err)
        res.send(err);
        return res.json(200,{
            message: "product updated successfully",
            product: product
        });
    });
  };