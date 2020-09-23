'use strict';

module.exports = {
    down: async (queryInterface) => {
        return Promise.all[
            await queryInterface.dropTable('roles'),
            await queryInterface.removeColumn(
                'users',
                'roleId'
            )
        ];
    },

    up: async (queryInterface, Sequelize) => {
        return Promise.all[
            await queryInterface.createTable('roles', {
                id: {
                    defaultValue: Sequelize.UUIDv4,
                    primaryKey: true,
                    type: 'UUID'
                },
                name: Sequelize.STRING,
                permissions: {
                    type: Sequelize.JSONB
                }
            }),
            await queryInterface.addColumn(
                'users',
                'roleId',
                {
                    allowNull: false,
                    type: Sequelize.UUID
                }
            )
        ];
    }
};
