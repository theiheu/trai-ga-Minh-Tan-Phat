import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon, MessageSquareText, Phone, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function SpeedDialWithTextOutside() {
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  return (
    <div className="fixed end-6 bottom-6 group">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative">
              <HomeIcon className="h-5 w-5" />
              <Typography {...labelProps}>
                <Link to="/">Trang chủ</Link>
              </Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <Phone className="h-5 w-5" />
              <Typography {...labelProps}>
                <Link to="tel:0964077879">Gọi điện</Link>
              </Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <MessageSquareText className="h-5 w-5" />
              <Typography {...labelProps}>Nhắn tin</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
