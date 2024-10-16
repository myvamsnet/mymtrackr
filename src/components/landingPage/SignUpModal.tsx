'use client';
import { CustomInput } from '@/components/CustomInput';
import { Button } from '@/components/ui/button';
import AuthWrapper from '@/components/Auth';
import { inputLists } from '@/constant/auth';
import { useSignUp } from './hook/useSignUp';
import { RegisterAction } from '@/app/actions/RegisterAction';
export const SignUpModal = () => {
  const {
    modal,
    onConfirm,
    onCancel,
    control,
    handleSubmit,
    onSubmit,
    status,
    referralCode,
  } = useSignUp();

  return (
    <AuthWrapper
      isOpen={modal.isOpen && modal.type === 'signUp'}
      onCancel={onCancel}
      onConfirm={onConfirm}
      title="Sign Up"
      subTitle="Already have an account?"
      content="Sign In"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 py-3"
      >
        {inputLists.map((input) => (
          <CustomInput
            key={input.name}
            name={input.name}
            type={input.type}
            label={
              input.type === 'ordinary' && !referralCode ? '' : input.label
            }
            control={control}
            placeholder={input.placeholder}
            value={
              input.type === 'ordinary' && !referralCode ? '' : referralCode
            }
          />
        ))}

        <Button
          type="submit"
          className={`w-full  h-[52px] text-base font-normal ${
            status ? 'opacity-55 cursor-not-allowed' : ''
          }`}
          disabled={status}
        >
          {status ? 'Loading...' : 'Sign Up'}
        </Button>
      </form>
    </AuthWrapper>
  );
};
