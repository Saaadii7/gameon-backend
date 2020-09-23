'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class role extends Model {
        static associate(models) {
            role.hasMany(models.user);
        }
    }
    role.init({
        id: {
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING,
        permissions: DataTypes.HSTORE
    }, {
        modelName: 'role',
        sequelize,
        timestamps: false
    });

    role.admin = async () => {
        const result = await role.findOne({
            where: {
                name: 'Admin'
            }
        });

        if (!result)
            return {};
            
        return result;
    };

    role.player = async () => {
        const result = await role.findOne({
            where: {
                name: 'Player'
            }
        });

        if (!result)
            return {};
            
        return result;
    };

    return role;
};