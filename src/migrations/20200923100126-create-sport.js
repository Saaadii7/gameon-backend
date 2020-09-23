'use strict';

module.exports = {
    down: async (queryInterface) => {
        return Promise.all[
            await queryInterface.dropTable('user_sports'),
            await queryInterface.dropTable('sports')
        ];
    },
    up: async (queryInterface, Sequelize) => {
        return Promise.all[
            await queryInterface.createTable('sports', {
                approved: {
                    defaultValue: false,
                    type: Sequelize.BOOLEAN
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                deletedAt: {
                    allowNull: true,
                    type: Sequelize.DATE
                },
                description: {
                    defaultValue: '',
                    type: Sequelize.TEXT
                },
                extraCount: {
                    defaultValue: 0,
                    type: Sequelize.INTEGER
                },
                extras: {
                    defaultValue: false,
                    type: Sequelize.BOOLEAN
                },
                id: {
                    defaultValue: Sequelize.UUIDv4,
                    primaryKey: true,
                    type: 'UUID'
                },
                name: {
                    type: Sequelize.STRING
                },
                playerCount: {
                    defaultValue: 0,
                    type: Sequelize.INTEGER
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            }),
            await queryInterface.createTable('user_sports', {
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                id: {
                    defaultValue: Sequelize.UUIDv4,
                    primaryKey: true,
                    type: 'UUID'
                },
                sportId: {
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                    references: {
                        key: 'id',
                        model: 'sports'
                    },
                    type: 'UUID'
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                userId: {
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                    references: {
                        key: 'id',
                        model: 'users'
                    },
                    type: 'UUID'
                }
            })
        ];
    }
};