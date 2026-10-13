"use client";

type Props = {
  fileName: string;
};

export function ViewMusterName(props: Props) {
  return (
    <div className="min-w-0 break-all px-4 py-3 text-center font-semibold capitalize text-neutral-800">
      {props.fileName}
    </div>
  );
}
