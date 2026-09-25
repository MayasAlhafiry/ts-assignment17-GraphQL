class userResorverGQL {
    constructor() { }
    getData(parent, args) {
        let { name, age, email } = args;
        let message = `Hello ${name}, your age is ${age} and your email is ${email}`;
        return {
            message: message,
        };
    }
    helloWorld() {
        return 'hello world';
    }
    getDataMutation(parent, args) {
        let { name, age, email } = args;
        let message = `Hello ${name}, your age is ${age} and your email is ${email}`;
        return {
            message: message,
        };
    }
    helloWorldamutation() {
        return 'hello world';
    }
}
export const GQLresorver = new userResorverGQL();
