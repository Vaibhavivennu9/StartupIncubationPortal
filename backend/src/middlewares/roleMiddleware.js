const roleMiddleware = (...roles) => {
    return (req, res, next) => {
        console.log("Allowed Roles:", roles);
        console.log("User Role:", req.user.role);
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
           console.log("Allowed Roles:", roles);
        console.log("User Role:", req.user.role); 
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Forbidden"
            });
        }

        next();
    };
};

module.exports = roleMiddleware;