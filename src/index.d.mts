// Objectif : décrire les types de l’API métier publique.
import type { JevProvider, JevUsage } from "./jev.mjs";
export type SourceRecord = { id: string; text: string; source: { url: string; date: string; [key: string]: unknown }; extracts?: unknown[]; [key: string]: unknown };
export type Decision = "context_supported" | "review_required" | "context_uncertain" | "no_extract";
export type DecisionResult = { decision: Decision; label: string; probability: number; confidence?: number; review: boolean; deterministic: boolean; usage?: JevUsage };
export const DECISIONS: Readonly<Record<Decision, string>>;
export function archiveExtractCase(input: unknown): SourceRecord;
export function assessArchiveExtract(input: unknown, provider: JevProvider): Promise<DecisionResult>;
export function runCli(argv: string[], io?: { log(value: string): void }): Promise<void>;
