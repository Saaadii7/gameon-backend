'use strict';

const config = require('../../config');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            user.belongsTo(models.role);
            user.belongsToMany(models.sport, {
                as: 'favouriteSports',
                foreignKey: 'sportId',
                through: 'user_sports'
            });
        }
    }
    user.init({
        address: DataTypes.STRING,
        age: {
            get() {
                const diffTime = Math.abs(
                    new Date() - new Date(this.getDataValue('dob'))
                );

                return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            },
            type: DataTypes.VIRTUAL
        },
        approved: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        banned: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        dob: {
            type: DataTypes.DATE,
            validate: {
                isAfter: '1947-08-14',
                isDate: true 
            }
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                notNull: true 
            }
        },
        first: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: [ 2, 225 ],
                notNull: true 
            }
        },
        gender: DataTypes.STRING,
        id: {
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID
        },
        last: DataTypes.STRING,
        
        lastLogin: DataTypes.DATE,
        
        //virtual
        name: {
            get() {
                return (
                    this.getDataValue('first') +
                        ' ' +
                        this.getDataValue('last')
                );
            },
            type: DataTypes.VIRTUAL
        },
        
        password: {
            type: DataTypes.TEXT
        },
        
        phone: {
            type: DataTypes.STRING,
            validate: {
                len: [ 11, 11 ] 
            }
        },
        
        postalCode: {
            type: DataTypes.INTEGER,
            validate: {
                len: [ 4, 7 ] 
            } 
        },
        
        province: DataTypes.STRING,
        
        rating: {
            defaultValue: 0,
            max: 5,
            min: 0,
            type: DataTypes.INTEGER
        },
        timezone: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: function (user) {
                user.password = crypto
                    .pbkdf2Sync(
                        user.password,
                        config.web.secret,
                        10000,
                        512,
                        'sha512'
                    )
                    .toString('hex');

                return user;
            }
        },
        modelName: 'user',
        paranoid: true,
        sequelize,
        timestamps: true
    });

    //class methods
    user.byId = async id => {
        return await user.findOne({
            where: { id: id }
        });
    };
    user.active = async () => {
        const result = await user.findAll({
            where: {
                deletedAt: null
            }
        });

        if (!result)
            return [];
            
        return result;
    };

    //instance methods
    user.prototype.generateJWT = function() {
        const today = new Date();
        const expirationDate = new Date(today);

        expirationDate.setDate(today.getDate() + parseInt(config.web.session_expiry));

        return jwt.sign(
            {
                exp: parseInt(expirationDate.getTime() / 1000, 10),
                user: {
                    email: this.email,
                    id: this.id,
                    name: this.name
                }
            },
            config.web.secret
        );
    };

    user.prototype.toAuthJSON = function() {
        return {
            email: this.email,
            id: this.id,
            token: this.generateJWT()
        };
    };
    
    user.prototype.authenticate = async function(password) {
        const hash = crypto
            .pbkdf2Sync(password, config.web.secret, 10000, 512, 'sha512')
            .toString('hex');

        return this.password === hash;
    };
    
    return user;
};