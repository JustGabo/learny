import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-[1.5px] border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full text-xs">
          <Image
            src="/flags/hr.svg"
            alt="Croatian"
            height={28}
            width={32}
            className="mr-2 rounded-md "
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full text-xs">
          <Image
            src="/flags/es.svg"
            alt="Spanish"
            height={28}
            width={32}
            className="mr-2 rounded-md"
          />
          Spanish
        </Button>{" "}
        <Button size="lg" variant="ghost" className="w-full text-xs">
          <Image
            src="/flags/it.svg"
            alt="Italian"
            height={28}
            width={32}
            className="mr-2 rounded-md"
          />
          Italian
        </Button>{" "}
        <Button size="lg" variant="ghost" className="w-full text-xs">
          <Image
            src="/flags/jp.svg"
            alt="Japanese"
            height={28}
            width={32}
            className="mr-2 rounded-md"
          />
          Japanese
        </Button>{" "}
        <Button size="lg" variant="ghost" className="w-full text-xs">
          <Image
            src="/flags/fr.svg"
            alt="French"
            height={28}
            width={32}
            className="mr-2 rounded-md"
          />
          France
        </Button>
      </div>
    </footer>
  );
};
