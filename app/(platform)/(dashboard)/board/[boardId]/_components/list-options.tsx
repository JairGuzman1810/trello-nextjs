"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { List } from "@prisma/client";
import { MoreHorizontal, X } from "lucide-react";

interface ListOptionsProps {
  onAddCard: () => void;
  data: List;
}
export const ListOptions = ({ onAddCard, data }: ListOptionsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 py-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          List actions
        </div>
      </PopoverContent>
      <PopoverClose asChild>
        <Button className="h-auto w-auto pb-2 absolute top-2 rig-2 text-neutral-600">
          <X className="h-4 w-4" />
        </Button>
      </PopoverClose>
    </Popover>
  );
};
