import React from "react";

interface ButtonProps {
  variant:
    | string
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

  width?: string;
  maxWidth?: string;
  minWidth?: string;

  hasText?: boolean;
  text?: string;
  textStyle?: string;

  icon?: boolean;
  iconPosition?: "left" | "right";
  iconSrc?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  primaryStyle,
  secondaryStyle,
  outlineStyle,
  deactivatedStyle,
  ghostStyle,
  linkStyle,
  hasText,
  text = "Sem texto",
  textStyle,
  icon = false,
  iconPosition = "left",
  iconSrc,
  width = "full",
  maxWidth = "22.3125rem",
  minWidth = "22.3125rem",
}: ButtonProps) {
  return (
    <React.Fragment>
      {(variant === "primary" && (
        <button
          className={`px-4 py-3 w-${width} lg:min-w-[${minWidth}] lg:max-w-[${maxWidth}] h-auto rounded-lg 
          bg-white hover:bg-white/80 transition-all duration-200 ${primaryStyle}`}
        >
          {icon === true ? (
            <React.Fragment>
              {iconPosition === "left" ? (
                <div className="flex justify-center items-center gap-2">
                  {iconSrc}
                  {hasText === true ? (
                    <span
                      className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
                    >
                      {text}
                    </span>
                  ) : null}
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  {hasText === true ? (
                    <span
                      className={`text-black-50 text-base font-inter font-semibold ${textStyle}`}
                    >
                      {text}
                    </span>
                  ) : null}
                  {iconSrc}
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
            className={`px-4 py-3 w-${width} lg:min-w-[${minWidth}] lg:max-w-[${maxWidth}] h-auto rounded-lg 
            bg-sunset-500 hover:bg-sunset-400 fill-white text-white transition-all duration-200 ${secondaryStyle}`}
          >
            {icon === true ? (
              <React.Fragment>
                {iconPosition === "left" ? (
                  <div className="flex justify-center items-center gap-2">
                    {iconSrc}
                    {hasText === true ? (
                      <span
                        className={`text-white text-base font-inter font-semibold ${textStyle}`}
                      >
                        {text}
                      </span>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    {hasText === true ? (
                      <span
                        className={`text-white text-base font-inter font-semibold ${textStyle}`}
                      >
                        {text}
                      </span>
                    ) : null}
                    {iconSrc}
                  </div>
                )}
              </React.Fragment>
            ) : (
              <div>
                <span
                  className={`text-white text-base font-inter font-semibold ${textStyle}`}
                >
                  {text}
                </span>
              </div>
            )}
          </button>
        )) ||
        (variant === "outline" && (
          <button
            className={`px-4 py-3 w-${width} lg:min-w-[${minWidth}] lg:max-w-[${maxWidth}] h-auto rounded-lg border-2 bg-transparent
            border-white fill-white text-white hover:bg-white hover:text-black-50 group hover:fill-black-50 transition-all duration-200 ${outlineStyle}`}
          >
            {icon === true ? (
              <React.Fragment>
                {iconPosition === "left" ? (
                  <div className="flex justify-center items-center gap-2">
                    {iconSrc}
                    {hasText === true ? (
                      <span
                        className={`text-white group-hover:text-black-50 group-hover:fill-black-50 text-base font-inter font-semibold ${textStyle}`}
                      >
                        {text}
                      </span>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    {hasText === true ? (
                      <span
                        className={`text-white group-hover:text-black-50 group-hover:fill-black-50 text-base font-inter font-semibold ${textStyle}`}
                      >
                        {text}
                      </span>
                    ) : null}
                    {iconSrc}
                  </div>
                )}
              </React.Fragment>
            ) : (
              <div>
                <span
                  className={`text-white group-hover:text-black-50 group-hover:fill-black-50 text-base font-inter font-semibold ${textStyle}`}
                >
                  {text}
                </span>
              </div>
            )}
          </button>
        )) ||
        (variant === "deactivated" && (
          <button
            className={`cursor-not-allowed px-4 py-3 w-${width} lg:min-w-[${minWidth}] lg:max-w-[${maxWidth}] h-auto rounded-lg border 
            bg-deactivated-50 text-deactivated-100 transition-all duration-200 ${deactivatedStyle}`}
          >
            {icon === true ? (
              <React.Fragment>
                {iconPosition === "left" ? (
                  <div className="flex justify-center items-center gap-2">
                    <span
                      className={`text-deactivated-100 text-base font-inter font-semibold ${textStyle}`}
                    >
                      {text}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    <span
                      className={`text-deactivated-100 text-base font-inter font-semibold ${textStyle}`}
                    >
                      {text}
                    </span>
                  </div>
                )}
              </React.Fragment>
            ) : (
              <div>
                <span
                  className={`text-deactivated-100 text-base font-inter font-semibold ${textStyle}`}
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
