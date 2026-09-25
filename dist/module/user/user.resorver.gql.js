class userResorverGQL {
    constructor() { }
    helloWorld(parent, args) {
        let { name, age, email } = args;
        let message = `Hello ${name}, your age is ${age} and your email is ${email}`;
        return {
            message: message,
        };
    }
}
export const GQLresorver = new userResorverGQL();
