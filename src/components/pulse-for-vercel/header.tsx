"use client";

import { useEffect, useState } from "react";
import ButtonAppStore from "./button-app-store";
import ButtonContact from "./button-contact";

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`transition-shadows outline-100-100 fixed top-0 z-40 flex w-full justify-between px-8 py-5 outline outline-1 outline-stone-200/0 backdrop-blur-xl sm:py-7 ${!top && "bg-zinc-50 shadow-2xl shadow-stone-600/10 outline-stone-200/5 backdrop-opacity-50"}`}
    >
      <a
        href="/"
        className="group flex items-center outline-none delay-75"
        aria-label="Go home"
      >
        <div className="relative mr-3 h-12 w-12 overflow-hidden rounded-xl">
          <svg
            viewBox="0 0 832 832"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_32_334)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M828 256.627C828 246.845 828.004 237.062 827.944 227.279C827.895 219.038 827.8 210.799 827.576 202.562C827.092 184.609 826.033 166.502 822.84 148.749C819.602 130.741 814.314 113.98 805.981 97.6166C797.789 81.5337 787.088 66.8168 774.32 54.0578C761.555 41.2989 746.834 30.6049 730.746 22.4179C714.366 14.0829 697.587 8.79697 679.558 5.55998C661.803 2.37199 643.691 1.315 625.738 0.829997C617.495 0.606998 609.253 0.512998 601.008 0.461998C591.22 0.401999 581.432 0.406999 571.644 0.406999L457.997 0H372.997L261.361 0.406999C251.554 0.406999 241.747 0.401999 231.94 0.461998C223.678 0.512998 215.42 0.606998 207.161 0.829997C189.167 1.315 171.014 2.37299 153.217 5.56498C135.164 8.80097 118.36 14.0849 101.958 22.4139C85.8354 30.6019 71.0825 41.2969 58.2906 54.0578C45.5007 66.8158 34.7798 81.5297 26.5728 97.6096C18.2169 113.981 12.9189 130.752 9.67296 148.77C6.47698 166.516 5.41799 184.617 4.93099 202.562C4.70899 210.8 4.613 219.039 4.563 227.279C4.503 237.063 4 249.216 4 258.999L4.003 369.089L4 454.998L4.508 567.427C4.508 577.223 4.504 587.019 4.563 596.815C4.613 605.067 4.70899 613.317 4.93199 621.566C5.41799 639.542 6.47898 657.675 9.67796 675.452C12.9229 693.484 18.2199 710.269 26.5688 726.653C34.7768 742.759 45.4997 757.495 58.2906 770.272C71.0815 783.049 85.8304 793.757 101.95 801.956C118.362 810.302 135.174 815.595 153.238 818.836C171.027 822.029 189.174 823.088 207.161 823.573C215.42 823.796 223.679 823.891 231.941 823.941C241.748 824.001 251.554 823.997 261.361 823.997L374.006 824H459.217L571.644 823.996C581.432 823.996 591.22 824.001 601.008 823.941C609.253 823.891 617.495 823.796 625.738 823.573C643.698 823.087 661.816 822.027 679.579 818.832C697.597 815.591 714.368 810.3 730.739 801.959C746.831 793.761 761.554 783.051 774.32 770.272C787.086 757.497 797.786 742.763 805.978 726.66C814.316 710.268 819.604 693.475 822.844 675.431C826.034 657.661 827.092 639.535 827.577 621.566C827.8 613.316 827.895 605.066 827.944 596.815C828.005 587.019 828 577.223 828 567.427C828 567.427 827.994 456.983 827.994 454.998V368.999C827.994 367.533 828 256.627 828 256.627Z"
                fill="url(#paint0_linear_32_334)"
              />
            </g>
            <mask
              id="mask0_32_334"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="824"
              height="824"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M828 256.627C828 246.845 828.004 237.062 827.944 227.279C827.895 219.038 827.8 210.799 827.576 202.562C827.092 184.609 826.033 166.502 822.84 148.749C819.602 130.741 814.314 113.98 805.981 97.6166C797.789 81.5337 787.088 66.8168 774.32 54.0578C761.555 41.2989 746.834 30.6049 730.746 22.4179C714.366 14.0829 697.587 8.79697 679.558 5.55998C661.803 2.37199 643.691 1.315 625.738 0.829997C617.495 0.606998 609.253 0.512998 601.008 0.461998C591.22 0.401999 581.432 0.406999 571.644 0.406999L457.997 0H372.997L261.361 0.406999C251.554 0.406999 241.747 0.401999 231.94 0.461998C223.678 0.512998 215.42 0.606998 207.161 0.829997C189.167 1.315 171.014 2.37299 153.217 5.56498C135.164 8.80097 118.36 14.0849 101.958 22.4139C85.8354 30.6019 71.0825 41.2969 58.2906 54.0578C45.5007 66.8158 34.7798 81.5297 26.5728 97.6096C18.2169 113.981 12.9189 130.752 9.67296 148.77C6.47698 166.516 5.41799 184.617 4.93099 202.562C4.70899 210.8 4.613 219.039 4.563 227.279C4.503 237.063 4 249.216 4 258.999L4.003 369.089L4 454.998L4.508 567.427C4.508 577.223 4.504 587.019 4.563 596.815C4.613 605.067 4.70899 613.317 4.93199 621.566C5.41799 639.542 6.47898 657.675 9.67796 675.452C12.9229 693.484 18.2199 710.269 26.5688 726.653C34.7768 742.759 45.4997 757.495 58.2906 770.272C71.0815 783.049 85.8304 793.757 101.95 801.956C118.362 810.302 135.174 815.595 153.238 818.836C171.027 822.029 189.174 823.088 207.161 823.573C215.42 823.796 223.679 823.891 231.941 823.941C241.748 824.001 251.554 823.997 261.361 823.997L374.006 824H459.217L571.644 823.996C581.432 823.996 591.22 824.001 601.008 823.941C609.253 823.891 617.495 823.796 625.738 823.573C643.698 823.087 661.816 822.027 679.579 818.832C697.597 815.591 714.368 810.3 730.739 801.959C746.831 793.761 761.554 783.051 774.32 770.272C787.086 757.497 797.786 742.763 805.978 726.66C814.316 710.268 819.604 693.475 822.844 675.431C826.034 657.661 827.092 639.535 827.577 621.566C827.8 613.316 827.895 605.066 827.944 596.815C828.005 587.019 828 577.223 828 567.427C828 567.427 827.994 456.983 827.994 454.998V368.999C827.994 367.533 828 256.627 828 256.627Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_32_334)">
              <g filter="url(#filter1_d_32_334)">
                <rect
                  x="-54"
                  y="-62"
                  width="914"
                  height="914"
                  fill="url(#paint1_linear_32_334)"
                  shapeRendering="crispEdges"
                />
              </g>
              <g filter="url(#filter2_b_32_334)">
                <rect
                  x="4"
                  width="824"
                  height="824"
                  rx="126"
                  fill="black"
                  fillOpacity="0.01"
                />
              </g>
              <g filter="url(#filter3_iii_32_334)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M828 256.627C828 246.845 828.004 237.062 827.944 227.279C827.895 219.038 827.8 210.799 827.576 202.562C827.092 184.609 826.033 166.502 822.84 148.749C819.602 130.741 814.314 113.98 805.981 97.6166C797.789 81.5337 787.088 66.8168 774.32 54.0578C761.555 41.2989 746.834 30.6049 730.746 22.4179C714.366 14.0829 697.587 8.79697 679.558 5.55998C661.803 2.37199 643.691 1.315 625.738 0.829997C617.495 0.606998 609.253 0.512998 601.008 0.461998C591.22 0.401999 581.432 0.406999 571.644 0.406999L457.997 0H372.997L261.361 0.406999C251.554 0.406999 241.747 0.401999 231.94 0.461998C223.678 0.512998 215.42 0.606998 207.161 0.829997C189.167 1.315 171.014 2.37299 153.217 5.56498C135.164 8.80097 118.36 14.0849 101.958 22.4139C85.8354 30.6019 71.0825 41.2969 58.2906 54.0578C45.5007 66.8158 34.7798 81.5297 26.5728 97.6096C18.2169 113.981 12.9189 130.752 9.67296 148.77C6.47698 166.516 5.41799 184.617 4.93099 202.562C4.70899 210.8 4.613 219.039 4.563 227.279C4.503 237.063 4 249.216 4 258.999L4.003 369.089L4 454.998L4.508 567.427C4.508 577.223 4.504 587.019 4.563 596.815C4.613 605.067 4.70899 613.317 4.93199 621.566C5.41799 639.542 6.47898 657.675 9.67796 675.452C12.9229 693.484 18.2199 710.269 26.5688 726.653C34.7768 742.759 45.4997 757.495 58.2906 770.272C71.0815 783.049 85.8304 793.757 101.95 801.956C118.362 810.302 135.174 815.595 153.238 818.836C171.027 822.029 189.174 823.088 207.161 823.573C215.42 823.796 223.679 823.891 231.941 823.941C241.748 824.001 251.554 823.997 261.361 823.997L374.006 824H459.217L571.644 823.996C581.432 823.996 591.22 824.001 601.008 823.941C609.253 823.891 617.495 823.796 625.738 823.573C643.698 823.087 661.816 822.027 679.579 818.832C697.597 815.591 714.368 810.3 730.739 801.959C746.831 793.761 761.554 783.051 774.32 770.272C787.086 757.497 797.786 742.763 805.978 726.66C814.316 710.268 819.604 693.475 822.844 675.431C826.034 657.661 827.092 639.535 827.577 621.566C827.8 613.316 827.895 605.066 827.944 596.815C828.005 587.019 828 577.223 828 567.427C828 567.427 827.994 456.983 827.994 454.998V368.999C827.994 367.533 828 256.627 828 256.627Z"
                  fill="url(#paint2_linear_32_334)"
                  fillOpacity="0.01"
                />
              </g>
              <g filter="url(#filter4_f_32_334)">
                <path
                  d="M766 546.727C766 665.618 671.505 762 554.943 762C438.381 762 343.89 665.618 343.89 546.727C343.89 427.837 438.381 331.454 554.943 331.454C671.505 331.454 766 427.837 766 546.727Z"
                  fill="#FF0000"
                />
                <path
                  d="M488.111 546.727C488.111 665.618 393.62 762 277.057 762C160.493 762 66 665.618 66 546.727C66 427.837 160.493 331.454 277.057 331.454C393.62 331.454 488.111 427.837 488.111 546.727Z"
                  fill="#F5A623"
                />
                <path
                  d="M602.784 277.273C602.784 396.164 508.293 492.543 391.73 492.543C275.168 492.543 180.673 396.164 180.673 277.273C180.673 158.38 275.168 62 391.73 62C508.293 62 602.784 158.38 602.784 277.273Z"
                  fill="#50E3C2"
                />
              </g>
              <g filter="url(#filter5_d_32_334)">
                <path d="M416 115L691 578.034H141L416 115Z" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_32_334"
                x="0"
                y="0"
                width="832"
                height="832"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_32_334"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_32_334"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_32_334"
                x="-88"
                y="-92"
                width="982"
                height="982"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="30"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_32_334"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_32_334"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_32_334"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_32_334"
                x="-6.87313"
                y="-10.8731"
                width="845.746"
                height="845.746"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="5.43656"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_32_334"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_32_334"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_iii_32_334"
                x="4"
                y="-20"
                width="824"
                height="864"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-20" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_32_334"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="22.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_32_334"
                  result="effect2_innerShadow_32_334"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_32_334"
                  result="effect3_innerShadow_32_334"
                />
              </filter>
              <filter
                id="filter4_f_32_334"
                x="-334"
                y="-338"
                width="1500"
                height="1500"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_32_334"
                />
              </filter>
              <filter
                id="filter5_d_32_334"
                x="141"
                y="115"
                width="570"
                height="483.034"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="10" dy="10" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_32_334"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_32_334"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_32_334"
                x1="-277.14"
                y1="0"
                x2="-277.14"
                y2="1386.28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.489516" stopColor="#EFEFEF" />
                <stop offset="1" stopColor="#C0C0C0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_32_334"
                x1="832.377"
                y1="894.826"
                x2="832.377"
                y2="36.0721"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.75" />
                <stop offset="1" stopColor="white" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_32_334"
                x1="-277.14"
                y1="0"
                x2="-277.14"
                y2="1386.28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.489516" stopColor="#EFEFEF" />
                <stop offset="1" stopColor="#C0C0C0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-2xl font-bold">Pulse</div>
      </a>
      <div className="flex items-center gap-7 delay-75">
        <ButtonContact />
        <ButtonAppStore className="hidden sm:flex" />
      </div>
    </header>
  );
}
