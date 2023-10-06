import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class ApiService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async createOrGetEntry (username: string) {
        try {
            const user = await this.userModel.findOne({ username })
            if (!user) { // create if user does not exist
                const newUser = await this.userModel.create({
                    username,
                    dateOfBirth: '',
                    email: '',
                    name: '',
                    phoneNumber: ''
                })
                await newUser.save()
                return {
                    ack: 1,
                    user: newUser
                }
            } else { // get user data if user does exist
                return {
                    ack: 1,
                    user
                }
            }
        } catch (error) {
            return {
                ack: 0,
                message: error.message
            }
        }

    }
    async updateEntry (user: User) {
        try {
            await this.userModel.findOneAndUpdate({ username: user.username }, {
                ...user // destructure user object with spread operator
            })
            return {
                ack: 1
            }
        } catch (error) {
            return {
                ack: 0,
                message: error.message
            }
        }
    }
}
