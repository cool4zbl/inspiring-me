import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { font, palette, size } from 'styled-theme'
import { Block } from 'components'

const DaysWrapper = styled.div`
  flex: ${prop('flex', 3)};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  transition: opacity .5s ease-in-out;
  opacity: ${ifProp('hide', '0', '1')};
`

const InnerWrapper = styled(Block)`
  max-width: 40vw;
  overflow: hidden;
  // max-width: -webkit-min-content;
  // max-width: min-content;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  justify-content: center;
  align-items: stretch;
  border: 3px solid ${palette('white', 0)};
`

const Span = styled.span`
  padding: .2rem;
  flex: 1;
  color: ${ifProp('reverse', palette('white', 2), palette('white', 0))};
  background-color: ${ifProp('reverse', palette('danger', 1), 'transparent')};
  font-weight: 600;
  font-size: ${ifProp('featured', '6em', '1em')};
  font-style: ${ifProp('featured', 'italic', 'normal')};
  font-family: ${ifProp('featured', font('italic'), font('apple'))};
  letter-spacing: ${ifProp('spacing', '.8em', '0')};
`

const DAY_MAP = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_MAP = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]
const parseDate = date => ({
  year: date.getFullYear(),
  month: MONTH_MAP[date.getMonth()],
  date: date.getDate(),
  day: DAY_MAP[date.getDay()],
})

const DaysBadge = ({ time, children, ...props }) => {
  const { month, date, day, year } = parseDate(time)
  return (
    <DaysWrapper {...props}>
      <InnerWrapper>
        <Span featured>
          {date}
        </Span>
        <Span spacing>
          {month.toUpperCase()}
        </Span>
        <Span>
          {year}
        </Span>
        <Span reverse>DAILY INSPIRING</Span>
        {children}
      </InnerWrapper>
    </DaysWrapper>
  )
}

DaysBadge.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.any,
}

export default DaysBadge
