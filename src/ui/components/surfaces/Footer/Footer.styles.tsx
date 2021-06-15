import { experimentalStyled as styled, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
`;
export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const AppList = styled("ul")`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing()};

  img {
    width: 122px;
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} {...props} />
))`
  font-weight: bold;
`;
