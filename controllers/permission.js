const Permission = require("../models/permission");

exports.createPermission = async (req, res) => {
    try {
        console.log(req.body);

        const permission = await Permission.create(req.body);

        res.status(201).json({
            success: true,
            message: "Permission created successfully",
            data: permission
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};