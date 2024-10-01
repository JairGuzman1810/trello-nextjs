"use client";

import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";

export const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center gap-x4">
      <div className="w-[60px] h-[60px] relative">
        {organization?.imageUrl ? (
          <Image
            fill
            src={organization.imageUrl}
            alt="Organization"
            className="rounded-md object-cover"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
};
