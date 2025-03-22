
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

interface SkillsChartProps {
  skills: {
    name: string;
    value: number;
    color: string;
  }[];
}

const SkillsChart = ({ skills }: SkillsChartProps) => {
  return (
    <div className="w-full h-64 md:h-80">
      <ChartContainer 
        className="h-full"
        config={{
          skill: { color: "#2196F3" }
        }}
      >
        <BarChart data={skills} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} domain={[0, 100]} />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" name="Skill Level" nameKey="name" radius={[4, 4, 0, 0]}>
            {skills.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default SkillsChart;
