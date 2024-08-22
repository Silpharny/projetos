/*
  Métodos: store, index, show, update, destroy
    - store: Criar uma nova sessão
    - index: Listagem de sessões
    - show: Visualizar uma única sessão
    - update: Atualizar uma sessão
    - destroy: Deletar uma sessão
*/

import User from "../models/User.js"

class SessionController {
  async store(req, res) {
    const { email } = req.body

    let user = await User.findOne({ email })

    if (!user) {
      user = await User.create({ email })
    }

    return res.json(user)
  }
}

export default new SessionController()
