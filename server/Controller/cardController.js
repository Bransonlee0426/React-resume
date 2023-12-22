const cardModel = require('../Model/cardModel');
const { Result } = require('../Until/MySQL');

exports.handleCards = async (req, res) => {
  let _data = await cardModel.getCard(res);
  return res.send(new Result({ msg: 'success', data: _data }));
};
