export const datefunc = (req, res, next) => {
    const timestamp = Date.now();
    const DateObject = new Date(timestamp);
    console.log(DateObject.toISOString());
    next();
};

export const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;

    res.status(status).send({
        error: err.message || "Internal Server Error"
    });
};