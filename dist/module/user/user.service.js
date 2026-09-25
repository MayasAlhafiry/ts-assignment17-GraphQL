import { BadRequestException, NotFoundException } from "../../common/error.exceptions.js";
import { compareHash, generateHash } from "../../common/security.js";
import { TokenService } from "../../common/token.servic.js";
import { userModel } from "../../database/models/user.model.js";
class userService {
    tokenService;
    constructor() {
        this.tokenService = new TokenService();
    }
    async signup(data) {
        const encryptedPassword = await generateHash({ plainText: data.password });
        const addedUser = await userModel.create({ ...data, password: encryptedPassword });
        if (addedUser) {
            return addedUser;
        }
        throw new BadRequestException();
    }
    async login(data) {
        const { email, password } = data;
        const user = await userModel.findOne({ email }).select("+password").lean();
        if (!user) {
            throw new NotFoundException("User not found");
        }
        const matchedPassword = await compareHash({ plainText: password, cryptText: user.password });
        if (!matchedPassword) {
            throw new BadRequestException("Incorrect Password");
        }
        const { accessToken, refreshToken } = this.tokenService.generateToken(user);
        return { user, accessToken, refreshToken };
    }
    async getAllUsers() {
        const users = await userModel.find().lean();
        if (users && users.length) {
            return users;
        }
        throw new NotFoundException("No users");
    }
}
export default new userService;
