"use client";

import {
  Wheat,
  ArrowRight,
  Mic,
  Zap,
  Truck,
  Sparkles,
  BookOpen,
  ChevronRight,
  Languages,
} from "lucide-react";
import { LANGUAGES, type AppLanguage, type UiStrings } from "./kisan-i18n";

export function LanguageSelectScreen({
  selectedLanguage,
  onSelect,
  onNext,
  t,
}: {
  selectedLanguage: AppLanguage;
  onSelect: (lang: AppLanguage) => void;
  onNext: () => void;
  t: UiStrings;
}) {
  const activeLang = LANGUAGES.find((l) => l.id === selectedLanguage)!;

  const langBadge: Record<AppLanguage, string> = {
    kashmiri: "KS",
    hindi: "HI",
    english: "EN",
  };

  return (
    <main className="min-h-dvh bg-kv-bg flex flex-col font-sans text-kv-text relative overflow-hidden">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(142, 255, 113, 0.14), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255, 215, 9, 0.06), transparent 50%), radial-gradient(ellipse 50% 35% at 0% 80%, rgba(96, 165, 250, 0.05), transparent 45%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,6,0)_0%,var(--kv-bg)_85%)]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-6 max-w-md mx-auto w-full">
        {/* Step + brand */}
        <header className="shrink-0 mb-5">
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="inline-flex items-center rounded-full border border-kv-border/20 bg-kv-surface/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-kv-text-muted">
              <span className="text-kv-primary">1</span>
              <span className="mx-1.5 text-kv-border">/</span>
              <span>2</span>
            </span>
            <div
              className="h-1 flex-1 max-w-[120px] rounded-full bg-kv-border/30 overflow-hidden"
              aria-hidden
            >
              <div className="h-full w-1/2 rounded-full bg-kv-primary/90" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-kv-primary/25 bg-kv-primary/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <Wheat className="h-6 w-6 text-kv-primary" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-[1.35rem] font-bold tracking-[-0.02em] text-kv-text">
                KisanVoice
              </h1>
              <p className="text-[13px] leading-snug text-kv-text-muted mt-0.5">
                {t.welcomeSubtitle}
              </p>
            </div>
          </div>
        </header>

        {/* Greeting preview */}
        <div className="shrink-0 mb-5 rounded-3xl border border-kv-border/20 bg-gradient-to-b from-kv-surface to-kv-surface/30 px-5 py-5 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <p
            key={activeLang.id}
            dir={activeLang.dir}
            className="min-h-[2.5rem] flex items-center justify-center text-center text-[clamp(1.35rem,4.5vw,1.7rem)] font-semibold leading-snug text-kv-primary animate-[fadeInUp_0.35s_ease-out]"
            style={{
              fontFamily:
                activeLang.dir === "rtl"
                  ? "var(--font-noto-nastaliq)"
                  : "inherit",
            }}
          >
            {activeLang.greeting}
          </p>
        </div>

        {/* Language list */}
        <div className="min-h-0 flex-1 flex flex-col">
          <h2 className="flex items-center gap-2 mb-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-kv-text-muted">
            <Languages className="h-3.5 w-3.5 text-kv-text-muted" strokeWidth={2} />
            {t.chooseLanguage}
          </h2>

          <div
            className="space-y-2.5 pb-2"
            role="radiogroup"
            aria-label={t.chooseLanguage}
          >
            {LANGUAGES.map((lang) => {
              const isActive = lang.id === selectedLanguage;
              return (
                <button
                  key={lang.id}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  dir="ltr"
                  onClick={() => onSelect(lang.id)}
                  className={[
                    "group w-full flex items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kv-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-kv-bg",
                    "active:scale-[0.99]",
                    isActive
                      ? "border-kv-primary/40 bg-kv-primary/[0.09] shadow-[0_0_0_1px_rgba(142,255,113,0.15)]"
                      : "border-kv-border/25 bg-kv-surface/90 hover:border-white/[0.12] hover:bg-kv-surface-hover",
                  ].join(" ")}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kv-border/20 bg-kv-bg-elevated text-[11px] font-bold tabular-nums tracking-wide text-kv-primary/90 shadow-inner"
                    aria-hidden
                  >
                    {langBadge[lang.id]}
                  </span>
                  <div className="min-w-0 flex-1 text-start">
                    <p
                      dir={lang.dir}
                      className={`text-[15px] font-semibold leading-snug ${isActive ? "text-kv-primary" : "text-kv-text"}`}
                      style={{
                        fontFamily:
                          lang.dir === "rtl"
                            ? "var(--font-noto-nastaliq)"
                            : "inherit",
                      }}
                    >
                      {lang.nativeName}
                    </p>
                    <p
                      className="mt-0.5 text-[11.5px] leading-tight text-kv-text-muted"
                      lang="en"
                    >
                      <span className="text-kv-text-muted">{lang.name}</span>
                      <span className="mx-1.5 text-kv-border">·</span>
                      <span>{lang.script}</span>
                    </p>
                  </div>
                  <span
                    className={[
                      "flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                      isActive
                        ? "border-kv-primary bg-kv-primary"
                        : "border-kv-border group-hover:border-kv-text-muted",
                    ].join(" ")}
                    aria-hidden
                  >
                    {isActive && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-kv-primary-fg"
                      >
                        <path
                          d="M3 7L6 10L11 4"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA — same column as cards; mt-auto keeps it off the list on tall screens */}
        <div className="mt-8 mt-auto shrink-0 border-t border-kv-border/20 pt-6 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={onNext}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-kv-primary to-kv-primary-end py-3.5 text-[15px] font-semibold text-kv-primary-fg shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-4px_rgba(94,214,42,0.45)] hover:brightness-[1.03] active:scale-[0.98] active:brightness-[0.97] transition-all"
          >
            {t.next}
            <ArrowRight className="h-4 w-4 opacity-90" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </main>
  );
}

export function FeatureGuideScreen({
  language,
  onComplete,
  t,
}: {
  language: AppLanguage;
  onComplete: () => void;
  t: UiStrings;
}) {
  const features = [
    {
      title: t.feature1Title,
      desc: t.feature1Desc,
      icon: <Mic className="w-7 h-7" />,
      color: "from-[#8eff71]/15 to-transparent border-kv-primary/20",
      iconColor: "text-kv-primary",
    },
    {
      title: t.feature2Title,
      desc: t.feature2Desc,
      icon: <Zap className="w-7 h-7" />,
      color: "from-[#ffd709]/15 to-transparent border-[#ffd709]/20",
      iconColor: "text-[#ffd709]",
    },
    {
      title: t.feature3Title,
      desc: t.feature3Desc,
      icon: <Truck className="w-7 h-7" />,
      color: "from-[#60a5fa]/15 to-transparent border-[#60a5fa]/20",
      iconColor: "text-[#60a5fa]",
    },
    {
      title: t.feature4Title,
      desc: t.feature4Desc,
      icon: <Sparkles className="w-7 h-7" />,
      color: "from-[#a78bfa]/15 to-transparent border-[#a78bfa]/20",
      iconColor: "text-[#a78bfa]",
    },
  ];

  return (
    <main className="min-h-screen bg-kv-bg flex flex-col items-center px-5 py-10 font-sans text-kv-text relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-kv-primary/4 rounded-full blur-[120px] pointer-events-none" />

      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-1.5 rounded-full bg-kv-primary" />
        <div className="w-10 h-1.5 rounded-full bg-kv-primary" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="w-8 h-8 text-kv-primary" />
        <h1
          className="text-[26px] font-extrabold tracking-tight"
          dir={language === "kashmiri" ? "rtl" : "ltr"}
          style={{
            fontFamily:
              language === "kashmiri"
                ? "var(--font-noto-nastaliq)"
                : "inherit",
          }}
        >
          {t.featureGuideTitle}
        </h1>
      </div>
      <p
        className="text-[16px] text-kv-text-muted mb-8 font-medium text-center max-w-xs"
        dir={language === "kashmiri" ? "rtl" : "ltr"}
        style={{
          fontFamily:
            language === "kashmiri"
              ? "var(--font-noto-nastaliq)"
              : "inherit",
        }}
      >
        {t.featureGuideSubtitle}
      </p>

      {/* Feature cards */}
      <div className="w-full max-w-sm space-y-4 mb-10">
        {features.map((f, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${f.color} rounded-[20px] border p-5 flex items-start gap-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md`}
            style={{
              animationDelay: `${i * 100}ms`,
              animation: "fadeInUp 0.5s ease-out both",
            }}
          >
            <div
              className={`w-12 h-12 rounded-[14px] bg-kv-bg/60 flex items-center justify-center shrink-0 ${f.iconColor}`}
            >
              {f.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-[17px] font-extrabold text-kv-text mb-1 leading-snug"
                dir={language === "kashmiri" ? "rtl" : "ltr"}
                style={{
                  fontFamily:
                    language === "kashmiri"
                      ? "var(--font-noto-nastaliq)"
                      : "inherit",
                }}
              >
                {f.title}
              </p>
              <p
                className="text-[14px] text-kv-text-muted leading-relaxed"
                dir={language === "kashmiri" ? "rtl" : "ltr"}
                style={{
                  fontFamily:
                    language === "kashmiri"
                      ? "var(--font-noto-nastaliq)"
                      : "inherit",
                }}
              >
                {f.desc}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-kv-border shrink-0 mt-1" />
          </div>
        ))}
      </div>

      {/* Get Started button */}
      <button
        onClick={onComplete}
        className="w-full max-w-sm py-5 bg-gradient-to-b from-kv-primary to-kv-primary-end text-kv-primary-fg rounded-[18px] font-extrabold text-[18px] shadow-[0_8px_32px_var(--kv-mic-glow)] hover:shadow-[0_8px_48px_var(--kv-mic-glow)] cursor-pointer active:scale-[0.97] transition-all flex items-center justify-center gap-3"
        dir={language === "kashmiri" ? "rtl" : "ltr"}
        style={{
          fontFamily:
            language === "kashmiri"
              ? "var(--font-noto-nastaliq)"
              : "inherit",
        }}
      >
        <Sparkles className="w-5 h-5" />
        {t.getStarted}
      </button>

    </main>
  );
}
