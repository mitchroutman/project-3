const jwt = require('jsonwebtoken');
const secret = "supersecrettoken";
const expiration = '5h';

module.exports = {
    authMiddleware: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split('').pop().trim();
        }
        
        if (!token) {
            return res.status(400).json({ message: 'No token' });
        } try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Incorrect token ');
            return res.status(400).json({ message: 'Invalid token '});
        }

        next();
    },
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};