const Role = require("../models/role");

exports.createRole = async (req, res) => {
    try {
        const { name, description, permissions } = req.body;

        const existingRole = await Role.findOne({ name });

        if (existingRole) {
            return res.status(400).json({
                message: "Role with this name already exists"
            });
        }

        const newRole = await Role.create({
            name,
            description,
            permissions
        });

        res.status(201).json({
            message: "Role created successfully",
            role: newRole
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.find().populate("permissions");

        res.status(200).json({
            message: "Roles fetched successfully",
            roles
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};