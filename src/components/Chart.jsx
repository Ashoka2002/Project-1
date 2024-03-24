import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const data = [
  { date: 16, xData: 5.0, share: 6 },
  { date: 17, xData: 6.0, share: 15 },
  { date: 18, xData: 6.5, share: 4 },
  { date: 19, xData: 7.0, share: 2 },
  { date: 20, xData: 7.5, share: 6 },
  { date: 21, xData: 8.0, share: 7 },
  { date: 22, xData: 8.5, share: 4 },
];

function setDate(number) {
  return number + " Feb";
}

function ChartComponent() {
  return (
    <Chart>
      <ChartHeading>
        <span>Wow!</span> you&lsquo;re about to reach your targeted band
      </ChartHeading>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis
            dataKey="xData"
            tick={{ fill: "var(--color-grey-900)", fontWeight: "700" }}
            tickLine={{ display: "none" }}
            axisLine={false}
            dy={10}
          />
          <YAxis
            dataKey="date"
            domain={[0, 22]}
            axisLine={false}
            tickLine={false}
            tickCount={8}
            dx={-8}
            tickFormatter={setDate}
          />
          <CartesianGrid />
          <Tooltip />
          <Line
            activeDot={{ r: 8, stroke: "var(--text-span-color)", strokeWidth: 5 }}
            dataKey={"share"}
            stroke="blue"
            strokeWidth="1.5"
            fill="blue"
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </Chart>
  );
}

export default ChartComponent;

const Chart = styled.div`
  grid-column: 1/ 3;
  background-color: var(--color-grey-0);
  border-radius: 10px;
  padding: 1rem 2rem;
  min-width: 40rem;
  display: flex;
  flex-direction: column;

  box-shadow: var(--shadow-md);
  & .recharts-cartesian-grid-horizontal line {
    stroke: var(--color-grey-200);
  }

  & .recharts-cartesian-grid-vertical line {
    display: none;
  }

  @media only screen and (max-width: 52.5em) {
    flex-direction: column-reverse;
    padding-top: 6rem;
  }
`;

const ChartHeading = styled.h4`
  font-size: 1.5rem;
  background-color: var(--background-secondary);
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 10px;

  & > span {
    color: var(--text-span-color);
  }
`;
