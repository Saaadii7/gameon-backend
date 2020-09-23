'use strict';

module.exports = {
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('roles', null, {});
    },

    up: async (queryInterface) => {
        await queryInterface.bulkInsert('roles', [{
            id: '00000000-0000-0000-0000-000000000000',
            name: 'Admin',
            permissions: JSON.stringify({
                club: ['*'],
                sport: ['*'],
                team: ['*'],
                user: ['*']
            })
        },
        {
            id: '00000000-0000-0000-0000-000000000001',
            name: 'Player',
            permissions: JSON.stringify({
                club: ['read'],
                sport: ['read'],
                team: ['read'],
                user: ['read']
            })
        }], {});
    }
};
