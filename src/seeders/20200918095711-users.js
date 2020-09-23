'use strict';

module.exports = {
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', null, {});
    },

    up: async (queryInterface) => {
        await queryInterface.bulkInsert('users', [{
            createdAt: new Date(),
            email: 'super@gameon.com',
            first: 'Admin',
            id: '00000000-0000-0000-0000-100000000000',
            last: 'GameOn',
            password: '176f3cb6d0d89a82aa0b2127c90e5a619163e0a0c784729fdc7847a140ba257e9b2596c8e0907385e9e73b5b95e9783de3ed80fd21a9aed9b597a492fbadb65efee8bb5cdbabda56f8d2c160e9b00355f82ccdfd9bb32d9f690b3a80b749aa17e9aa7a68a88a6d1697d933c4b5e3ace0c30202ce6b54be2d538aa6da554c47979cab6337ea3bd8acd4ddabeb36a6a5b1cafd4733e1488f744ad5a3e99ac0714c738cd6630f474ca0f7c273ead0f44eb571e9e41aa69e94b6e60f3e98ffa1f200befa2e3fe2641161e6c2828cb7c91aa5cfd2d047e46fcab6ec3c7fc608e9d0a88081c6555d4e6b1059326635a767ff6d5d4fcb0969cf5f6d811194a064a213ed7b76fa03d4991238dc2bcc119e9b136a4ced17149e548927630c32cdbf642ce76af3e4591db61784282ab1ee12aabf4b49360f870d34c0c3b9f84f38b5103da02b40c3bdb5a0c7448f03aed710667d449324706a8a302fb2ef020915196753d6a51b08c28a8bf28a934b71ea4ff8ee98ecbbac4805360f679576c4eccc1dd62debb447fe94ad78a5eaaa0e5c4f97ae1f137e10a69b92baf825a5e6d666cc71dc06e621f84f202f9359eaa8f60093be117711b0f9eab1397b3b013959ed341c6d22ccf15e038c493572f87f847926ff19e09906da3aafa53e1d7c7a7bf00076ddb1dd51e6a233011d8381b4b24ffbbdc1031967cfe2f421ef7709e320520921cf',
            roleId: '00000000-0000-0000-0000-000000000000',
            updatedAt: new Date()
        }], {});
    }
};
