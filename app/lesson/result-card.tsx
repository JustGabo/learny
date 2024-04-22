import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  value: number;
  variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {

    const imageSrc = variant === "hearts" ? '/heart.svg' : '/points.svg'

  return (
    <section
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-500 border-orange-500",
        variant === "hearts" && "bg-rose-600 border-rose-600"
      )}
    >
      <article
        className={cn(
          "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
          variant === "hearts" && "bg-rose-600",
          variant === "points" && "bg-orange-500"
        )}
      >
        {variant === "hearts" ? "Hearts Left" : "Total XP"}
      </article>
      <article className={cn("rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
        variant === 'hearts' && "text-rose-600",
        variant === "points" && "text-orange-500"
      )}>
        <Image alt="Icon" src={imageSrc} height={30} width={30} className="mr-1.5" />
        {value}
      </article>
    </section>
  );
};
