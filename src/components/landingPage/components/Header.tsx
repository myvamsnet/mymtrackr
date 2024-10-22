import { SignInModal } from './SignInModal';
import useModal from '@/hooks/useModal';
import Image from 'next/image';

export const Header = () => {
  const { onConfirm } = useModal();
  return (
    <>
      <nav className="flex justify-between items-center py-6 sticky top-0 bg-off-white">
        <Image
          src={'/images/logo.svg'}
          alt="logo"
          loading="lazy"
        />
        <ul>
          <li className="border border-primary md:py-3 px-6 py-2  rounded-xl h-[46px] text-primary">
            <button
              onClick={() =>
                onConfirm({
                  type: 'signIn',
                  isOpen: true,
                })
              }
            >
              Sign In
            </button>
          </li>
        </ul>
      </nav>
      <SignInModal />
    </>
  );
};
