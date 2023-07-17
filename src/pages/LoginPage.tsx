import { ChangeEvent, useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import { useAppDispatch } from '../store';
import { login } from '../store/slices/authSlice';
import { EMAIL_PETTERN } from '../utils/regEx';
import cookie from 'js-cookie';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await dispatch(login({ email, password })).then((res) => {
                const success = res.type === 'auth/login/fulfilled';
                if (success) {
                    navigate('/dashboard');
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        const _email = event.target.value;

        if (EMAIL_PETTERN.test(_email)) {
            console.log('match', _email);
        } else {
            console.log('not match');
        }

        setEmail(_email);
    };
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const _password = event.target.value;

        setPassword(_password);
    };
    const logedin = cookie.get('token');
    useEffect(() => {
        if (logedin) navigate('/dashboard');
    }, [logedin]);

    return (
        <div className='bg-primary w-[100vw] h-[100vh] flex items-center justify-center'>
            <form className='w-[450px] bg-white p-10 rounded-md shadow-xl' onSubmit={onSubmit}>
                <Title className='text-center'>เข้าสู่ระบบ</Title>
                <Input
                    type='text'
                    label='อีเมล'
                    placeholder=''
                    title='email'
                    errorMessage={emailError}
                    full
                    autoComplete='off'
                    onInput={onChangeEmail}
                />
                <Input
                    type='password'
                    label='รหัสผ่าน'
                    placeholder=''
                    title='password'
                    errorMessage={passwordError}
                    full
                    autoComplete='off'
                    onInput={onChangePassword}
                />
                <div>ลืมรหัสผ่าน ?</div>
                <Button className='mt-2 text-center' type='submit' full>
                    ลงชื่อเข้าใช้
                </Button>
                <div className='text-center my-3'>หรือ</div>
                {/* <GoogleAuth /> */}
            </form>
        </div>
    );
};

// const GoogleAuth = () => {
//     const dispatch = useAppDispatch();

//     const clientID = import.meta.env.VITE_OAUTH_CLIENT_ID;

//     useEffect(() => {
//         const initClient = () => {
//             gapi.client.init({
//                 clientId: clientID,
//                 scope: ''
//             });
//         };

//         gapi.load('client:auth2', initClient);
//     }, []);

//     const onSuccess = async (user_data: any) => {
//         console.log('user_data', user_data);

//         const tokenId = user_data.tokenId;
//         await dispatch(loginWithGoogle({ tokenId }));
//     };

//     const onFailure = (error: any) => {
//         console.log('onFailure', error);
//     };

//     return (
//         <GoogleLogin
//             clientId={clientID}
//             buttonText='Sign in with Google'
//             onSuccess={onSuccess}
//             onFailure={onFailure}
//             render={(renderProps) => (
//                 <button className='border bg-gray w-full p-2 rounded' onClick={renderProps.onClick}>
//                     Sign with Google
//                 </button>
//             )}
//         />
//     );
// };

export default LoginPage;
