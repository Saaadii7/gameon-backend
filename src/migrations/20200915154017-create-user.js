'use strict';

module.exports = {
    down: async (queryInterface) => {
        await queryInterface.dropTable('users');
    },
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            address: {
                type: Sequelize.STRING
            },
            approved: {
                defaultValue: false,
                type: Sequelize.BOOLEAN
            },
            banned: {
                defaultValue: false,
                type: Sequelize.BOOLEAN
            },
            city: {
                type: Sequelize.STRING
            },
            country: Sequelize.STRING,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            dob: Sequelize.DATE,
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            first: {
                allowNull: false,
                type: Sequelize.STRING
            },
            gender: Sequelize.STRING,
            id: {
                defaultValue: Sequelize.UUIDv4,
                primaryKey: true,
                type: 'UUID'
            },
            last: {
                type: Sequelize.STRING
            },
            lastLogin: Sequelize.DATE,
            password: {
                type: Sequelize.TEXT
            },
            phone: {
                type: Sequelize.STRING
            },
            postalCode: {
                type: Sequelize.INTEGER
            },
            province: {
                type: Sequelize.STRING
            },
            rating: {
                defaultValue: 0,
                max: 5,
                min: 0,
                type: Sequelize.INTEGER
            },
            timezone: {
                type: Sequelize.STRING
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    }
};