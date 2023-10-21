import { createSession } from '../auth/createSession';
import { getSession } from '../auth/getSession';
import { signIn } from './signIn';
import { signUp } from './signUp';

export const AuthApi = {
    signIn,
    signUp,
    getSession,
    createSession
};
