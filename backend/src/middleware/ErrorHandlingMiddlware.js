import ApiError from "../handlers/ApiError.js";

export default function(err, req, res, next) {
    if(err instanceof ApiError) {
        return    res.status(err.status).json({message: err.message})
    }
}