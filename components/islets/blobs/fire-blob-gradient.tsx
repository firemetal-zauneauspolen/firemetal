export function FireBlobGradient({
  size,
  rotate,
  opacity,
  paddingLeft,
  paddingTopSM,
  paddingTop,
}: {
  size?: string;
  rotate?: string;
  opacity?: string;
  paddingLeft?: string;
  paddingTopSM?: string;
  paddingTop?: string;
}) {
  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 ${paddingTop} -z-50 transform-gpu overflow-hidden blur-3xl ${paddingTopSM}`}
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 79.53% 6.79%, 62.78% 26.26%, 58.63% 55.3%, 54.4% 67.31%, 50.18% 55.3%, 45.2% 34.5%, 21.15% 67.31%, 0% 58.65%, 17.9% 100%, 34.81% 74.43%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%)] -z-50 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ed382a] to-[#fcd200] opacity-50 sm:left-[calc(50%)] sm:w-[120.1875rem] sm:opacity-30"
        />
      </div>
    </div>
  );
}
