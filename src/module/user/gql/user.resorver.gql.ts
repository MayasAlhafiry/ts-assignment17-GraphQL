class userResorverGQL {
    constructor() { }

    getData(parent: any, args: any) {
        let { name, age, email } = args
        let message = `Hello ${name}, your age is ${age} and your email is ${email}`
        return {
            message: message,
        }
    }

    helloWorld() {
        return 'hello world'
    }

    getDataMutation(parent: any, args: any) {
        let { name, age, email } = args
        let message = `Hello ${name}, your age is ${age} and your email is ${email}`
        return {
            message: message,
        }
    }

    helloWorldamutation() {
        return 'hello world'
    }


}

export const GQLresorver = new userResorverGQL()