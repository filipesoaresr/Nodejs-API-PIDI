const express = require('express');
const {v4: uuid} = require('uuid');
const Promotion = require('../models/Promotion');
const { store } = require('./UserController');


module.exports = {

    async index(request, response) {
        try {
            const promotion = await Promotion.find();
            return response.status(200).json(promotion);
        }
        catch (err) {
            response.status(500).json({ error: err.message })
        }
    },
    
    async store(request, response) {

        const { name, startDate, endDate, discount } = request.body;

        if(!name || !startDate) {
            return response.status(400).json({ error: "Por Favor, informe todos os campos obrigatorios!"})
        }

        const promotion = new Promotion({
            _id: uuid(),
            name,
            startDate,
            endDate,
            discount
        })
        
        try {
            await promotion.save();
            return response.status(201).json({ message: "Payment option saved successfully!" })
        }
        catch(err) {
            response.status(500).json({ error: err.message })
        }
    },

    async update(request, response) {
        const { name, startDate, endDate, discount } = request.body;
        const id = request.params.id;
        
        const promotion = {
            name,
            startDate,
            endDate,
            discount,
        }

        //if(!name) {
            //return response.status(400).json({ error: "Precisa Informar algum campo" });
       // }
        try {
            const updatedPaymentOption = await Promotion.updateOne({_id: id}, promotion)
            return response.status(200).json({ message: "Promoção atualizada com sucesso!"})
        }
        catch (err) {
            response.status(500).json({ error: err.message });
        }

    },

    async delete(request, response) {
        const id = request.params.id;
        const promotion = await Promotion.findOne({_id: id});

        if(!promotion) {
            response.status(422).json({ error: "Forma de pagamento não encontrada!"})
        }

        try {
            await promotion.deleteOne({ _id: id })
            return response.status(200).json({ message: "Promoção deletada com sucesso!!!" })
        }
        catch (err) {
            return response.status(500).json({ error: err.message })
        }
    },

}