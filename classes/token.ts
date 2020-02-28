import jwt, { decode } from 'jsonwebtoken';

export default class Token {
    private static seed: string = 'xx-emilio-@13';
    private static caducidad: string = '30d';
    
    constructor () {}

    static getJwtToken(payload: any ): string {
        return jwt.sign({
            usuario: payload,
        }, this.seed, {expiresIn: this.caducidad});
    }

    static comprobarToke( userToken: string) {
        return new Promise ((resolve, reject) => {
            jwt.verify(userToken, this.seed, (err, decode) => {
                if(err) {
                    reject();
                } else {
                    resolve( decode );
                }
            });
        });
    }
}