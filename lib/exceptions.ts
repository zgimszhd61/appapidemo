export class AuthRequeireError extends Error{
    constructor (message = "Auth needed"){
        super(message)
        this.name = "AuthRequireError"
    }
}