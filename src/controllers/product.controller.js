import { getAll, create, findOne, update, remove } from "../data/repositories/student.repository.js"

export class ProductController {

    /**
     * Get All Students
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getAllProducts = async (req, res, next) => {
        try {
            const result = await getAll();
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }
    /**
     * Get a specific student
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getProduct = async (req, res, next) => {
        // throw new Error('Chale carnal')
        try {
            const { code } = req.params;
            const result = await findOne(code);
            if (result === undefined || result === null) {
                throw new Error('Product Not Found');
            }
            res.send(result);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Create a student
     * @param {*} req contain the student name
     * @param {*} res 
     * @param {*} next 
     */
    createProduct = async (req, res, next) => {
        try {
            const { code, name, price, stock } = req.body;
            await create({ code, name, price, stock });
            res.status(201).json({ result: 'Created Product' })
        } catch (error) {
            next(error);
        }
    }
    /**
     * Update a student
     * @param {*} req contain student id and name
     * @param {*} res 
     */
    updateProduct = async (req, res, next) => {
        try {
            const { code } = req.params
            const data = req.body;

            const actualProduct = await findOne(code);
            if (actualProduct === null || actualProduct === undefined) {
                throw new Error('Product Not Found');
            }

            const newProduct = {...actualProduct.dataValues, ...data};
            // console.log('JASDNKAS', newProduct);
            const result = await update(newProduct);
            if (result === 0 || result[0] === 0) {
                throw new Error('Failed Update');
            }

            res.status(200).json('Updated Product');
        } catch (error) {
            next(error);
        }
    }

    /**
     * Delete a student
     * @param {*} req contain the student id
     * @param {*} res 
     * @param {*} next 
     */
    DeleteProduct = async (req, res, next) => {
        try {
            const { code } = req.params;
            const result = await remove(code);
            // console.log(result);
            if (result === 0) {
                throw new Error('Failed Delete');
            }
            res.status(200).json({ message: 'Eliminated Product' });
        } catch (error) {
            next(error);
        }
    }
}