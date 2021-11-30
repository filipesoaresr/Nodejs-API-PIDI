const express = require('express');
const {v4: uuid} = require('uuid');
const PaymentOption = require('../models/PaymentOptions');

module.exports = {

    async index(request, response) {
        try {
            const paymentOption = await PaymentOption.find();
            return response.status(200).json({paymentOption});
        }
        catch (err) {
            response.status(500).json({ error: err.message })
        }

        
        
    },

    async store(request, response) {

        const { name, flag, installment } = request.body;

        if(!name) {
            return response.status(400).json({ error: "Por Favor, informe todos os campos obrigatorios!"})
        }

        const paymentOption = new PaymentOption({
            _id: uuid(),
            name,
            flag,
            installment
        })
        
        try {
            await paymentOption.save();
            return response.status(201).json({ message: "Payment option saved successfully!" })
        }
        catch(err) {
            response.status(500).json({ error: err.message })
        }
    },

    async update(request, response) {
        const { name, flag, installment } = request.body;
        const id = request.params.id;
        
        const paymentOption = {
            name,
            flag,
            installment,
        }

        if(!name) {
            return response.status(400).json({ error: "Precisa Informar algum campo" });
        }

        try {
            const updatedPaymentOption = await PaymentOption.updateOne({_id: id}, paymentOption)
            return response.status(200).json({ message: "Opção de pagamento atualizada com sucesso!"})
        }
        catch (err) {
            response.status(500).json({ error: err.message });
        }

    },

    async delete(request, response) {
        const id = request.params.id;
        const paymentOption = await PaymentOption.findOne({_id: id});

        if(!paymentOption) {
            response.status(422).json({ error: "Forma de pagamento não encontrado!"})
        }

        try {
            await paymentOption.deleteOne({ _id: id })
            return response.status(200).json({ message: "Forma de pagamento deletada com sucesso!!!" })
        }
        catch (err) {
            return response.status(500).json({ error: err.message })
        }
    },

};