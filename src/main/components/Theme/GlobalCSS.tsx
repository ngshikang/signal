import { css, Global } from "@emotion/react"
import { useTheme } from "../../hooks/useTheme"

export const GlobalCSS = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
          margin: 0;
        }

        body {
          font-size: 80%;
          -webkit-font-smoothing: subpixel-antialiased;
          color: ${theme.textColor};
          background-color: ${theme.backgroundColor};
          overscroll-behavior: none;
          font-family: ${theme.font};
        }

        #root {
          height: 100%;
        }

        div,
        label,
        button,
        canvas,
        section,
        a,
        p,
        header,
        footer,
        ul,
        li {
          user-select: none;
          -webkit-user-select: none;
          -webkit-user-drag: none;
        }

        /* ScrollBar */

        .ScrollBar {
          background-color: ${theme.backgroundColor};
        }

        .ScrollBar .thumb {
          border: 1px solid ${theme.backgroundColor};
          background: ${theme.secondaryTextColor};
          opacity: 0.2;
        }

        .ScrollBar .thumb:hover {
          opacity: 0.3;
        }

        .ScrollBar .thumb:active {
          opacity: 0.5;
        }

        .ScrollBar .button-backward:active,
        .ScrollBar .button-backward:hover,
        .ScrollBar .button-forward:active,
        .ScrollBar .button-forward:hover {
          background: ${theme.secondaryBackgroundColor};
        }

        .gitter-chat-embed {
          z-index: 10000;
        }

        /* Native Scrollbar */

        &::-webkit-scrollbar {
          width: 12px;
        }

        &::-webkit-scrollbar-track {
          background-color: ${theme.backgroundColor};
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${theme.secondaryBackgroundColor};
          border: 3px solid ${theme.backgroundColor};
          border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.tertiaryTextColor};
        }
      `}
    />
  )
}
