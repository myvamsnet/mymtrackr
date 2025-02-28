import { Confetti, ConfettiRef } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import confetti from "canvas-confetti";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const RegisterConfirmation = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  const searchParam = useSearchParams();
  const signup = searchParam.get("signup");
  const { updateQueryParams } = useUpdateQuery();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  useEffect(() => {
    if (signup !== "success" || !canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    const frame = () => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return;

      const particleCount = 50 * (timeLeft / duration);
      myConfetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      myConfetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    return () => {
      myConfetti.reset(); // Clean up confetti
    };
  }, [signup]);

  return (
    <Modal
      title=""
      isOpen={signup === "success"}
      onClose={() => {}}
      showHeading={false}
    >
      <section className="w-[256px] mx-auto space-y-4">
        <div className="relative flex justify-center items-center rounded-[2rem] h-[108px] ">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-lg"
          />
          <Image
            src={"/images/confetti-ball.svg"}
            alt="confetti-ball"
            height={60}
            width={60}
          />
        </div>
        <div className="space-y-4">
          <h4 className="text-center font-semibold text-base leading-[19.36px] text-dark">
            Congratulations!
          </h4>
          <p className="text-center font-medium text-sm leading-[28px] tracking-[-1%] text-[#7A7A84] w-[">
            Welcome to Mtrackr, where we make business management and growth
            easy.
          </p>
        </div>
        <div className="space-y-4">
          <Button
            className="py-[10px] px-[14px] w-full h-[45px] text-sm font-semibold text-[#FCFDFE]"
            onClick={() =>
              updateQueryParams({
                signup: "",
              })
            }
          >
            Start 14-Days Free Trial
          </Button>
          <Link
            href={"/subscription"}
            className="text-primary py-2 text-center flex justify-center items-center"
          >
            Upgrade Account Now
          </Link>
        </div>
      </section>
    </Modal>
  );
};

export default RegisterConfirmation;
