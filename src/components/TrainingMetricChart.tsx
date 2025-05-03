
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DataPoint {
  name: number | string;
  [key: string]: number | string;
}

interface TrainingMetricChartProps {
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: DataPoint[];
  lines: {
    key: string;
    color: string;
    name: string;
  }[];
}

const TrainingMetricChart: React.FC<TrainingMetricChartProps> = ({
  title,
  xAxisLabel,
  yAxisLabel,
  data,
  lines
}) => {
  return (
    <Card className="bg-dashboard-background border-gray-700 shadow-md text-dashboard-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280" 
                label={{ 
                  value: xAxisLabel, 
                  position: 'insideBottom', 
                  offset: -5, 
                  fill: '#D0D0D0',
                  fontSize: 12
                }} 
              />
              <YAxis 
                stroke="#6b7280"
                label={{ 
                  value: yAxisLabel, 
                  angle: -90, 
                  position: 'insideLeft',
                  fill: '#D0D0D0', 
                  fontSize: 12
                }} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(40, 44, 52, 0.9)', 
                  border: '1px solid #444',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#D0D0D0'
                }} 
              />
              <Legend />
              {lines.map((line) => (
                <Line
                  key={line.key}
                  type="monotone"
                  dataKey={line.key}
                  name={line.name}
                  stroke={line.color}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingMetricChart;
