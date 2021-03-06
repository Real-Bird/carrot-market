import { cls } from "@libs/client/utils";
import ImgComponent from "@components/img-component";
import RegDate from "@components/regDate";
import Image from "next/image";

interface MessageProps {
  message: string;
  reversed?: boolean;
  name: string;
  avatar?: string | null;
  date?: any;
}

export default function Message({
  message,
  reversed,
  name,
  avatar,
  date,
}: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-start",
        reversed ? "flex-row-reverse space-x-2 space-x-reverse" : "space-x-2"
      )}
    >
      <div>
        {avatar ? (
          <ImgComponent
            imgAdd={`https://imagedelivery.net/D0zOSDPhfEMFCyc4YdUxfQ/${avatar}/avatar`}
            width={32}
            height={32}
            clsProps="rounded-full"
            imgName={name}
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-slate-400" />
        )}
      </div>
      <div
        className={cls(
          "flex w-full flex-col items-start",
          reversed ? "flex-wrap-reverse space-x-0" : "space-x-0"
        )}
      >
        <span className="m-0 text-center text-[8px]">{name}</span>
        <div
          className={cls(
            reversed ? "flex-row-reverse space-x-1" : "space-x-1",
            "flex w-full flex-row items-end justify-start"
          )}
        >
          <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700">
            <p>{message}</p>
          </div>
          {date && (
            <div className={cls("w-fit", reversed ? "px-1" : "")}>
              <RegDate className="text-xs" regDate={date} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
