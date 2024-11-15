import { ReferralIcon } from "@/assets/icons/ReferralIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import { ShareSocial } from "react-share-social";

export const ReferralModal = ({ referralCode }: Props) => {
  const appUrl = String(process.env.NEXT_PUBLIC_BASE_URL);
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      "I use Mtrackr for records keeping  and earn high interests on my referral. Join me on Mtrackr  and get ₦2000 on referral!"
    );
    const url = encodeURIComponent(appUrl);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Use `whatsapp://send` for mobile devices
      window.location.href = `whatsapp://send?text=${message} ${url}`;
    } else {
      // Use `https://wa.me` for desktop as a fallback
      window.open(`https://wa.me/?text=${message}%20${url}`, "_blank");
    }
  };

  const style = {
    root: {
      padding: "0px",
      color: "#fff",
    },
    copyContainer: {
      border: "1px solid #fff",
      // background: "#246BFD",
      color: "green",
    },
    title: {
      color: "#3E3E4C",
      fontSize: "16px",
      fontFamily: "Inter",
    },
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="flex justify-between items-center py-2"
        >
          <p className="flex items-center gap-2 text-primary font-medium text-sm">
            <ReferralIcon /> Invite friends now
          </p>
          <ChevronRight
            color="#246BFD"
            fontSize={18}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <ShareSocial
            url={`${appUrl}/register?referralCode=${referralCode}`}
            socialTypes={[
              "whatsapp",
              "facebook",
              "twitter",
              "reddit",
              "linkedin",
            ]}
            title="I use Mtrackr for records keeping  and earn high interests on my referral. Join me on Mtrackr  and get ₦2000 on referral!
"
            style={style}
            onSocialButtonClicked={(socialType) => {
              if (socialType === "whatsapp") {
                handleWhatsAppShare();
              }
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
interface Props {
  referralCode: string;
}
