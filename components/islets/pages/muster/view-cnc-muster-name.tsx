"use client";

type Props = {
  fileName: string;
};

export function ViewCNCMusterName(props: Props) {
  return (
    <div className="min-w-0 break-all px-4 py-3 text-center font-semibold leading-4 text-neutral-800">
      {props.fileName}
    </div>
  );
}
