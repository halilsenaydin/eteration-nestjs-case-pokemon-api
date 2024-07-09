import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import ErrorDataResult from 'src/model/errorDataResult';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    handleRequest(err, user, info) {
        if (err || !user) {
            throw new UnauthorizedException(new ErrorDataResult('', null), err);
        }
        return user;
    }
}
