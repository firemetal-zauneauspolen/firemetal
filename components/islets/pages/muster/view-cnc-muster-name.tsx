"use client";

type Props = {
  fileName: string;
};

export function ViewCNCMusterName(props: Props) {
  return (
    <div className="flex items-center justify-center text-neutral-800">
      <div className="cursor-text font-semibold text-center leading-4">
        {props.fileName}
      </div>
    </div>
  );
}
