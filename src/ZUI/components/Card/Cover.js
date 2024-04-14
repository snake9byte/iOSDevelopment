import { CoverUI, CoverFigure, CoverCustomContent } from "./Card.styles";

export const Cover = ({ content }) => {
  const setCover = () => {
    if (typeof content === "string") return (
      <CoverFigure>
        <img src={content} alt="cover" />
      </CoverFigure>
    );
    return (
      <CoverCustomContent>
        {content}
      </CoverCustomContent>
    )
  }
  
  return (
    <CoverUI>{setCover()}</CoverUI>
  )
};