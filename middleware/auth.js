// Check to see is ther is a token and header
const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
config();


module.exports = (req, res, next) => {
    // Get token from header
    const token = req.header('x-auth-token')

    // Check if token doesn't exist
    if(!token)
        return res.status(401).json({ 
            statusCode: 401, 
            message: 'No token, authorization'
        });

    // else... token exists
    try {
        const decode = jwt.verify(token, process.env.SECRET);

        // Assing user to request object
        req.user = decode.user;

        next()
    } catch (error) {
        res.status(401).json({
            statusCode: 401,
            message: 'Token is not valid'
        });
    }
}