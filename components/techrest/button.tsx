import Image from "next/image";
import React from "react";

import pen from "../../assets/icons/pen.svg";

interface ButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "outline"
    | "deactivated"
    | "ghost"
    | "link";

  primaryStyle?: string;
  secondaryStyle?: string;
  outlineStyle?: string;
  deactivatedStyle?: string;
  ghostStyle?: string;
  linkStyle?: string;

  text?: string;
  textStyle?: string;

  icon?: boolean;
  iconPosition?: "left" | "right";
  iconSrc?: any;
}

export default function Button({
  variant = "primary",
  primaryStyle,
  secondaryStyle,
  outlineStyle,
  deactivatedStyle,
  ghostStyle,
  linkStyle,
  text = "Botão sem conteúdo",
  textStyle,
  icon = false,
  iconPosition = "left",
  iconSrc = pen,
}: ButtonProps) {
  return (
    <React.Fragment>
      {(variant === "primary" && (
        <button
          className={`px-4 py-3 min-w-[22.3125rem] h-auto rounded-lg bg-white hover:bg-white/80 transition-all duration-200 ${primaryStyle}`}
        >
          {icon === true ? (
            <React.Fragment>
              {iconPosition === "left" ? (
                <div className="flex justify-center items-center gap-2">
                  <Image src={iconSrc} alt="Icon" className="w-5 h-5" />
                  <span
                    className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
                  >
                    {text}
                  </span>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <span
                    className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
                  >
                    {text}
                  </span>
                  <Image src={iconSrc} alt="Icon" className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ) : (
            <div>
              <span
                className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
              >
                {text}
              </span>
            </div>
          )}
        </button>
      )) ||
        (variant === "secondary" && (
          <button
            className={`px-4 py-3 min-w-[22.3125rem] h-auto rounded-lg bg-sunset-500 hover:bg-sunset-400 transition-all duration-200 ${secondaryStyle}`}
          >
            {icon === true ? (
              <React.Fragment>
                {iconPosition === "left" ? (
                  <div className="flex justify-center items-center gap-2">
                    <Image src={iconSrc} alt="Icon" className="w-5 h-5" />
                    <span
                      className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
                    >
                      {text}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    <span
                      className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
                    >
                      {text}
                    </span>
                    <Image src={iconSrc} alt="Icon" className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            ) : (
              <div>
                <span
                  className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
                >
                  {text}
                </span>
              </div>
            )}
          </button>
        ))}
    </React.Fragment>
  );
}
