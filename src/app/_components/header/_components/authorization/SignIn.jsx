import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image';
import SignUp from './SignUp';
import Modal from '@/src/components/ui/Modal';
import Button from '@/src/components/ui/Button';
import FacebookIcon from '@public/socialMediaIcons/colorfullFacebookIcon.svg';
import GoogleIcon from '@public/socialMediaIcons/googleIcon.svg';
import ForgotPassword from './ForgotPassword';
import { useRouter } from 'next/navigation';

const SignIn = ({ onClose }) => {
  const [showForgot, setShowForgot] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/signin`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.data.token) {
          const token = response.data.token.slice(7);
          localStorage.setItem('accessToken', token);
          router.push('/mygarden');
        }
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
        setError('root', {
          message: error.response.data.message,
        });
        throw new Error('Registration failed');
      });
  };

  const handleSignInWithGoogle = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_AUTH_URL}/signInWithGoogle`)
      .then((response) => {
        console.log(response);
        const result = response.data.substring(12);
        console.log(result);
        router.push(result);
      });
  };

  return (
    <>
      {showForm && !showForgot && (
        <Modal onClose={onClose} className='max-w-[448px] py-11 px-16'>
          <div className='flex flex-col'>
            <div className='flex'>
              <button
                className={`center py-4 font-medium text-sm ${showForm
                    ? 'border-b-2 border-b-[#68bb59] text-[#68bb59]'
                    : 'text-[#808080]'
                  } w-[160px] tracking-widest`}
                onClick={() => setShowForm(!showForm)}
              >
                SIGN IN
              </button>
              <button
                className={`center py-4 font-medium text-sm ${!showForm
                    ? 'border-b-2 border-b-[#68bb59] text-[#68bb59]'
                    : 'text-[#808080]'
                  } w-[160px] tracking-widest`}
                onClick={() => setShowForm(!showForm)}
              >
                SIGN UP
              </button>
            </div>
            <form
              className='mt-8'
              autoComplete='off'
              onSubmit={handleSubmit(handleSignIn)}
            >
              <div className='relative'>
                <div className='flex flex-col gap-4'>
                  <div>
                    <p
                      className={`absolute left-4 px-[5px] bg-white ${errors.email || errors.root
                          ? 'text-[#C31031]'
                          : 'text-[#808080]'
                        } text-xs`}
                    >
                      Email
                    </p>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      })}
                      type='email'
                      className={`w-full mt-2 border ${errors.email || errors.root
                          ? 'border-[#C31031]'
                          : 'border-[#808080]'
                        } px-5 rounded-md h-[54px] text-black text-sm outline-none`}
                    />
                    {errors.email && (
                      <p className='text-[#C31031] text-xs mt-[5px]'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <p
                      className={`absolute left-4 px-[5px] bg-white ${errors.password || errors.root
                          ? 'text-[#C31031]'
                          : 'text-[#808080]'
                        } text-xs`}
                    >
                      Password
                    </p>
                    <input
                      {...register('password', {
                        required: 'Password is required',
                        // minLength: {
                        //   value: 6,
                        //   message: "Password must have at least 8 characters",
                        // },
                      })}
                      type='password'
                      className={`w-full mt-2 border ${errors.password || errors.root
                          ? 'border-[#C31031]'
                          : 'border-[#808080]'
                        } px-5 rounded-md h-[54px] text-black text-sm outline-none`}
                    />
                    {errors.password && (
                      <p className='text-[#C31031] text-xs mt-[5px]'>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                {errors.root && (
                  <p className='text-[#C31031] text-xs mt-[5px]'>
                    {errors.root.message}
                  </p>
                )}
                <Button
                  type='submit'
                  className='w-full mt-6 h-[54px] text-white bg-[#68bb59] font-medium'
                // disabled={isSubmitting}
                >
                  Sign In
                </Button>
                <button
                  className='text-sm font-normal text-black opacity-60 mt-5'
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForgot(!showForgot);
                  }}
                >
                  Forgot Password ?
                </button>
              </div>
              <div className='flex items-center justify-between mt-5'>
                <div className='border border-[#bfbfbf] w-[43%] h-[1.5px]'></div>
                <p className='text-[#bfbfbf] text-sm'>Or</p>
                <div className='border border-[#bfbfbf] w-[43%] h-[1.5px]'></div>
              </div>
              <div className='flex flex-col gap-5 mt-5'>
                <div className='center rounded-md py-[14px] gap-4 border border-[#808080] text-[#808080]'>
                  <Image src={FacebookIcon} alt='' />
                  Sign in with Facebook
                </div>
                <div
                  onClick={handleSignInWithGoogle}
                  className='center rounded-md py-[14px] gap-4 border border-[#808080] text-[#808080]'
                >
                  <Image src={GoogleIcon} alt='' />
                  Sign in with Google
                </div>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {!showForm && <SignUp onClose={onClose} />}
      {showForgot && <ForgotPassword onClose={onClose} />}
    </>
  );
};

export default SignIn;
