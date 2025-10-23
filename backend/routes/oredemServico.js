const express = require('express');
const OS = require('../models/OrdemServico');
const router = express.Router();

router.post('/cadastrar-OS', async(req, res) =>{
    try{
        const { nome, modelo, serie, setor, status, descricao, data } = req.body;
        const novaOS = await OS.create({ nome, modelo, serie, setor, status, descricao, data });
        res.status(201).json(novaOS);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});
router.get('/OS', async(req, res) =>{
    try{
        const os = await OS.find();
        res.json(os);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});
router.get('/id:/OS', async(req, res) =>{
    try{
        const os = await OS.findByID(req.params.id);
        if(!os){
            return res.status(404).json({ message: "Ordem não encontrada."});
        }
        res.json(os);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});
router.delete('/:id/deletar-OS', async(req, res) =>{
    try{
        const os = await OS.findByIdAndDelete(req.params.id);
        if(!os){
            return res.status(404).json({ message: "Ordem não encontrada."});
        }
        res.json({ message: "Ordem deletada com sucesso!" });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;