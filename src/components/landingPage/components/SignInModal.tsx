import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/Auth";
import { signInputLists } from "@/constant/auth";
import { useSignIn } from "../hook/useSignIn";
export const SignInModal = () => {
  const {
    modal,
    onConfirm,
    onCancel,
    control,
    handleSubmit,
    onSubmit,
    isPending,
  } = useSignIn();
  return (
    <AuthWrapper
      isOpen={modal.isOpen && modal.type === "signIn"}
      onCancel={onCancel}
      onConfirm={() => onConfirm("signUp")}
      title="Sign In"
      subTitle="Don't have an account?"
      content="Sign Up"
    >
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4"
      >
        {signInputLists.map((input) => (
          <CustomInput
            key={input.name}
            name={input.name}
            type={input.type}
            label={input.label}
            control={control}
            placeholder={input.placeholder}
          />
        ))}
        <Button
          type="submit"
          className={`w-full  h-[52px] text-base font-normal ${
            isPending ? "opacity-55 cursor-not-allowed" : ""
          }`}
          disabled={isPending ? true : false}
        >
          {isPending ? "Loading..." : "Sign In"}
        </Button>
      </form>
    </AuthWrapper>
  );
};
