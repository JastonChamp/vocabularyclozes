import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ProgressHeatmap } from './ProgressHeatmap';

type DashboardProps = {
  streak: number;
  xp: number;
  hearts: number;
  mastery: number;
  dueToday: number;
  weakWords: string[];
};

const weeklyData = [
  { day: 'Mon', score: 45 },
  { day: 'Tue', score: 55 },
  { day: 'Wed', score: 58 },
  { day: 'Thu', score: 62 },
  { day: 'Fri', score: 70 },
  { day: 'Sat', score: 78 },
  { day: 'Sun', score: 81 }
];

const heatmapData = Array.from({ length: 90 }).map((_, i) => ({
  date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
  value: Math.floor(Math.random() * 5)
}));

export function Dashboard({ streak, xp, hearts, mastery, dueToday, weakWords }: DashboardProps) {
  return (
    <div className="space-y-4 text-white">
      <div className="grid gap-3 md:grid-cols-3">
        <StatCard label="Streak" value={`🔥 ${streak}`} />
        <StatCard label="XP" value={`⭐ ${xp}`} />
        <StatCard label="Hearts" value={`❤️ ${hearts}`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr,1fr]">
        <motion.div whileHover={{ y: -2 }} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
          <h3 className="font-semibold">Weekly Learning Trend</h3>
          <div className="mt-2 h-56">
            <ResponsiveContainer>
              <LineChart data={weeklyData}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
          <h3 className="font-semibold">Overall Cloze Mastery</h3>
          <div className="mt-4 grid place-items-center">
            <div className="grid h-36 w-36 place-items-center rounded-full border-8 border-indigo-500 text-2xl font-bold">
              {mastery}%
            </div>
            <p className="mt-2 text-sm text-slate-300">Due today: {dueToday} items</p>
          </div>
        </motion.div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
        <h3 className="mb-2 font-semibold">Activity Heatmap</h3>
        <ProgressHeatmap values={heatmapData} />
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
        <h3 className="mb-3 font-semibold">Weakest Words / Topics</h3>
        <div className="flex gap-2 overflow-auto pb-1">
          {weakWords.map((w) => (
            <button key={w} className="whitespace-nowrap rounded-full border border-rose-400/50 bg-rose-500/10 px-3 py-1 text-sm">
              Practice {w}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
      <div className="text-sm text-slate-300">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </motion.div>
  );
}
