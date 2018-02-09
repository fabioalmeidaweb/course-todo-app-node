const express = require('express')

routes = function(server) {
  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // TODO Routes
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}

module.exports = routes