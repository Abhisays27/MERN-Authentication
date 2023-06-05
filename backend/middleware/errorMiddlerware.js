const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
  
    // If Mongoose not found error, set to 404 and change message
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      statusCode = 404;
      message = 'Resource not found';
    }
  
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  export { notFound, errorHandler };





  
//notFound function:
/*This function takes in three parameters: req (request), res (response), and next (a function to call the next middleware or route handler).
It is responsible for handling requests for routes that do not exist or have not been defined.
Inside the function:
It creates a new Error object with a message indicating that the requested URL was not found (Not Found - ${req.originalUrl}).
Sets the response status code to 404, which represents "Not Found".
Calls the next function with the error object, passing it to the next middleware or route handler.
errorHandler function:

This function also takes in four parameters: err (the error object), req (request), res (response), and next (a function to call the next middleware or route handler).
It is responsible for handling errors that occur during the execution of the application.
Inside the function:
It checks the response status code. If the status code is 200 (which means a successful response), it sets the status code to 500. This ensures that errors are properly handled.
It assigns the error message to the message variable.
If the error is a Mongoose "CastError" (usually occurs when an invalid ID is provided), it sets the status code to 404 and changes the message to "Resource not found".
Finally, it sends a JSON response with the appropriate status code and includes the error message. If the application is running in production mode (process.env.NODE_ENV === 'production'), it does not include the error stack trace for security reasons.
These middleware functions can be used in an Express application to handle situations where routes are not found or errors occur during the request processing. The notFound middleware is typically placed at the end of the middleware chain, so if no other routes or middleware match the request, it will handle the "Not Found" case. The errorHandler middleware can be used to handle any errors that occur in the application and provide appropriate error responses to the client.*/