const express = require('express');
const {v4: uuid} = require('uuid');
const User = require('../models/User');


module.exports = {

    async index(request, response) {
        try {
            const user = await User.find();
            return response.status(200).json(user);
        }
        catch (err) {
            response.status(500).json({ error: err.message })
        }
    },

    async store(request, response) {

        const  { name, birthDate, phone, email, cpf, sex, dateCreated, role, login, password } = request.body;

        if(!name || !login || !password || !cpf || !email) {
            return response.status(400).json({ error: "Por Favor, informe todos os campos obrigatorios!"})
        }

        const user = new User({
            _id: uuid(),
            name,
            birthDate,
            phone,
            email,
            cpf,
            sex,
            dateCreated,
            role,
            login,
            password,
        })

        try {
            await user.save();
            return response.status(201).json({ message: "User saved successfully" })
        }
        catch(err) {
            response.status(500).json({ error: err.message })
        }

    },

    async update(request, response) {

        const { name, birthDate, phone, email, cpf, sex, dateCreated, role, login, password } = request.body;
        const id = request.params.id;
        const user = {
            name, birthDate, phone, email, cpf, sex, dateCreated, role, login, password
        }

        //Talvez retirar depois ao testar com o front
        if(!login) {
            return response.status(400).json({ error: "Precisa Informar algum campo" });
        }
       

        try {
            const updatedUser = await User.updateOne({_id: id}, user) 
            return response.status(200).json({ message: "Usuário atualizado com sucesso!"})
        }
        catch (err) {
            response.status(500).json({ error: err.message });
        }

    },

    async delete(request, response) {
        
        const id = request.params.id;
        const user = await User.findOne({_id: id });

        if(!user) {
            response.status(422).json({ error: "Usuário não encontrado!"})
        }
        
        try {
            await User.deleteOne({ _id: id })
            return response.status(200).json({ message: "User deleted successfully!" })
        }
        catch(err) {
            return response.status(500).json({ error: err.message })
        }
    },

};