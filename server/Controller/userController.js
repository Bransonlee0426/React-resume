const userModel = require('../Model/userModel');
const { Result } = require('../Until/MySQL');

const delay = 800;

exports.handleUser = async (req, res) => {
  let _user = await userModel.getUser(res);
  let _skills = await userModel.getSkills(res);
  let _experience = await userModel.getExperience(res);

  const _user_data = _user
  .filter(item => _skills.some(skill => skill.id === item.id))
  .map(item => ({ 
    ...item, 
    //技能
    skills:_skills.find(skill => skill.id === item.id).name,
    //經歷
    experience: _experience.filter(experience=>experience.user_id === item.id).map((val)=>{
      const _val = {...val}
      delete _val.id;
      return _val
    })
  }));
  // 成功
  return res.send(new Result({ msg: 'success', data: _user_data[0] }));
};

