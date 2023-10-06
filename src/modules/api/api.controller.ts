import { Body, Controller, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { User } from 'src/schemas/user.schema';

@Controller('')
export class ApiController {
    constructor(
        private apiService: ApiService
    ){}
    @Post('create-or-get-entry')
    createOrGetEntry (@Body('username') username: string) {
        return this.apiService.createOrGetEntry(username)
    }

    @Post('update-entry')
    updateEntry (@Body('user') user: User) {
        console.log(`inside update entry`)
        return this.apiService.updateEntry(user)
    }
}
