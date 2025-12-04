"use client"

import React, { ElementType, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface VideoTextProps {
  src: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  preload?: "auto" | "metadata" | "none"
  text: string[] 
  /**
   * Font size in vw (viewport width) or px. 
   * Lower this value to reduce vertical space.
   */
  fontSize?: string | number
  fontWeight?: string | number
  fontFamily?: string
  /**
   * Spacing between lines. Lower = tighter vertical space.
   * @default 1.0
   */
  lineHeight?: number 
  /**
   * Text alignment options
   */
  align?: "left" | "center" | "right"
  as?: ElementType
}

export function VideoText({
  src,
  text, 
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 10, // Reduced default size to save space
  fontWeight = "bold",
  fontFamily = "sans-serif",
  lineHeight = 2.0, // Tighter spacing
  align = "center", // Default alignment
  as: Component = "div",
}: VideoTextProps) {
  const [svgMask, setSvgMask] = useState("")

  useEffect(() => {
    const updateSvgMask = () => {
      const responsiveFontSize = typeof fontSize === "number" ? `${fontSize}vw` : fontSize
      
      // ALIGNMENT LOGIC
      let xPos = "50%"
      let textAnchor = "middle"

      if (align === "left") {
        xPos = "0%"
        textAnchor = "start"
      } else if (align === "right") {
        xPos = "100%"
        textAnchor = "end"
      }

      // VERTICAL CENTER LOGIC
      const totalLines = text.length;
      // We calculate offset to ensure the block of text is centered in the container
      const startDy = -((totalLines - 1) * lineHeight) / 2;

      const tspanString = text.map((line, index) => {
         const dy = index === 0 ? `${startDy}em` : `${lineHeight}em`;
         // Note: x matches the alignment position
         return `<tspan x='${xPos}' dy='${dy}'>${line}</tspan>`;
      }).join("");

      const newSvgMask = `
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
          <text 
            x='${xPos}' 
            y='50%' 
            font-size='${responsiveFontSize}' 
            font-weight='${fontWeight}' 
            text-anchor='${textAnchor}' 
            dominant-baseline='middle' 
            font-family='${fontFamily}'
          >
            ${tspanString}
          </text>
        </svg>
      `.replace(/\s+/g, " ").trim(); 

      setSvgMask(newSvgMask)
    }

    updateSvgMask()
    window.addEventListener("resize", updateSvgMask)
    return () => window.removeEventListener("resize", updateSvgMask)
  }, [text, fontSize, fontWeight, fontFamily, lineHeight, align])

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`

  return (
    <Component className={cn(`relative w-full overflow-hidden`, className)}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "left", // Keeps the block centered in the div
          WebkitMaskPosition: "center",
        }}
      >
        <video
          className=""
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source src={src} />
        </video>
      </div>

      {/* SEO Backup */}
      <div className="sr-only">{text.join(" ")}</div>
      
      {/* Invisible Spacer: Controls the actual height of the container */}
      <div 
        className={cn(
            "opacity-0 pointer-events-none whitespace-pre-line w-full",
            align === "left" && "text-left",
            align === "center" && "text-center",
            align === "right" && "text-right"
        )}
        style={{ 
            fontSize: typeof fontSize === 'number' ? `${fontSize}vw` : fontSize, 
            fontWeight, 
            lineHeight,
            fontFamily 
        }}
      >
        {text.join("\n")}
      </div>
    </Component>
  )
}