import { useEffect, useRef } from 'react';

type ProgressHeatmapProps = {
  values: Array<{ date: string; value: number }>;
};

export function ProgressHeatmap({ values }: ProgressHeatmapProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    async function renderHeatmap() {
      if (!rootRef.current) return;

      // Optional dependency: cal-heatmap (lazy loaded so app still works without it)
      try {
        // @ts-ignore optional package
        const [{ default: CalHeatmap }, d3Fetch] = await Promise.all([
          import('cal-heatmap'),
          import('d3-fetch')
        ]);

        const cal = new CalHeatmap();
        await cal.paint(
          {
            itemSelector: rootRef.current,
            range: 3,
            domain: { type: 'month' },
            subDomain: { type: 'day', width: 14, height: 14, radius: 3 },
            data: { source: values, x: 'date', y: 'value' },
            scale: { color: { type: 'threshold', range: ['#1e293b', '#2563eb', '#22c55e'], domain: [1, 3] } }
          },
          [[d3Fetch]]
        );
        cleanup = () => cal.destroy();
      } catch {
        rootRef.current.innerHTML = '<div class="text-slate-400 text-sm">Heatmap available when cal-heatmap is installed.</div>';
      }
    }

    void renderHeatmap();
    return () => cleanup?.();
  }, [values]);

  return <div ref={rootRef} className="rounded-xl border border-slate-700 bg-slate-900/70 p-3" />;
}
