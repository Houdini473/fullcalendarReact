import "./vdom";
import * as React from "react";
import { CalendarOptions, CalendarApi } from "@houdini473/common";
export default class FullCalendar extends React.Component<CalendarOptions> {
  private _calendarApi;
  render(): JSX.Element;
  getApi(): CalendarApi;
}
export * from "@houdini473/common";
