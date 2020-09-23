const _ = require('lodash');

class defaultService {
    constructor(model) {
        this.model = model;
    }

    async create(obj = {}) {
        return await this.model.create(obj);
    }

    async delete(query = {}) {
        const result = await this.model.destroy({ where: query });

        if (!result) 
            throw new Error('User not found');
    }

    async find(condition = {}, single = true, offset = 0, limit = 20) {
        return single
            ? await this.model.findOne({
                where: condition 
            })
            : await this.model.findAll({
                limit,
                offset: offset * (limit + 1),
                where: condition
            });
    }

    async findById(id) {
        return await this.model.byId(id);
    }

    async findWithAssosiations(condition = {}, single = true, associations = []) {
        const currentAssociations = Object.keys(this.model.associations);
        const selectedAssociation = _.intersection( currentAssociations, associations );
        
        const query = {
            include: selectedAssociation,
            where: condition
        };

        return single
            ? await this.model.findOne(query)
            : await this.model.findAll(query);
    }

    async update(obj = {}, query = {}) {
        const updated = await this.model.update(obj, {
            paranoid: true,
            returning: true,
            sideEffects: true,
            validate: true,
            where: query
        });

        if (!updated[1][0]) 
            throw new Error('User not found.');
        
        return updated[1][0];
    }
}

module.exports = defaultService;
