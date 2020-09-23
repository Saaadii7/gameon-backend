'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class sport extends Model {
        static associate(models) {
            sport.belongsToMany(models.user, {
                as: 'followers',
                foreignKey: 'userId',
                through: 'user_sports'
            });
        }
    }
    sport.init({
        approved: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        description: {
            defaultValue: '',
            type: DataTypes.TEXT
        },
        extraCount: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        extras: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        id: {
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            type: DataTypes.STRING
        },
        playerCount: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        }
    }, {
        modelName: 'sport',
        paranoid: true,
        sequelize,
        timestamps: true
    });

    return sport;
};