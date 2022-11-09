import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-700 text-gray-100 p-20">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">Difference between SQL and NoSQL.</h3>
                        <p className="mt-1 dark:text-gray-400">SQL: Free and open-source
                            Extremely established database with a huge community, extensive testing, and lots of stability
                            Available for all major platforms
                            Replication and sharding are available
                            Covers a wide range of use cases</p>
                        <p className="mt-1 dark:text-gray-400">NoSQL: Free to use
                            Dynamic schema
                            Horizontally scalable
                            Excellent performance with simple queries
                            Add new columns and fields without impacting your existing rows or the application’s performance</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">What is the difference between javascript and NodeJS?</h3>
                        <p className="mt-1 dark:text-gray-400">Javascript: Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
                        <p className="mt-1 dark:text-gray-400">NodeJS : NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">What is JWT, and how does it work ?</h3>
                        <p className="mt-1 dark:text-gray-400">What is JWT : JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                        <p className="mt-1 dark:text-gray-400">How JWT Works : JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxx45sadgf554ssdxx.yyys5asf88gyy.zz4sasgzzz.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">How does NodeJS handle multiple requests at the same time ?</h3>
                        <p className="mt-1 dark:text-gray-400">NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue. So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next? The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself. If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;