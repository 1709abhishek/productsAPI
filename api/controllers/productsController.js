const Products = require('../models/productsModel');


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

module.exports.delete = function(req, res) {

    Products.remove({
      _id: req.params.id
    }, function(err, product) {
      if (err)
        return res.send(err);
      return res.json({ message: 'Product successfully deleted' });
    });
};


exports.update = function(req, res) {
    Products.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };