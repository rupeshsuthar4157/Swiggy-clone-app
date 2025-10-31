// Image.tsx
"use client";

import clsx from "clsx";
import NextImage, { ImageProps } from "next/image";
import { useState } from "react";

type Props = {
  className?: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  skeletonClassName?: string;
} & Omit<ImageProps, "onLoadingComplete">;

export const Image = ({
  className,
  width,
  height,
  unoptimized = false,
  skeletonClassName,
  ...props
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const hasIntrinsic = typeof width === "number" && typeof height === "number";

  if (hasIntrinsic) {
    return (
      <div
        className={clsx("relative overflow-hidden block", className)}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Enhanced skeleton shimmer with subtle pulse */}
        {!isLoaded && (
          <div
            className={clsx(
              "absolute inset-0 skeleton rounded-lg",
              "before:absolute before:inset-0",
              "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
              skeletonClassName
            )}
          />
        )}

        {/* Actual image with improved transition */}
        <NextImage
          {...props}
          width={width}
          height={height}
          quality={90}
          unoptimized={unoptimized}
          onLoad={() => setIsLoaded(true)}
          className={clsx(
            "absolute inset-0 w-full h-full object-cover rounded-lg",
            "transition-all duration-500 ease-out",
            isLoaded
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-105 blur-sm"
          )}
        />
      </div>
    );
  }

  // Responsive fill layout with improved aspect ratio handling
  return (
    <div
      className={clsx("relative overflow-hidden w-full", className)}
      style={
        width && height
          ? { paddingTop: `${(height / width) * 100}%` }
          : { height: "384px" }
      }
    >
      {!isLoaded && (
        <div
          className={clsx(
            "absolute inset-0 skeleton rounded-lg",
            "before:absolute before:inset-0",
            "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
            skeletonClassName
          )}
        />
      )}

      <NextImage
        {...props}
        fill
        quality={90}
        unoptimized={unoptimized}
        onLoad={() => setIsLoaded(true)}
        className={clsx(
          "object-cover rounded-lg",
          "transition-all duration-500 ease-out",
          isLoaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-105 blur-sm"
        )}
      />
    </div>
  );
};
