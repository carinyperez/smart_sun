const router = require('express').Router();
const {getCurrentUser, updateUserAvatar} = require('../controllers/users')

router.patch('/me/avatar', updateUserAvatar);
router.get('/me', getCurrentUser);

module.exports = router