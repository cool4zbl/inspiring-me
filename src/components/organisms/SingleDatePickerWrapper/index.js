import React from 'react'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes'
import moment from 'moment'
import omit from 'lodash/omit'

import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import './index.css'

const constants = {
  DISPLAY_FORMAT: 'L',
  ISO_FORMAT: 'YYYY-MM-DD',
  ISO_MONTH_FORMAT: 'YYYY-MM',
  START_DATE: 'startDate',
  END_DATE: 'endDate',
  HORIZONTAL_ORIENTATION: 'horizontal',
  VERTICAL_ORIENTATION: 'vertical',
  VERTICAL_SCROLLABLE: 'verticalScrollable',
  ANCHOR_LEFT: 'left',
  ANCHOR_RIGHT: 'right',
  DAY_SIZE: 50,
  BLOCKED_MODIFIER: 'blocked'
}

import { HORIZONTAL_ORIENTATION, ANCHOR_LEFT, DAY_SIZE } from 'constants'

function isSameDay (a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false

  return a.date() === b.date() &&
    a.month() === b.month() &&
    a.year() == b.year()
}

function isBeforeDay (a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false
  const aYear = a.year()
  const aMonth = a.month()

  const bYear = b.year()
  const bMonth = b.month()

  const isSameYear = aYear === bYear
  const isSameMonth = aMonth === bMonth

  if (isSameYear && isSameMonth) return a.date() < b.date()
  if (isSameYear) return aMonth < bMonth
  return aYear < bYear
}

function isSameOrAfter (a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false
  return !isBeforeDay(a, b)
}

function isAfterDay (a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false
  return !isBeforeDay(a, b) && !isSameDay(a, b)
}

function isSameOrBefore (a, b) {
  return !isAfterDay(a, b)
}

function isInRange (a, b, c) {
  return isSameOrAfter(a, b)
    && isSameOrBefore(a, c)
}

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  initialDate: momentPropTypes.momentObj,

  handleDateChange: PropTypes.func

}

const defaultProps = {
  autoFocus: false,
  initialDate: moment(),

  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  customInputIcon: null,

  // calendar presentation and interaction related props
  renderMonth: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: true,
  initialVisibleMonth: null,
  numberOfMonths: 1,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick () {},
  onNextMonthClick () {},

  handleDateChange () {},

  // day presentation and interaction related props
  renderDay: null,
  enableOutsideDays: true,
  isDayBlocked: () => false,
  isOutsideRange: day => {
    return !isInRange(day, moment('2017-03-12'), moment())
  },
  isDayHighlighted: () => {},

  displayFormat: 'MMM D Y',
  monthFormat: 'MMMM YYYY'
}

class SingleDatePickerWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate
    }

    this.onDateChange = this.onDateChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDateChange (date) {
    this.setState({ date })
    this.props.handleDateChange(date)
  }

  onFocusChange ({ focused }) {
    this.setState({ focused })
  }

  render () {
    const { focused, date } = this.state

    // autoFocus and initialDate are helper props for the example wrapper but are not
    // props on the SingleDatePicker itself and thus, have to be omitted.
    const props = omit(this.props, [
      'autoFocus',
      'initialDate',
      'handleDateChange'
    ])

    return (
      <SingleDatePicker
        {...props}
        id='date_input'
        daySize={50}
        date={date}
        focused={focused}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
      />
    )
  }
}

SingleDatePickerWrapper.propTypes = propTypes
SingleDatePickerWrapper.defaultProps = defaultProps

export default SingleDatePickerWrapper
