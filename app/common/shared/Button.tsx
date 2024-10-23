"use client";
import React from 'react'

type ClassProps = {
  className?: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, label, icon, onClick }: ClassProps) => {
  return (
    <button
      onClick={onClick}
      className={`xl:px-2 px-1 xl:py-3 py-2 flex justify-center items-center gap-2 rounded-sm text-sm font-semibold text-white bg-app-primary  ${className || ''}`}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default Button