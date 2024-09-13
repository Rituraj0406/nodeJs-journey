Problem Statement:

    You need to create a basic Node.js server that handles different HTTP requests and routes, without using any third-party libraries. The server should:
        1.  Display a home page where users can input their username.
        2   .Handle form submissions to create a new user.
        3.  Display a list of users.
        4.  Redirect the user after form submission.
        5.  Respond appropriately when a user navigates to an unknown route.

Overview Of the Solution:

    Server Setup:
        The server is created using Node.js http module.
        Listens on port 3001.

    Routing:
        The root route (/) serves a homepage with a form for creating users.
        The /users route displays a list of predefined users.
        The /create-user route handles the form submission using a POST request.

    Handling User Input:
        The server collects data from the form submission using req.on('data').
        The body data is parsed, and the username is extracted and logged.

    Redirection:
        After form submission, the user is redirected back to the home page.
        
    Error Handling: 
        For all other routes, the server responds with a "Page not found" message.