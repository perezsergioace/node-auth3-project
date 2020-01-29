const db = require('../database/dbconfig');

module.exports = {
    find,
    findBy,
    add,
    findById,
}

function find(department) {
    return db('users')
        .select('id', 'username', 'department')
        .where('department', '=', department);
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}