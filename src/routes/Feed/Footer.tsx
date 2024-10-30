import { CONFIG } from "site.config"
import React from "react"
import styled from "@emotion/styled"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
      <div>Logo通过<a href="https://www.designevo.com/cn/" title="免费在线logo制作软件">DesignEvo</a>设计制作</div>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  a {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`
