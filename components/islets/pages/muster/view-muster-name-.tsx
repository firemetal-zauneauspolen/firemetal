"use client";

import { cleanUpMusterName } from "@/lib/functions";

type Props = {
  fileName: string;
};

export function ViewMusterName(props: Props) {
  return (
    <div className="absolute inset-x-0 bottom-0.5 flex items-center justify-center text-neutral-800">
      <div className="cursor-text px-4 font-semibold capitalize">
        {cleanUpMusterName(props.fileName)}
      </div>
    </div>
  );
}
