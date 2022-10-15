import { useEffect, ChangeEvent, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import authStore from '../store/authStore';
import { EMAIL_PETTERN } from '../utils/regEx';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = authStore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('email', email);
        console.log('password', password);
        login({ email, password });
        // navigate('/dashboard');
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

    return (
        <div className='bg-primary w-[100vw] h-[100vh] flex items-center justify-center'>
            <form className='w-[450px] bg-white p-10 rounded-md shadow-xl' onSubmit={onSubmit}>
                <Title className='text-center'>เข้าสู่ระบบ</Title>
                <Input type='text' label='อีเมล' placeholder='' title='email' errorMessage={emailError} full autoComplete='off' onInput={onChangeEmail} />
                <Input type='password' label='รหัสผ่าน' placeholder='' title='password' errorMessage={passwordError} full autoComplete='off' onInput={onChangePassword} />
                <div>ลืมรหัสผ่าน ?</div>
                <Button className='mt-2 text-center' type='submit' full>
                    ลงชื่อเข้าใช้
                </Button>
            </form>
        </div>
    );
};
export default LoginPage;
