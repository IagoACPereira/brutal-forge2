const { Router } = require('express');
const GravadoraController = require('../controllers/GravadoraController');
const validaToken = require('../middlewares/validaToken');

const gravadoraRouter = Router();

gravadoraRouter
  .post('/gravadoras/', validaToken, GravadoraController.adicionar)
  .get('/gravadoras/', GravadoraController.exibirTodos)
  .get('/gravadoras/:id/', GravadoraController.exibirUm)
  .put('/gravadoras/:id/', validaToken, GravadoraController.atualizar)
  .delete('/gravadoras/:id/', validaToken, GravadoraController.deletar);
  
module.exports = gravadoraRouter;
