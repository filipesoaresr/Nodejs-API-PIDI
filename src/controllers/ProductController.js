const express = require('express');
const {v4: uuid} = require('uuid');
const Product = require('../models/Product');

module.exports = {
    async index(request, response) {
        try {
            const product = await Product.find();
            return response.status(200).json({ product });
        }
        catch(err) {
            response.status(500).json({ error: err.message });
        }
    },
    
    async store(request, response) {
        const {productType, name, colection, pp, p, m, g, gg, dateCreated, value} = request.body;

        if(!name || !productType) {
            return response.status(400).json({ error: "Missing fields..."})
        }

        const product = new Product({
            _id: uuid(),
            productType,
            name,
            colection,
            dateCreated,
            pp,
            p,
            m,
            g,
            gg,
            value
        })
        
        try {
            await product.save();

            return response.status(201).json({ message: "Product saved successfully" })
        }
        catch(err) {
            response.status(500).json({ error: err.message })
        }

    },

    async update(request, response) {
        const { productType, name, colection, pp, p, m, g, gg } = request.body;

        //Talvez retirar depois ao testar com o front
        if(!productType && !name) {
            return response.status(400).json({ error: "Precisa Informar um novo tipo ou nome" });
        }

        //Se houver um title/productType sera atualizado
        if(name) response.product.name = name;
        if(productType) response.product.productType = productType;
        if(colection) response.product.colection = colection;
        if(p) response.product.p = p;
        if(pp) response.product.pp = pp;
        if(m) response.product.m = m;
        if(g) response.product.g = g;
        if(gg) response.product.gg = gg;

        try {
            await response.product.save();
            return response.status(200).json({ message: "Product updated successfully!" })
        }
        catch(err) {
            response.status(500).json({ error: err.message })
        }

    },

    async delete(request, response) {
        
        try {
            await response.product.remove();
            return response.status(200).json({ message: "Product deleted successfully!" })
        }
        catch(err) {
            return response.status(500).json({ error: err.message })
        }
    },
};