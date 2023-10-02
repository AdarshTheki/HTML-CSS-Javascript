const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error('Name and email are required');
    }
    
    // const userExist = await User.findOne({ email });
    // if (userExist) {
    //   console.log('User already exist');
    // }

    const user = await User.create({ name, email });

    res.status(200).json({
      success: true,
      message: 'User Create Successfully',
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
