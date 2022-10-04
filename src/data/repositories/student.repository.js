import { Product } from "../../models/product.js";

/**
 * Get All Students
 * @returns Students Array
 */
const getAll = async () => {
    return await Product.findAll({
        attributes: ["code", "name", "price", "stock", "createdAt", "updatedAt"],
    });
}
/**
 * Get a specific Student
 * @param {String} id 
 * @returns return a Student
 */
const findOne = async (code) => {
    return await Product.findOne({
        where: { code }
    });
}

/**
 * Create a new Student
 * @param {String} name 
 * @returns 
 */
const create = async (data) => {
    const { code, name, price, stock } = data;
    return await Product.create({ code, name, price, stock });
}

/**
 * Update a specific student
 * @param {Number} id 
 * @param {String} name 
 * @returns result
 */
const update = async (newData) => {
    const { code, name , price, stock } = newData;
    return await Product.update(
        {
            name, price, stock
        },
        {
            where: {code}
        }
    );
}

/**
 * Delete a student
 * @param {String} Code 
 * @returns 
 */
const remove = async (code) => {
    return await Product.destroy({
        where: { code }
    })
}

export { getAll, create, update, findOne, remove };