export enum CollectionColors {
  nemesia = "bg-gradient-to-r from-emerald-400 to-cyan-400",
  poppy = "bg-gradient-to-r from-rose-400 to-red-500",
  snowflake = "bg-gradient-to-r from-indigo-400 to-cyan-400",
  verbena = "bg-gradient-to-r from-violet-500 to-purple-500",
  metal = "bg-gradient-to-r from-slate-500 to-slate-800",
  rose = "bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-400",
  lavender = "bg-gradient-to-r from-violet-400 to-purple-500",
  mint = "bg-gradient-to-r from-lime-400 to-emerald-500",
  peach = "bg-gradient-to-r from-rose-400 to-orange-500",
  banana = "bg-gradient-to-r from-amber-400 to-yellow-500",
  tomato = "bg-gradient-to-r from-orange-400 to-red-500",
}

export type CollectionColor = keyof typeof CollectionColors;
