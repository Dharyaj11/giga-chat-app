"use client";
//action components in nav sidebar
import { Plus } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-model-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();
//allows to create new server by clicking plus
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button
          onClick={() => onOpen("createServer")} //opens create server modal 
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            ></Plus>
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
