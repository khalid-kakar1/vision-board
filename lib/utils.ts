import { Camera, Color } from "@/types/canvas";
import { clsx, type ClassValue } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatToShortDate(dateString:string) {
  // Parse the ISO date string
  const date = new Date(dateString);

  // Get the components
  const options = {
    weekday: 'short', // Three-letter day (e.g., "Fri")
    day: '2-digit',   // Two-digit day of the month (e.g., "23")
    month: '2-digit', // Two-digit month (e.g., "02")
    year: 'numeric',  // Full year (e.g., "2024")
  };

  // Format the date
  const formattedDate = date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);
  
  // Custom format: `Fri 23, 02, 2024`
  return formattedDate.replace(/, /g, ', ');
}


const COLORS = [
  "#05ffee",
  "#ff052b",
  "#fbff00",
  "#d900ff",
  "#1808ff",
  "#ff0890",
]

export function connectionIdColor(id:number):string{
  return COLORS[id % COLORS.length]
}

export const pointerEventToCameraPointer = (e:React.PointerEvent, cam:Camera)=>{
  return {x: Math.round(e.clientX) - cam.x, y: Math.round(e.clientY) - cam.y}
}

export const colorToCSS = (color: Color):string=>{
  return `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b.toString(16).padStart(2, '0')}`
}