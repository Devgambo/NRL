import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function NeonGradientCardDemo({heading, text}) {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#fc0101] from-35% to-[#0062ff] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        {heading}
      </span>
      <div>
        {text}
      </div>
    </NeonGradientCard>
  );
}
