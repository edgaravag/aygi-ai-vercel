import { useState } from 'react';
import Modal from '@/src/components/ui/Modal';
import Button from '@/src/components/ui/Button';
import axiosInstance from '@/src/utils/axiosInstance';
import axios from 'axios';

const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const handleClose = () => {
    onClose();
  };

  const handleChangePassword = () => {
    if (email.includes('+')) {
      setEmail(email.replace('+', '%2B'));
    } else if (email.includes('@')) {
      setEmail(email.replace('@', '%40'));
    }
    console.log(email);
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/resetPassword?email=${email}`,
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <Modal onClose={onClose} className='w-[448px] py-16 pb-[294px]'>
        <div className='flex flex-col w-full px-16'>
          <h2 className='text-xl font-medium'>Forgot Password?</h2>
          <p className='text-sm font-normal mt-1'>
            Please, enter your email address
          </p>
          <div className='relative mt-6'>
            <p className='absolute left-4 px-[5px] bg-white text-[#808080] text-xs'>
              Email
            </p>
            <input
              type='email'
              className='w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='flex flex-col gap-3 mt-[38px]'>
            <Button
              className='bg-[#68BB59] text-white w-full py-[14px]'
              onClick={handleChangePassword}
            >
              Reset password
            </Button>
            <Button className='w-full py-[14px] border border-[#808080] text-[#808080]'>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ForgotPassword;
